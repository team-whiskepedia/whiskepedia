const client = require('../lib/client');

// need to connect flavors to whiskeys
// need to create favorites table
// need to add img to users
client.query(`

    CREATE TABLE whiskeys (
        id INTEGER PRIMARY KEY NOT NULL,
        title VARCHAR(256) NOT NULL,
        list_img_url VARCHAR(256) NOT NULL,
        detail_img_url VARCHAR(256) NOT NULL,
        region VARCHAR(256) NOT NULL,
        rating INTEGER NOT NULL,
        description VARCHAR(256) NOT NULL
    );
    
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(256) NOT NULL,
        hash VARCHAR(512) NOT NULL,
        display_name VARCHAR(256) NOT NULL
    );
`)
    .then(
        () => console.log('create tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });