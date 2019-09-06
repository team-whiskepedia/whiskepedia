import Component from '../Component.js';
import WhiskeyItem from './WhiskeyItem.js';
import { SortPaginate } from '../app/SortPaginate.js';

class WhiskeyList extends Component {
    onRender(dom) {
        const whiskeys = this.props.whiskeys;
        const flavorCategories = this.props.flavorCategories;

        const sortPaginateBar = new SortPaginate({ sort: this.props.sort || '' });
        dom.prepend(sortPaginateBar.renderDOM());

        const listArea = dom.querySelector('.whiskey-container');
        whiskeys.forEach(whiskey => {
            const props = { 
                whiskey: whiskey, 
                flavorCategories: flavorCategories,
                removedFavorite: this.props.removedFavorite
            };
            const whiskeyItem = new WhiskeyItem(props);
            const whiskeyItemDOM = whiskeyItem.renderDOM();
            listArea.appendChild(whiskeyItemDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <ul class="whiskey-container my-bottles"></ul>
            </div>
        `;
    }
}

export default WhiskeyList;