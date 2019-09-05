import Component from '../Component.js';
import { SearchCategory } from '../flavors/SearchCategory.js';
import hashStorage from '../../services/hash-storage.js';

export class SearchContainer extends Component {

    onRender(dom) {
        const flavorsByBroadCategory = this.props.flavors.reduce((broadCategories, flavor) => {
            const existingIndex = broadCategories.findIndex((item) => item.category === flavor.broadCategory);
            if(existingIndex >= 0) {
                broadCategories[existingIndex].flavors.push(flavor.name);
            } 
            else if(flavor.broadCategory !== 'IGNORE') {
                broadCategories.push({ category: flavor.broadCategory, flavors: [flavor.name] });
            }
            return broadCategories;
        }, []);
        flavorsByBroadCategory.sort(objA => objA.category.toLowerCase() === 'tastes' ? -1 : 1);


        const searchInput = dom.querySelector('input[type=search]');
        dom.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();
            hashStorage.set({ search: searchInput.value });
        });

        
        let radioElements = [];
        const searchPane = dom.querySelector('#search-pane');
        flavorsByBroadCategory.forEach(category => {
            const searchCategory = new SearchCategory({ 
                category: category
            }); 
            const categoryDom = searchPane.appendChild(searchCategory.renderDOM());

            radioElements = [
                ...radioElements,
                ...categoryDom.querySelectorAll('.radio-input.yes'),
                ...categoryDom.querySelectorAll('.radio-input.no')
            ];
            categoryDom.querySelector('button').addEventListener('click', () => applyFlavorFilters());
        });

        function applyFlavorFilters() {
            const flavorString = radioElements.filter(radio => radio.checked).map(radio => radio.id).join(',');
            hashStorage.set({ flavors: flavorString });
        }
        
        window.addEventListener('hashchange', () => searchInput.value = hashStorage.get().search || '');
    }

    renderHTML() {
        return /*html*/`
            <section class="grid-cell">
                <div id="search-pane" class="top-sm left-lg">
                    <h3><i class="material-icons">tune</i><span> Search</span></h3>
                    <div class="collapsible-menu">
                        <input type="checkbox" checked id="search-container">
                        <label for="search-container"><i class="material-icons rotatable">details</i><span> By Name</span></label>
                        <form class="menu-content">
                            <input class="text-input grow" type="search" name="search-by-name" placeholder="Search by Whisky Name">
                            <button class="btn round material-icons">search</button>
                        </form>
                    </div>
                    <div class="collapsible-menu hidden">
                        <input type="checkbox" id="filter-by-rating-container">
                        <label for="filter-by-rating-container"><i class="material-icons rotatable">details</i><span> By Rating</span></label>
                        <div class="menu-content">
                            <input class="range grow" type="range" name="filter-by-rating">
                            <button class="btn round material-icons">tune</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

