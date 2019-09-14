import Component from '../Component.js';
import { Header } from './Header.js';
import WhiskeyList from '../whiskeys/WhiskeyList.js';
import { getFavorites, getFlavors } from '../../services/whiskey-api.js';


class FavoritesApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');
        const whiskeyList = new WhiskeyList({ 
            whiskeys: [], 
            flavorCategories: [], 
            removedFavorite: true 
        });
        main.appendChild(whiskeyList.renderDOM());

        getFlavors()
            .then(flavors => {
                // server should do this work!
                const categoriesList = flavors.reduce((categories, flavor) => {
                    const existingIndex = categories.findIndex((item) => item.category === flavor.category);
                    if(existingIndex >= 0) {
                        categories[existingIndex].flavors.push(flavor.name);
                    } 
                    else if(flavor.category !== 'IGNORE') {
                        categories.push({ category: flavor.category, flavors: [flavor.name] });
                    }
                    return categories;
                }, []);
                
                whiskeyList.update({ flavorCategories: categoriesList });
            });

        getFavorites()
            .then(whiskeys => {
                whiskeyList.update({ whiskeys: whiskeys });
            });

    }
    renderHTML() {
        return /*html*/`
        <div>
            <!-- header goes here -->
            <main></main>
        </div>
        `;
    }
}

export default FavoritesApp;