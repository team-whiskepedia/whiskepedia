// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const client = require('./lib/client');

// Auth
const ensureAuth = require('./lib/auth/ensure-auth');
const createAuthRoutes = require('./lib/auth/create-auth-routes');
const authRoutes = createAuthRoutes({
    selectUser(email) {
        return client.query(`
        SELECT id, email, hash, display_name as "name" 
        FROM users
        WHERE email = $1;
        `,
        [email]
        ).then(result => result.rows[0]);
    },
    insertUser(user, hash) {
        return client.query(`
            INSERT into users (email, hash, display_name)
            VALUES ($1, $2, $3)
            RETURNING id, email, display_name as "name";
        `,
        [user.email, hash, user.displayName]
        ).then(result => result.rows[0]);
    }
});

// Application Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev')); // http logging
app.use(cors()); // enable CORS request
app.use(express.static('public')); // enable serving files from public
app.use(express.json()); // enable reading incoming json data

// setup authentication routes
app.use('/api/auth', authRoutes);

app.get('/api/whiskeys', (req, res) => {
    const orderByDirective = 
        (req.query.sort === 'flavor-a-z') ? `ORDER BY flavor_1 ASC` :
            (req.query.sort === 'flavor-z-a') ? `ORDER BY flavor_1 DESC` :
                (req.query.sort === 'name-a-z') ? `ORDER BY title ASC` :
                    (req.query.sort === 'name-z-a') ? `ORDER BY title ASC` :
                        (req.query.sort === 'rating-high-low') ? `ORDER BY rating DESC` :
                            (req.query.sort === 'price-high-low') ? `ORDER BY price DESC` :
                                (req.query.sort === 'price-low-high') ? `ORDER BY price ASC` :
                                    ``;

    const flavorIdArray = req.query.flavors.split(',');
    const flavorDirectives = flavorIdArray.map(id => {
        const [yesNo, flavor] = id.split('-');
        return (yesNo === 'yes') ?
            `AND (flavor_1='${flavor}' OR flavor_2='${flavor}' OR flavor_3='${flavor}' OR flavor_4='${flavor}' OR flavor_5='${flavor}')`
            : `AND (flavor_1!='${flavor}' AND flavor_2!='${flavor}' AND flavor_3!='${flavor}' AND flavor_4!='${flavor}' AND flavor_5!='${flavor}')`;
    });
    client.query(`
        SELECT
            id,
            title,
            list_img_url,
            detail_img_url,
            region,
            rating,
            price,
            flavor_1,
            flavor_2,
            flavor_3,
            flavor_4,
            flavor_5,
            description
        FROM whiskeys
        WHERE title ILIKE '%' || $1 || '%'
        ${flavorDirectives.join(` `)}
        ${orderByDirective}
        LIMIT 100;
    `,
    [req.query.search])
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.get('/api/flavors', (req, res) => {
    client.query(`
        SELECT
            name,
            category,
            broad_category AS "broadCategory"
            FROM flavors;
            `)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

 // everything that starts with "/api" below here requires an auth token!
app.use('/api', ensureAuth);

// User Favorites       
app.get('/api/me/favorites', (req, res) => {
    client.query(`
    SELECT  id,
            title,
            user_id
    FROM favorites
    WHERE user_id = $1;
    `,
    [req.userId]
    )
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});
app.post('/api/me/favorites', (req, res) => {
    const drink = req.body;
    client.query(`
    INSERT INTO favorites (id, title, user_id)
    VALUES ($1, $2, $3)
    RETURNING id, title, user_id as "userId";
`,
    [ 
        drink.id,
        drink.title, 
        req.userId 
    ]
    )
        .then(result => {                                    
            res.json(result.rows[0]);
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});

app.delete('/api/me/favorites/:id', (req, res) => {
    client.query(`
        DELETE FROM favorites
        WHERE id = $1
        AND   user_id = $2;
    `,
    [req.params.id, req.userId]
    )
        .then(() => {
            res.json({ removed: true });
        })
        .catch(err => {
            res.status(500).json({
                error: err.message || err
            });
        });
});



// Start the server
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});