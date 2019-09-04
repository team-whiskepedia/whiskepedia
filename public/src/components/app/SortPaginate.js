import Component from '../Component.js';
import hashStorage from '../../services/hash-storage.js';

export class SortPaginate extends Component {

    onRender(dom) {
        
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
            </section>
        `;
    }
}

