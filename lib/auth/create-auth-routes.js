const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('./jwt');

function getProfileWithToken(user) {
    // eslint-disable-next-line no-unused-vars
    const { hash, ...rest } = user;
    return {
        ...rest,
        token: jwt.sign({ id: user.id })
    };
}

module.exports = function createAuthRoutes(queries) {
    // eslint-disable-next-line new-cap
    const router = express.Router();

    router.post('/signup', (req, res) => {
        const { password, ...user } = req.body;
        const email = user.email;

        // email and password needs to exist
        if(!email || !password) {
            res.status(400).json({ error: 'email and password required' });
            return;
        }

        // email needs to not exist already
        queries.selectUser(email)
            .then(foundUser => {
                if(foundUser) {
                    res.status(400).json({ error: 'email already exists' });
                    return;
                }

                // insert into profile the new user
                queries.insertUser(user, bcrypt.hashSync(password, 8))
                    .then(user => {
                        res.json(getProfileWithToken(user));
                    });
            });
    });

    router.post('/signin', (req, res) => {
        const body = req.body;
        const email = body.email;
        const password = body.password;

        // email and password needs to exist
        if(!email || !password) {
            res.status(400).json({ error: 'email and password required' });
            return;
        }

        queries.selectUser(email)
            .then(user => {
                // does email match one in db?
                // #1 !user - if no user, then no match on a row for email
                // #2 !compareSync - provided password did not match hash from db
                if(!user || !bcrypt.compareSync(password, user.hash)) {
                    res.status(400).json({ error: 'email or password incorrect' });
                    return;
                }

                res.json(getProfileWithToken(user));
            });
    });

    return router;
};
