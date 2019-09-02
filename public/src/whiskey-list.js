import WhiskeyApp from './components/app/WhiskeyApp.js';

const app = new WhiskeyApp();
document.body.prepend(app.renderDOM());