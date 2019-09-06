import Component from '../Component.js';
import { Header } from '../app/Header.js';
import SignIn from '../auth/SignIn.js';
import SignUp from '../auth/SignUp.js';
import { signIn as userSignIn, signUp as userSignUp } from '../../services/whiskey-api.js';
import store from '../../services/store.js';

function success(user) {
    store.setToken(user.token);
    store.setUser(user.name);
    const searchParams = new URLSearchParams(location.search);
    location = searchParams.get('redirect') || './browse.html';
}


class AuthApp extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
        const errors = dom.querySelector('.errors');
        const signUpContainer = dom.querySelector('#signup-container');
        const signInContainer = dom.querySelector('#signin-container');

        const signUp = new SignUp({
            onSignUp: newUser => {
                errors.textContent = '';

                return userSignUp(newUser)
                    .then(user => {
                        success(user);
                    })
                    .catch(err =>{
                        errors.textContent = err;
                    });
            }
        });
        signUpContainer.appendChild(signUp.renderDOM());

        const signIn = new SignIn({
            onSignIn: credentials => {
                errors.textContent = '';

                return userSignIn(credentials)
                    .then(user => {
                        success(user);
                    })
                    .catch(err => {
                        errors.textContent = err;
                    });
            }
        });
        signInContainer.appendChild(signIn .renderDOM());

        const switchToSignIn = dom.querySelector('#signin-button');
        switchToSignIn.addEventListener('click', () => {
            signInContainer.classList.remove('no-display');
            signUpContainer.classList.add('no-display');
        });
        
        const switchToSignUp = dom.querySelector('#signup-button');
        switchToSignUp.addEventListener('click', () => {
            signUpContainer.classList.remove('no-display');
            signInContainer.classList.add('no-display');
        });




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
            <p class="errors"></p>
            <div class="auth-box">
                <section class="no-display" id="signup-container">
                    <p class="switch">
                        <button id="signin-button">Already a User?</button>
                    </p>
                </section>
                <section id="signin-container">
                    <p class="switch">
                        <button id="signup-button">Need to create an Account?</button>
                    </p>
                </section>
            </div>
        </main>
    </div>
        `;
    }
}

export default AuthApp;