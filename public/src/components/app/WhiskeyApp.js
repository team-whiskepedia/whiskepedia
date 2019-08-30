import Component from './Component.js';
import Header from './Header.js';
import WhiskeyList from '../whiskeys/WhiskeyList.js';

class WhiskeyApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

    }

    renderHTML() {
        return /*html*/`
            
        `;
    }
}

export default WhiskeyApp;