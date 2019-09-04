import Component from '../Component.js';
import WhiskeyItem from './WhiskeyItem.js';
import { SortPaginate } from '../app/SortPaginate.js';

class WhiskeyList extends Component {
    onRender(dom) {
        const whiskeys = this.props.whiskeys;

        const sortPaginateBar = new SortPaginate();
        dom.appendChild(sortPaginateBar.renderDOM());

        whiskeys.forEach(whiskey => {
            const props = { whiskey: whiskey };
            const whiskeyItem = new WhiskeyItem(props);
            const whiskeyItemDOM = whiskeyItem.renderDOM();
            dom.appendChild(whiskeyItemDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class="whiskey-container"></ul>
        `;
    }
}

export default WhiskeyList;