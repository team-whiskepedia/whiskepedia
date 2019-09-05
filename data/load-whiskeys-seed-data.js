const superagent = require('superagent');
const client = require('../lib/client');

const URL = 'https://evening-citadel-85778.herokuapp.com:443/shoot/';
let whiskeys = [];
async function getAllWhiskeys() {
    for(let pageNumber = 1; pageNumber <= 32; pageNumber++) {
        
        const url = `${URL}?page=${pageNumber}`;
        
        whiskeys = await superagent
            .get(url)
            .then(res => res.body.results)
            .then(page => {
                console.log('saving page ', pageNumber, 'of 32');
                return whiskeys = [...whiskeys, ...page];
            });
    }
    return whiskeys;
}
getAllWhiskeys()
    .then(whiskeys => {
        Promise.all(
            whiskeys.map(whiskey => {
                if(whiskey.tags.length){
                    const tagsInPsqlFormat = { names: [], counts: [], countsNormalized: [] };
                    whiskey.tags.forEach(tag => {
                        tagsInPsqlFormat.names.push(tag.title);
                        tagsInPsqlFormat.counts.push(tag.count);
                        tagsInPsqlFormat.countsNormalized.push(tag.normalized_count);
                    });
                    const flavorNames = 'ARRAY [\'' + tagsInPsqlFormat.names.join('\', \'') + '\']';
                    const flavorCounts = 'ARRAY [' + tagsInPsqlFormat.counts.join(', ') + ']';
                    const flavorCountsNormalized = 'ARRAY [' + tagsInPsqlFormat.countsNormalized.join(', ') + ']';
                    whiskey.tags.sort((tagA, tagB) => tagB.normalized_count - tagA.normalized_count);
                    return client.query(`
                        INSERT INTO whiskeys (id, title, list_img_url, detail_img_url, region, rating, price, description, flavor_1, flavor_2, flavor_3, flavor_4, flavor_5, flavor_names, flavor_counts, flavor_counts_normalized)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, ${flavorNames}, ${flavorCounts}, ${flavorCountsNormalized});
                        `, [whiskey.id, whiskey.title, whiskey.list_img_url, whiskey.detail_img_url, whiskey.region, whiskey.rating, whiskey.price, whiskey.description, whiskey.tags[0].title, whiskey.tags[1].title, whiskey.tags[2].title, whiskey.tags[3].title, whiskey.tags[4].title] );
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