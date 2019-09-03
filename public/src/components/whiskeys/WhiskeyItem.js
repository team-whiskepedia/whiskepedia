import Component from '../Component.js';

class WhiskeyItem extends Component {
    renderHTML() {
        const whiskey = this.props.whiskey;

        return /*html*/`
        <li class="whiskey-items">
            <div class="title-container">
                <h2 class="whiskey-title">${whiskey.title}</h2>
            </div>
            <div class="img-container">
                <img     class="list-img" src="${whiskey.detail_img_url}" alt=""/>
            <div className="details-container">
                <p><span class="whiskey-details">Region:</span> ${whiskey.region}</p>
                <p><span class="whiskey-details">Rating:</span> ${whiskey.rating}</p>
                <p><span class="whiskey-details">Price:</span> $${whiskey.price} /bottle</p>
                <p><span class="whiskey-details">Flavors:</span> ${whiskey.flavor_1}, ${whiskey.flavor_2}, ${whiskey.flavor_3}</p>
            </div>
            </div>
        </li>
            
        `;
    }
}

export default WhiskeyItem;