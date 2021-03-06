const client = require('../lib/client');

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
        price INTEGER NOT NULL,
        flavor_1 VARCHAR(50) NOT NULL REFERENCES flavors(name),
        flavor_2 VARCHAR(50) NOT NULL REFERENCES flavors(name),
        flavor_3 VARCHAR(50) NOT NULL REFERENCES flavors(name),
        flavor_4 VARCHAR(50) REFERENCES flavors(name),
        flavor_5 VARCHAR(50) REFERENCES flavors(name),
        description VARCHAR(256) NOT NULL,
        flavor_names VARCHAR(50)[] NOT NULL,
        flavor_counts INTEGER[] NOT NULL,
        flavor_counts_normalized INTEGER[] NOT NULL
    );
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(256) NOT NULL,
        hash VARCHAR(512) NOT NULL,
        display_name VARCHAR(256) NOT NULL
    );
    CREATE TABLE favorites (
        title VARCHAR(256) NOT NULL PRIMARY KEY,
        whiskey_id INTEGER NOT NULL REFERENCES whiskeys(id),
        user_id INTEGER NOT NULL REFERENCES users(id),
        is_favorite BOOLEAN DEFAULT TRUE
    );
`)
    .then(
        () => console.log('create tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });