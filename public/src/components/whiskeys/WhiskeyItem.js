import Component from '../Component.js';

class WhiskeyItem extends Component {
    renderHTML() {
        const whiskey = this.props.whiskey;

        return /*html*/`
        <li>
            <h1>THIS IS A TEST</h1>
            <p>${whiskey.title}</p>
        </li>
            
        `;
    }
}

export default WhiskeyItem;