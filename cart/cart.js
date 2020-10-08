import { renderTableRow, calculateTotal, getFromLocalStorage, CART } from '../utils.js';
import { starships } from '../data.js';

const table = document.querySelector('tbody');
const cart = getFromLocalStorage(CART) || [];
const orderButton = document.querySelector('button');

for (let i = 0; i < cart.length; i++) {
    const ship = cart[i];

    const tr = renderTableRow(ship);

    table.appendChild(tr);    
}

const total = calculateTotal(cart, starships);

const cartTotal = document.getElementById('cart-total');
cartTotal.textContent = `Total = ${total} million credits`;

orderButton.addEventListener('click', () => {
    const cartAsAString = JSON.stringify(cart, true, 2);
    alert(cartAsAString);

    localStorage.clear();
    window.location.href = '../index.html';
});