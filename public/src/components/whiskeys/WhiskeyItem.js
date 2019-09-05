import Component from '../Component.js';
import { makeFavorite, removeFavorite } from '../../services/whiskey-api.js';
import store from '../../services/store.js';

class WhiskeyItem extends Component {
    onRender(li) {
        const whiskey = this.props.whiskey;
        const removedFavorite = this.props.removedFavorite;
        const favoriteButton = li.querySelector('.favorite-star');
        favoriteButton.addEventListener('click', () => {
            whiskey.isFavorite = !whiskey.isFavorite;
            if(!store.hasToken()) {
                alert('You must Log in for that . . . ');
                window.location = 'auth.html';
            }
            if(whiskey.isFavorite) {
                makeFavorite(whiskey);
            }
            else {
                removeFavorite(whiskey.id);
                setTimeout(() => {
                    if(removedFavorite) {
                        this.rootElement.remove();
                    }
                }, 300);
            }
            favoriteButton.classList.toggle('is-favorite');
        });
    }

    renderHTML() {
        const whiskey = this.props.whiskey;
        const starClass = whiskey.isFavorite ? 'is-favorite' : '';

        return /*html*/`
        <li class="whiskey-items">
            <div class="title-container">
                <h2 class="whiskey-title">${whiskey.title}</h2>
                <i class="material-icons favorite-star ${starClass}">star</i>
            </div>
            <div class="img-container">
                <img     class="list-img" src="${whiskey.detail_img_url}" alt=""/>
            <div className="details-container">
                <p><span class="whiskey-details">Region:</span> ${whiskey.region}</p>
                <p><span class="whiskey-details">Rating:</span> ${whiskey.rating}</p>
                <p><span class="whiskey-details">Price:</span> $${whiskey.price} /bottle</p>
                <p><span class="whiskey-details">Flavors:</span> ${whiskey.flavor_1}, ${whiskey.flavor_2}, ${whiskey.flavor_3}</p>
            </div>
            </div>
        </li>
            
        `;
    }
}

export default WhiskeyItem;