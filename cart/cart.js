import { renderTableRow, calculateTotal } from '../utils.js';
import { cart, starships } from '../data.js';

const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const ship = cart[i];

    const tr = renderTableRow(ship);

    table.appendChild(tr);    
}

const total = calculateTotal(cart, starships);

const cartTotal = document.getElementById('cart-total');
cartTotal.textContent = `Total = ${total} million credits`;
