import { findById, renderShip } from '../utils.js';
import { starships, cart } from '../data.js';

const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const ship = cart[i];

    const tr = renderShip(ship);

    table.appendChild(tr);    
}

const total = calculateTotal(cart);

console.log();

function calculateTotal(cart) {
    // initialize an accumulator to 0
    let accumulator = 0;

    // for every item in the cart
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        // go get the item's true data
        const trueShip = findById(starships, item.id);

        // use the true data's price with the cart's quantity to get the subtotal for this item
        const subtotal = trueShip.shipPrice * item.quantity;

        // add that subtotal to the accumulator
        accumulator = accumulator + subtotal;
    }
    return accumulator;
}