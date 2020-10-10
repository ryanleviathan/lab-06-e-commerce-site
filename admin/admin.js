import { addShip } from '../data.js';
const form = document.querySelector('form');
form.addEventListener('submit', () => {
    const form = document.querySelector('form');
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
    addShip(newShip);
});