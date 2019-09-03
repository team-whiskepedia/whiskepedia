const client = require('../lib/client');
const flavors = require('./flavors');
const whiskeys = require('./whiskeys');

Promise.all(
    flavors.map(flavor => {
        return client.query(`
            INSERT INTO flavors (name, category, broad_category)
            VALUES ($1, $2, $3);
        `,
        [flavor.name, flavor.category, flavor.broadCategory])
            .then(result => result.rows[0]);
    })
)
    .then(() => {
        return Promise.all(
            whiskeys.map(whiskey => {
                return client.query(`
                    INSERT INTO whiskeys (id, title, list_img_url, detail_img_url, region, rating, description)
                    VALUES ($1, $2, $3, $4, $5, $6, $7);
                `,
                [whiskey.id, whiskey.title, whiskey.list_img_url, whiskey.detail_img_url, whiskey.region, whiskey.rating, whiskey.description]);
                //can replace above code to insert flavor information
                //return client.query(`
                //    INSERT INTO whiskeys (id, title, list_img_url, detail_img_url, region, rating, description, flavor_1, flavor_2, flavor_3)
                //    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
                //`,
                //[whiskey.id, whiskey.title, whiskey.list_img_url, whiskey.detail_img_url, whiskey.region, whiskey.rating, whiskey.description, whiskey.flavor1, whiskey.flavor2, whiskey.flavor3]);
            })
        );
    })
    .then(
        () => console.log('seed data load complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    })
;