import Component from '../Component.js';

export class SortPaginate extends Component {

    onRender(dom) {
        
        // const flavorsByBroadCategory = this.props.flavors.reduce((broadCategories, flavor) => {
        //     const existingIndex = broadCategories.findIndex((item) => item.category === flavor.broadCategory);
        //     if(existingIndex >= 0) {
        //         broadCategories[existingIndex].flavors.push(flavor.name);
        //     } 
        //     else if(flavor.broadCategory !== 'IGNORE') {
        //         broadCategories.push({ category: flavor.broadCategory, flavors: [flavor.name] });
        //     }
        //     return broadCategories;
        // }, []);
        // flavorsByBroadCategory.sort(objA => objA.category.toLowerCase() === 'tastes' ? -1 : 1);
        
        // const searchPane = dom.querySelector('#search-pane');
        // flavorsByBroadCategory.forEach(category => {
        //     const searchCategory = new SearchCategory({ 
        //         category: category,
        //         //onUpdate: this.props.onUpdate,
        //         //onRemove: this.props.onRemove,
        //     }); 
        //     searchPane.appendChild(searchCategory.renderDOM());
        // });
    }

    renderHTML() {
        return /*html*/`
            <section id="sort-pane">
                <div class="sorting">
                    <select class="sort-dropdown">
                        <option value="">Sort By</option>
                        <option value="flavor-a-z">Primary Flavor: A-Z</option>
                        <option value="flavor-z-a">Primary Flavor: Z-A</option>
                        <option value="name-a-z">Name: A-Z</option>
                        <option value="name-z-a">Name: Z-A</option>
                        <option value="rating-high-low">Rating: High-Low</option>
                        <option value="price-low-high">Price: Low-High</option>
                        <option value="price-high-low">Price: High-Low</option>
                    </select>
                </div>
                <div class="pagination">
                    <a href="#" class="page first">first</a>
                    <a href="#" class="page previous">2</a>
                    <span class="page active">3</span>
                    <a href="#" class="page next">4</a>
                    <a href="#" class="page next-next">5</a>
                    <a href="#" class="page last">last</a>
                </div>
            </section>
        `;
    }
}

