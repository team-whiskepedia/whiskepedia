import Component from '../Component.js';
import WhiskeyItem from './WhiskeyItem.js';
import { SortPaginate } from '../app/SortPaginate.js';

class WhiskeyList extends Component {
    onRender(dom) {
        const whiskeys = this.props.whiskeys;

        const sortPaginateBar = new SortPaginate({ sort: this.props.sort || '' });
        dom.prepend(sortPaginateBar.renderDOM());

        const listArea = dom.querySelector('.whiskey-container');
        // const favorites = getFavorites();
        whiskeys.forEach(whiskey => {
            const props = { 
                whiskey: whiskey, 
                removedFavorite: this.props.removedFavorite
            };
            // favorites.forEach(favorite => {
            //     if(whiskey.id === favorite.whiskey_id) {
            //         whiskey.isFavorite = true;
            //     }    
            // });
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