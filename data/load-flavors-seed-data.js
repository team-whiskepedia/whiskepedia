const client = require('../lib/client');
const flavors = require('./flavors');

Promise.all(
    flavors.map(flavor => {
        return client.query(`
            INSERT INTO flavors (name, category, broad_category)
            VALUES ($1, $2, $3);
        `,
        [flavor.name, flavor.category, flavor.broadCategory]);
    })
)
    .then(
        () => console.log('seed flavors data load complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    })
;