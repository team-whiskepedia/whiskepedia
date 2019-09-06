import Component from '../Component.js';
import { Header } from './Header.js';

export class About extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main class="container">
                    <h3>Meet the Drinkers</h3>
                    <section class="about-info">
                        <div class="developer-focus left">
                            <h3>Donna</h3>
                                <img src="" alt="">
                                <p>Info here</p>
                        </div>
                        <div class="developer-focus right">
                            <h3>John</h3>
                            <img src="" alt="">
                            <p>Info here</p>
                        </div>
                        <div class="developer-focus">
                            <div>
                                <h3>Dave</h3>
                                <img src="assets/dave-radar.png" alt="radar chart of the flavor profile of 'Rittenhouse Rye 100 proof'">
                            </div>
                            <div class="details-text">
                                <p>
                                    I am a web developer passionate about writing great code and helping team members with their growth.
                                    My prior experience is as a developer and manager in the semiconductor industry. 
                                    I bring an eye for detail and a passion for usability to all my projects.
                                </p>
                                <p>
                                    My favorite whiskey is Rittenhouse Rye 100. 
                                    Some people have called this a "bartender's whiskey" because of its price point and high alcohol content. 
                                    I typically drink it in an Old Fashioned.
                                </p>
                            </div>
                        </div>
                        <div class="row padded">
                            <p>Thank you for visiting. Enjoy your whiskey exploration!</p>
                            <a class="about-button" href="/auth.html">Login</a>
                            <a class="about-button" href="/browse.html">Browse</a>
                        </div>
                    </section>
                </main>
            </div>
        `;
    }
}

