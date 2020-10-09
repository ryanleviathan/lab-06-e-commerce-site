const form = document.querySelector('form');
//const form2 = document.querySelector('form2');
import { PRODUCTS } from '../data.js';
import { findById, shipsFromLocalStorage } from '../utils.js';

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

// function findShipToRemove(PRODUCTS, shipId) {
//     const shipArray = shipsFromLocalStorage();
//     const findId = findById(shipArray, shipId);

//     if (findId === shipId) {
//         return PRODUCTS.filter(findId);
//     }
// }

// form2.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const data2 = new FormData(form2);
//     const id = Window.localStorage;
//     const idToRemove = data2.get('id');

//     for (let i = 0; i < id.length; i++)

//         if (id === idToRemove)
//             return Storage.removeItem(PRODUCTS);
// });

