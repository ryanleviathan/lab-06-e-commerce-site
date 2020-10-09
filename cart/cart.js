import { renderTableRow, calculateTotal, getFromLocalStorage, shipsFromLocalStorage } from '../utils.js';
import { CART } from '../data.js';

const table = document.querySelector('tbody');
const cart = getFromLocalStorage(CART) || [];
const orderButton = document.querySelector('button');
const shipFromLocalStorage = shipsFromLocalStorage();

for (let i = 0; i < cart.length; i++) {
    const ship = cart[i];

    const tr = renderTableRow(ship);

    table.appendChild(tr);    
}

const total = calculateTotal(cart, shipFromLocalStorage);

const cartTotal = document.getElementById('cart-total');
cartTotal.textContent = `Total = ${total} million credits`;

orderButton.addEventListener('click', () => {
    const cartAsAString = JSON.stringify(cart, true, 2);
    alert(cartAsAString);

    localStorage.clear();
    window.location.href = '../index.html';
});