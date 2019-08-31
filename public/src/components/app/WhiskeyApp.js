import Component from './Component.js';
import Header from './Header.js';
import WhiskeyList from '../whiskeys/WhiskeyList.js';
import { getWhiskeys } from '../../services/whiskey-api.js';
class WhiskeyApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');
        const whiskeyList = new WhiskeyList({
            whiskeys: []
        });

        main.appendChild(whiskeyList.renderDOM());

        getWhiskeys()
            .then(whiskeys => {
                whiskeyList.update({ whiskeys });
            });


    }

    renderHTML() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default WhiskeyApp;