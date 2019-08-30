/* eslint-disable no-console */
import htmlToDOM from './htmlToDOM.js';

class Component {
    constructor(props) {
        this.props = props || {};
        this.state = {};
    }

    onRender(/*dom*/) {
        // no-op
    }

    renderDOM() {
        const html = this.renderHTML();
        if(typeof(html) !== 'string') {
            throw new Error(`Component "${this.constructor.name}" needs to return an html string from renderHTML`);
        }

        const dom = htmlToDOM(html);

        // remember the root Element for later for replacing or removing
        this.rootElement = dom;
        // call onRender to allow components to do additional work
        this.onRender(dom);

        // return to the caller
        return dom;
    }

    renderHTML() {
        throw new Error(`Component "${this.constructor.name}" needs to implement renderHTML`);
    }

    update(props) {
        props = props || {};
        // update the props:
        Object.assign(this.props, props);
        
        const oldRoot = this.rootElement;
        
        if(!oldRoot) {
            throw new Error(`"update()" was called on Component "${this.constructor.name}", but no prior render has happened. Be sure to call ".renderDOM()" before using ".update()"`);
        }

        const newDOM = this.renderDOM();
        oldRoot.replaceWith(newDOM);
    }
}

export default Component;