import Component from '../Component.js';
import hashStorage from '../../services/hash-storage.js';

export class SortPaginate extends Component {

    onRender(dom) {        
        const sortInput = dom.querySelector('.sort-dropdown');
        sortInput.addEventListener('change', () => {
            hashStorage.set({ sort: sortInput.value });
        });
    }

    renderHTML() {
        return /*html*/`
            <section id="sort-pane">
                <div class="sorting">
                    <select class="sort-dropdown">
                        <option ${this.props.sort === '' ? 'selected' : ''} value="">Sort By</option>
                        <option ${this.props.sort === 'flavor-a-z' ? 'selected' : ''} value="flavor-a-z">Primary Flavor: A-Z</option>
                        <option ${this.props.sort === 'flavor-z-a' ? 'selected' : ''} value="flavor-z-a">Primary Flavor: Z-A</option>
                        <option ${this.props.sort === 'name-a-z' ? 'selected' : ''} value="name-a-z">Name: A-Z</option>
                        <option ${this.props.sort === 'name-z-a' ? 'selected' : ''} value="name-z-a">Name: Z-A</option>
                        <option ${this.props.sort === 'rating-high-low' ? 'selected' : ''} value="rating-high-low">Rating: High-Low</option>
                        <option ${this.props.sort === 'price-low-high' ? 'selected' : ''} value="price-low-high">Price: Low-High</option>
                        <option ${this.props.sort === 'price-high-low' ? 'selected' : ''} value="price-high-low">Price: High-Low</option>
                    </select>
                </div>
            </section>
        `;
    }
}

