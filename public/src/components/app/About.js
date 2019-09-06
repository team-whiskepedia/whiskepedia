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
                        <div class="developer-focus">
                            <div>
                                <h3>Donna</h3>
                                <img src="assets/donna-radar.png" alt="radar chart of the flavor profile of 'Rittenhouse Rye 100 proof'">
                            </div>
                            <div class="details-text">
                                <p>
                                    Bio: Full Stack Web Developer with a professional background in marketing, design, and account management.
                                </p>
                                <p>
                                    Whiskey: Bruichladdich Port Charlotte 10. 
                                    While I’ve never tried it, I like the bottle, and the flavors seem really interesting. 
                                    It’s the one I’ve kept coming back to while we were building our app.
                                </p>
                            </div>
                        </div>
                        <div class="developer-focus">
                            <div>
                                <h3>John</h3>
                                <img src="assets/john-radar.png" alt="radar chart of the flavor profile of 'Rittenhouse Rye 100 proof'">
                            </div>
                            <div class="details-text">
                                <p>
                                    Bio: Full stack developer that can be found either trying to solve new and interesting problems with software 
                                    or wandering the trails with my dog.
                                </p>
                                <p>
                                    Whiskey: Jack Daniels Single Barrel.
                                    While this is my typical go-to, I like to drink from local selections to explore.
                                </p>
                            </div>
                        </div>
                        <div class="developer-focus">
                            <div>
                                <h3>Dave</h3>
                                <img src="assets/dave-radar.png" alt="radar chart of the flavor profile of 'Rittenhouse Rye 100 proof'">
                            </div>
                            <div class="details-text">
                                <p>
                                    Bio: web developer passionate about writing great code and helping team members with their growth.
                                    My passions are paying attention to all the details and bringing efficient usability to my projects.
                                </p>
                                <p>
                                    Whiskey: Rittenhouse Rye 100. 
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
                    <h3>About the Flavor Profiles</h3>
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
                        <div class="flex-img">
                            <img src="assets/flavor-wheel.jpg" alt="whiskey flavor wheel graphic">
                            <img src="assets/flavor-wheel-2.gif" alt="whiskey flavor wheel graphic">
                        </div>
                    </section>
                </main>
            </div>
        `;
    }
}

