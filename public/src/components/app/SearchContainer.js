import Component from '../Component.js';
import { SearchCategory } from '../flavors/SearchCategory.js';

export class SearchContainer extends Component {

    onRender(dom) {
        
        const flavorsByBroadCategory = this.props.flavors.reduce((broadCategories, flavor) => {
            const existingCategory = broadCategories.find((item) => item.category === flavor.broadCategory);
            if(existingCategory) {
                existingCategory.flavors.push(flavor.name);
            } 
            else {
                broadCategories.push({ category: flavor.broadCategory, flavors: [flavor.name] });
            }
            return broadCategories;
        }, []);
        
        const searchPane = dom.querySelector('#search-pane');
        flavorsByBroadCategory.forEach(category => {
            const searchCategory = new SearchCategory({ 
                category: category,
                //onUpdate: this.props.onUpdate,
                //onRemove: this.props.onRemove,
            }); 
            searchPane.appendChild(searchCategory.renderDOM());
        });
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
                            <i class="btn round material-icons">search</i>
                        </form>
                    </div>
                    <div class="collapsible-menu hidden">
                        <input type="checkbox" id="filter-by-rating-container">
                        <label for="filter-by-rating-container"><i class="material-icons rotatable">details</i><span> By Rating</span></label>
                        <div class="menu-content">
                            <input class="range grow" type="range" name="filter-by-rating">
                            <i class="btn round material-icons">tune</i>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

