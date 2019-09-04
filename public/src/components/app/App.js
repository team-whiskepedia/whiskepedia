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
                <main class="container">
                    <h3>Welcome!</h3>
                    <div class="image-container">
                        <div class="magnifier-container">
                            <div class=img-magnifier-glass></div>
                            <img src="assets/whiskey-sprite.png" alt="bottles of whiskey">
                        </div>
                    </div>
                    <section class="info">
                        <p>
                            Whiskepedia contains hundreds of bottles of whiskey, in various styles, 
                            cataloged by their flavor profiles.
                            <ul>
                                <li>Search for your favorite whiskeys. </li>
                                <li>Identify the flavors that work best for your palate.</li>
                                <li>Explore new flavor profiles.</li>
                                <li>Fine-tune the profile of your next drink.</li>
                            </ul>
                        </p>
                        <div class="row">
                            <p>Login now to explore your customized flavor profile!</p>
                            <a href="/auth.html">Login</a>
                        </div>
                        <div class="row">
                            <p>Or go directly to search the database</p>
                            <a href="/browse.html">Browse</a>
                        </div>
                    </section>
                </main>
            </div>
        `;
    }
}

