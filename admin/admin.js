const form = document.querySelector('form');
import { PRODUCTS } from '../data.js';
import { shipsFromLocalStorage } from '../utils.js';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const id = data.get('id');
    const name = data.get('name');
    const image = data.get('image');
    const description = data.get('description');
    const category = data.get('category');
    const price = data.get('price');

    const newShip = {
        id: id,
        shipName: name,
        shipImage: image,
        shipDescription: description,
        shipCategory: category,
        shipPrice: Number(price),
    };

    const localStorageShips = shipsFromLocalStorage();

    localStorageShips.push(newShip);

    const stringyLocalShips = JSON.stringify(localStorageShips);
    localStorage.setItem(PRODUCTS, stringyLocalShips);
});