const client = require('../lib/client');

// need to connect flavors to whiskeys
// need to create favorites table
// need to add img to users
client.query(`
    CREATE TABLE flavors (
        name VARCHAR(50) PRIMARY KEY NOT NULL,
        category VARCHAR(50) NOT NULL,
        broad_category VARCHAR(100) NOT NULL
    );
    CREATE TABLE whiskeys (
        id INTEGER PRIMARY KEY NOT NULL,
        title VARCHAR(256) NOT NULL,
        list_img_url VARCHAR(256) NOT NULL,
        detail_img_url VARCHAR(256) NOT NULL,
        region VARCHAR(256) NOT NULL,
        rating INTEGER NOT NULL,
        description VARCHAR(256) NOT NULL
    );
`)

//can be inserted above description field
//flavor_1 VARCHAR(50) NOT NULL REFERENCES flavors(name),
//flavor_2 VARCHAR(50) NOT NULL REFERENCES flavors(name),
//flavor_3 VARCHAR(50) NOT NULL REFERENCES flavors(name),


    .then(
        () => console.log('create tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });