    // make sure .env has been loaded
require('dotenv').config();
// "require" pg (after `npm i pg`)
const pg = require('pg');
// Use the pg Client
const Client = pg.Client;

const DATABASE_URL = process.env.DATABASE_URL;
// note: you will need to create the database!
const client = new Client(DATABASE_URL);

// call connect
client.connect()
    // provide success/failure log based on connection working
    .then(() => console.log('connected to db', DATABASE_URL))
    .catch(err => console.error('connection error', err));

// listen for errors on the connection and log them
client.on('error', err => {
    console.error('\n**** DATABASE ERROR ****\n\n', err);
});

// export so other modules (files) can use
module.exports = client;
