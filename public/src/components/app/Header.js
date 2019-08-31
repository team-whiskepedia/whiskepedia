import Component from '../Component.js';
// import store from '../../services/store.js';

export class Header extends Component {
    
    onRender(dom) {
        // const logout = dom.querySelector('.logout');
        // if(store.hasToken()) {
        //     logout.classList.remove('hide');
        // }
        // logout.addEventListener('click', () => {
        //     store.removeToken();
        // });
    }

    renderHTML() {
        return /*html*/`
            <header class="header dark">
                <div class="logo-container">
                    <nav class="mobile-nav hide-lg">
                        <a><i class="material-icons">menu</i></a>
                        <ul class="hidden">
                            <li><a href="#">Browse</a></li>
                            <li><a href="#">My Bottles</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Logout</a></li>
                            <li><a href="#">Logged in as [NAME]</a></li>
                        </ul>
                    </nav>
                    <img src="assets/whiskey-glass-icon-tight.jpg" alt="logo image">
                    <a class="logo" href="index.html">Whiskepedia</a>
                </div>
                <nav class="desktop-nav hide-sm">
                    <div>
                        <a href="#">Logged in as [NAME]</a>
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
