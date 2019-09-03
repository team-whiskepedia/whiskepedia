import Component from '../Component.js';

export class SearchCategory extends Component {

    renderHTML() {
        const categoryName = this.props.category.category
        const categoryHeaderHTML = /*html*/ `
            <input type="checkbox" id="filter-by-${categoryName}-container">
            <label for="filter-by-${categoryName}-container"><i class="material-icons rotatable">details</i><span> By ${categoryName} Notes</span></label>
        `;

        const flavorFiltersHTML = this.props.category.flavors.reduce((htmlString, flavor) => {
            return htmlString += /*html*/ `
                <li>
                    <input type="radio" class="radio-input yes" value="y${flavor}" name="radio-${flavor}" id="yes-${flavor}"/><label for="yes-${flavor}"><span>Y</span></label>
                    <input type="radio" checked class="radio-input" value="0" name="radio-${flavor}" id="${flavor}"/><label for="${flavor}"> < ${flavor} > </label>
                    <input type="radio" class="radio-input no" value="n${flavor}" name="radio-${flavor}"  id="no-${flavor}"/><label for="no-${flavor}"><span>N</span></label>
                </li>
            `;
        }, ``);

        // put array into returned HTML

        return /*html*/ `
            <div class="collapsible-menu">
                ${categoryHeaderHTML}
                <div class="menu-content">
                    <ul>
                        ${flavorFiltersHTML}
                    </ul>
                    <i class="btn round material-icons" id="submit-filter-by-taste">tune</i>
                </div>
            </div>
        `;
    }
}

