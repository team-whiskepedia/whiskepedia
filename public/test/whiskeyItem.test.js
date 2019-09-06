import WhiskeyItem from '../src/components/whiskeys/WhiskeyItem.js';
const test = QUnit.test;

QUnit.module('Whiskey Item Test');

test('renders', assert => {
    // arrange
    const whiskey = {
        
    };

    const expected = /*html*/`
    <li class="whiskey-items"> 
    <div class="title-container"> 
        <i class="material-icons favorite-star star ">star</i> 
        <h2 class="whiskey-title">undefined</h2> 
    </div> 
    <div class="img-container"> 
        <img class="list-img" src="undefined" alt=""/> 
        <div className="details-container"> 
            <p class="details"><span class="whiskey-details">Region:</span> undefined</p> 
            <p class="details"><span class="whiskey-details">Rating:</span> undefined</p> 
            <p class="details"><span class="whiskey-details">Price:</span> $undefined /bottle</p> 
            <p class="details"><span class="whiskey-details">Flavors:</span> undefined, undefined, undefined, undefined, undefined</p> 
        </div> 
        <div class="chart-container"> 
            <canvas></canvas> 
        </div> 
    </div> 
    </li>
    `;

    // act
    const item = new WhiskeyItem({ whiskey });
    const html = item.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});
