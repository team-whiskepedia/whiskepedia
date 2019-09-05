import Component from '../Component.js';
import WhiskeyItem from './WhiskeyItem.js';
import { SortPaginate } from '../app/SortPaginate.js';

class WhiskeyList extends Component {
    onRender(dom) {
        const whiskeys = this.props.whiskeys;

        const sortPaginateBar = new SortPaginate({ 
            pages: { current: 1, last: 20 },
            pageChange: this.props.pageChange 
        });
        dom.prepend(sortPaginateBar.renderDOM());

        const listArea = dom.querySelector('.whiskey-container');
        whiskeys.forEach(whiskey => {
            const props = { whiskey: whiskey };
            const whiskeyItem = new WhiskeyItem(props);
            const whiskeyItemDOM = whiskeyItem.renderDOM();
            listArea.appendChild(whiskeyItemDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <ul class="whiskey-container"></ul>
            </div>
        `;
    }
}

export default WhiskeyList;