import Component from '../Component.js';

class WhiskeyItem extends Component {
    renderHTML() {
        const whiskey = this.props.whiskey;

        return /*html*/`
        <li class="whiskey-items">
           <h1>${whiskey.title}</h1>
           <p>Region: ${whiskey.region}</p>
           <p>Rating: ${whiskey.rating}</p>
           <p>${whiskey.description}</p>

        </li>
            
        `;
    }
}

export default WhiskeyItem;