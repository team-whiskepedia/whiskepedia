import Component from '../Component.js';

class WhiskeyItem extends Component {
    onRender(dom) {
        const dumbChart = dom.querySelector('canvas').getContext('2d');
        // eslint-disable-next-line no-undef
        let chart = new Chart(dumbChart, {
            type: 'radar',
            data: {
                labels: ['Sweet', 'Cereal', 'Earthy', 'Vanilla', 'Woody'],
                datasets: [{
                    label: 'Flavor Profile',
                    borderColor: 'rgba(152, 210, 235, 0.9)',
                    borderWidth: 1,
                    data: [22, 65, 3, 19, 28],
                }]
            },
            options: {
                legend: {
                    display: false,
                },
                scale: {
                    ticks: {
                        display: false,
                    }
                }
            }
        });

        // chartContainer.appendChild(canvas.canvas.outerHTML);
    }

    renderHTML() {
        const whiskey = this.props.whiskey;

        return /*html*/`
        <li class="whiskey-items">
            <div class="title-container">
                <h2 class="whiskey-title">${whiskey.title}</h2>
            </div>
            <div class="img-container">
                <img class="list-img" src="${whiskey.detail_img_url}" alt=""/>
                <div className="details-container">
                    <p class="details"><span class="whiskey-details">Region:</span> ${whiskey.region}</p>
                    <p class="details"><span class="whiskey-details">Rating:</span> ${whiskey.rating}</p>
                    <p class="details"><span class="whiskey-details">Price:</span> $${whiskey.price} /bottle</p>
                    <p class="details"><span class="whiskey-details">Flavors:</span> ${whiskey.flavor_1}, ${whiskey.flavor_2}, ${whiskey.flavor_3}, ${whiskey.flavor_4}, ${whiskey.flavor_5}</p>
                </div>
                <div class="chart-container">
                <canvas></canvas>
              </div>
            </div>
        </li>
        `;
    }
}

export default WhiskeyItem;