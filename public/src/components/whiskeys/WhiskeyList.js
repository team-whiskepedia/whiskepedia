import Component from '../Component.js';
import WhiskeyItem from './WhiskeyItem.js';

class WhiskeyList extends Component {
    onRender(dom) {
        const whiskeys = this.props.whiskeys;

        whiskeys.forEach(whiskey => {
            const props = { whiskey: whiskey };
            const whiskeyItem = new WhiskeyItem(props);
            const whiskeyItemDOM = whiskeyItem.renderDOM();
            dom.appendChild(whiskeyItemDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class="whiskeys"></ul>
        `;
    }
}

export default WhiskeyList;