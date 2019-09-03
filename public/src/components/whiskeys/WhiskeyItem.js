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
                <img class="list-img" src="${whiskey.detail_img_url}" alt=""/>
                <div className="reg-rat">
                <p>Region: ${whiskey.region}</p>
                <p>Rating: ${whiskey.rating}</p>
                <p>Flavors: Cherry, Oak, Peaty</p>
                </div>
            </div>
        </li>
            
        `;
    }
}

export default WhiskeyItem;