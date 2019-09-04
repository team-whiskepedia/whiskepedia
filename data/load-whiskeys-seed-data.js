const superagent = require('superagent');
const client = require('../lib/client');

const URL = 'https://evening-citadel-85778.herokuapp.com:443/shoot/';
let whiskeys = [];
async function getAllWhiskeys() {
    for(let page = 1; page <= 32; page++) {
        
        const url = `${URL}?page=${page}`;
        
        whiskeys = await superagent
            .get(url)
            .then(res => res.body.results)
            .then(page => whiskeys = [...whiskeys, ...page]);
    }
    return whiskeys;
}
getAllWhiskeys()
    .then(whiskeys => {
        Promise.all(
            whiskeys.map(whiskey => {
                if(whiskey.tags.length){
                    whiskey.tags.sort((tagA, tagB) => tagB.normalized_count - tagA.normalized_count);
                    return client.query(`
                    INSERT INTO whiskeys (id, title, list_img_url, detail_img_url, region, rating, price, description, flavor_1, flavor_2, flavor_3)
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
                    `,
                    [whiskey.id, whiskey.title, whiskey.list_img_url, whiskey.detail_img_url, whiskey.region, whiskey.rating, whiskey.price, whiskey.description, whiskey.tags[0].title, whiskey.tags[1].title, whiskey.tags[2].title]);
                }
            })
        )
            .then(
                () => console.log('seed whiskeys data load complete'),
                err => console.log(err)
            )
            .then(() => {
                client.end();
            });
    });