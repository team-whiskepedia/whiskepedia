const client = require('../lib/client');
// const types = require('./flavors');
const whiskeys = require('./whiskeys');

// "Promise all" does a parallel execution of async tasks
Promise.all(
    whiskeys.map(whiskey => {
        return client.query(`
            INSERT INTO whiskeys (id, title, list_img_url, detail_img_url, region, rating, description)
            VALUES ($1, $2, $3, $4, $5, $6, $7);
        `,
        [whiskey.id, whiskey.title, whiskey.list_img_url, whiskey.detail_img_url, whiskey.region, whiskey.rating, whiskey.description]);
    })
)
    .then(
        () => console.log('seed data load complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });