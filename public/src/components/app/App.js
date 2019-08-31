import Component from '../Component.js';
import { Header } from './Header.js';
// import store from '../../services/store.js';

export class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

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

