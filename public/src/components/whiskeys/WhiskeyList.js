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
            const whiskeyItem = new WhiskeyItem({ 
                whiskey: whiskey, 
                flavorCategories: flavorCategories,
                removedFavorite: this.props.removedFavorite
            });
            listArea.appendChild(whiskeyItem.renderDOM());
        });
    }

    renderHTML() {
        return /*html*/`
            <div class="whiskey-top-level">
                <ul class="whiskey-container my-bottles"></ul>
            </div>
        `;
    }
}

export default WhiskeyList;