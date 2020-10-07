import { starships } from '../data.js';
import { renderShip } from '../utils.js';

const ul = document.querySelector('#list');

for (let i = 0; i < starships.length; i++) {
    const starship = starships[i];

    const li = renderShip(starship);

    ul.appendChild(li);    
}