import Component from '../Component.js';
import store from '../../services/store.js';

export class Header extends Component {
    
    onRender(dom) {
        const hamburgerMenu = dom.querySelector('.mobile-nav > a');
        const mobileNavLinksList = dom.querySelector('.mobile-nav-links');
        hamburgerMenu.addEventListener('click', () => {
            mobileNavLinksList.classList.toggle('displayed');
        });
        if(store.hasToken()) {
            const button = dom.querySelector('.log-out');
            button.remove('hidden');

            button.addEventListener('click', () => {
                store.removeToken();
                location = './';
            });
        }


    }

    renderHTML() {
        const user = store.getUser() || 'Guest';

        return /*html*/`
            <header class="header dark">
                <nav class="mobile-nav hide-lg">
                    <a><i class="material-icons">menu</i></a>
                    <ul class='mobile-nav-links'>
                        <li><a href="#">Browse</a></li>
                        <li><a href="#">My Bottles</a></li>
                        <li><a href="/auth.html">Login</a></li>
                        <li><a class ="log-out" href="#">Logout</a></li>
                    </ul>
                </nav>
                <div class="logo-container">
                    <img class="hide-sm" src="assets/woodford.png" alt="logo image">
                    <a class="logo" href="index.html">Whiskepedia</a>
                </div>
                <nav class="desktop-nav hide-sm">
                    <div>
                        <a href="#">Logged in as ${user}</a>
                    </div>
                    <ul class="flex">
                        <li><a href="#">Browse</a></li>
                        <li><a href="#">My Bottles</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}
