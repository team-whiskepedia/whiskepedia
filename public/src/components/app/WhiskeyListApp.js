import Component from '../Component.js';
import { Header } from './Header.js';
import WhiskeyList from '../whiskeys/WhiskeyList.js';
import { getWhiskeys, getFlavors } from '../../services/whiskey-api.js';
import { SearchContainer } from './SearchContainer.js';
import hashStorage from '../../services/hash-storage.js';

class WhiskeyListApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'List of Whiskeys' });
        dom.prepend(header.renderDOM());
        
        const main = dom.querySelector('main');
        
        const searchContainer = new SearchContainer({ flavors: [] });
        main.appendChild(searchContainer.renderDOM());
        const list = new WhiskeyList({ whiskeys: [] });
        main.appendChild(list.renderDOM());

        function loadWhiskeys() {
            const options = hashStorage.get();
            getWhiskeys(options)
                .then(whiskeys => {
                    list.update({ 
                        whiskeys: whiskeys,
                        sort: options.sort || '' 
                    });
                });
        }

        loadWhiskeys();
        window.addEventListener('hashchange', () => loadWhiskeys());

        getFlavors()
            .then(flavors => {
                searchContainer.update({ flavors });
            });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main class="responsive-main"></main>
            </div>
        `;
    }
}

export default WhiskeyListApp;