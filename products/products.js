
import { shipsFromLocalStorage, renderShip } from '../utils.js';

const localStorageShip = shipsFromLocalStorage();

const ul = document.querySelector('#list');

for (let i = 0; i < localStorageShip.length; i++) {
    const starship = localStorageShip[i];

    const li = renderShip(starship);

    ul.appendChild(li);    
}