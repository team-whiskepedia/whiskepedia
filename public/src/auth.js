import AuthApp from '../src/components/app/Auth-App.js';

const app = new AuthApp();
document.body.prepend(app.renderDOM());