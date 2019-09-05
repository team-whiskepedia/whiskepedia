import Component from '../Component.js';
import { Header } from './Header.js';
import WhiskeyList from '../whiskeys/WhiskeyList.js';
import { getFavorites } from '../../services/whiskey-api.js';


class FavoritesApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');
        const whiskeyList = new WhiskeyList({ whiskeys: [] });
        main.appendChild(whiskeyList.renderDOM());

        getFavorites()
            .then(whiskeys => {
                whiskeyList.update({ whiskeys: whiskeys });
            });

    }
    renderHTML() {
        return /*html*/`
        <div>
            <!-- header goes here -->
            <main></main>
        </div>
        `;
    }
}

export default FavoritesApp;