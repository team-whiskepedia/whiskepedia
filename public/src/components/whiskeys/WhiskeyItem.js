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
            <div className="reg-rat">
                <p><span class="whiskey-details">Region:</span> ${whiskey.region}</p>
                <p><span class="whiskey-details">Rating:</span> ${whiskey.rating}</p>
                <p><span class="whiskey-details">Price:</span> $65 /bottle</p>
                <p><span class="whiskey-details">Flavors:</span> Cherry, Oak, Peaty</p>
            </div>
            </div>
        </li>
            
        `;
    }
}

export default WhiskeyItem;