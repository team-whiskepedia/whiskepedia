import Component from '../Component.js';
import { Header } from './Header.js';
import WhiskeyList from '../whiskeys/WhiskeyList.js';
import { getWhiskeys } from '../../services/whiskey-api.js';

class WhiskeyListApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'List of Whiskeys' });
        dom.prepend(header.renderDOM());
        
        const main = dom.querySelector('main');

        const list = new WhiskeyList({ whiskeys: [] });
        main.appendChild(list.renderDOM());

        getWhiskeys()
            .then(whiskeys => {
                list.update({ whiskeys });
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

export default WhiskeyListApp;