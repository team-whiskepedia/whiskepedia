import Component from '../Component.js';
import store from '../../services/store.js';

export class Header extends Component {
    
    onRender(dom) {
        const hamburgerMenu = dom.querySelector('.mobile-nav > a');
        const mobileNavLinksList = dom.querySelector('.mobile-nav-links');
        hamburgerMenu.addEventListener('click', () => {
            mobileNavLinksList.classList.toggle('displayed');
        });
        const loginButton = dom.querySelector('.log-in');
        const logoutButton = dom.querySelector('.log-out');
        const loginButtonMobile = dom.querySelector('.log-in-mobile');
        const logoutButtonMobile = dom.querySelector('.log-out-mobile');
        const myBottles = dom.querySelector('.bottles');
        const myBottlesMobile = dom.querySelector('.bottles-mobile');
        console.log(myBottles, myBottlesMobile);
        
        if(store.hasToken()) {
            logoutButton.classList.remove('no-display');
            logoutButtonMobile.classList.remove('no-display');
            loginButton.classList.add('no-display');
            loginButtonMobile.classList.add('no-display');
            myBottles.classList.remove('no-display');
            myBottlesMobile.classList.remove('no-display');

        }
        if(!store.hasToken() && location.pathname !== '/auth.html') {
            loginButton.classList.remove('no-display');
            loginButtonMobile.classList.remove('no-display');
            logoutButton.classList.add('no-display');
            logoutButtonMobile.classList.add('no-display');
            myBottles.classList.add('no-display');
            myBottlesMobile.classList.add('no-display');
            location = './auth.html';
        } 
        logoutButton.addEventListener('click', () => {
            store.removeToken();
            store.removeUser();
            loginButton.classList.remove('.no-display');
            logoutButton.classList.add('.no-display');
            location = './';
        });
    }
    

    renderHTML() {
        const user = store.getUser() || 'Not Logged In';

        return /*html*/`
            <header class="header dark">
                <nav class="mobile-nav hide-lg">
                    <a><i class="material-icons">menu</i></a>
                    <ul class='mobile-nav-links'>
                        <li><a href="#">Browse</a></li>
                        <li class="bottles-mobile no-display"><a href="#">My Bottles</a></li>
                        <li class="log-in-mobile"><a href="/auth.html">Login</a></li>
                        <li class="log-out-mobile no-display"><a href="/auth.html">Logout</a></li>
                    </ul>
                </nav>
                <div class="logo-container">
                    <img class="hide-sm" src="assets/woodford.png" alt="logo image">
                    <a class="logo" href="index.html">Whiskepedia</a>
                </div>
                <nav class="desktop-nav hide-sm">
                    <div>
                        <a href="#">${user}</a>
                    </div>
                    <ul class="flex">
                        <li><a href="#">Browse</a></li>
                        <li class="bottles no-display"><a href="#">My Bottles</a></li>
                        <li  class="log-in"><a class="log-in" href="/auth.html">Login</a></li>
                        <li class="log-out no-display"><a href="/auth.html">Logout</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}
