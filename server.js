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

    // const flavorDirectives = [
    //     `AND (flavor_1='wood' OR flavor_2='wood' OR flavor_3='wood')`,
    //     `AND (flavor_1='vanilla' OR flavor_2='vanilla' OR flavor_3='vanilla')`,
    //     `AND (flavor_1!='sweet' AND flavor_2!='sweet' AND flavor_3!='sweet')`
    // ];
//    ${flavorDirectives.join(` `)}
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
            description
        FROM whiskeys
        WHERE title ILIKE '%' || $1 || '%'
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

// Start the server
app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});