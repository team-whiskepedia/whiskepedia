import Component from '../Component.js';
import hashStorage from '../../services/hash-storage.js';

export class SearchCategory extends Component {

    onRender(dom) {  
        const collapsibleMenuCheckbox = dom.querySelector(`#filter-by-${this.props.category.category}-container`);

        const hashedFlavors = hashStorage.get().flavors || '';
        if(hashedFlavors) {
            hashedFlavors
                .split(',')
                .forEach(id => {
                    const flavorRadio = dom.querySelector(`#${id}`);
                    if(!flavorRadio) return;
                   
                    flavorRadio.checked = true;
                    collapsibleMenuCheckbox.checked = true;
                });
        }
    }

    renderHTML() {
        const categoryName = this.props.category.category;
        const categoryDisplayName = categoryName.toLowerCase() === 'tastes' ? categoryName : categoryName + ' Notes';
        const categoryHeaderHTML = /*html*/ `
            <input type="checkbox" id="filter-by-${categoryName}-container">
            <label for="filter-by-${categoryName}-container"><i class="material-icons rotatable">details</i><span> By ${categoryDisplayName}</span></label>
        `;

        const flavorFiltersHTML = this.props.category.flavors
            .map(flavor => {
                return /*html*/ `
                    <li>
                        <input type="radio" class="radio-input yes" value="y${flavor}" name="radio-${flavor}" id="yes-${flavor}"/><label for="yes-${flavor}"><span>Y</span></label>
                        <input type="radio" class="radio-input" value="0" name="radio-${flavor}" id="${flavor}"/><label for="${flavor}"> ${flavor} </label>
                        <input type="radio" class="radio-input no" value="n${flavor}" name="radio-${flavor}"  id="no-${flavor}"/><label for="no-${flavor}"><span>N</span></label>
                    </li>
                `;
            }).join('');

        return /*html*/ `
            <div class="collapsible-menu">
                ${categoryHeaderHTML}
                <div class="menu-content">
                    <ul>
                        ${flavorFiltersHTML}
                    </ul>
                    <button class="btn round material-icons" id="submit-filter-by-${categoryName}">tune</button>
                </div>
            </div>
        `;
    }
}

