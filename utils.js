import { starships as sourceOfTruth, CART, PRODUCTS } from './data.js';

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];

        if (item.id === someId) {
            return item;
        }
    }
}

export function shipsFromLocalStorage() {
    let localStorageShips = JSON.parse(localStorage.getItem(PRODUCTS));

    if (!localStorageShips) {
        const shipsAsString = JSON.stringify(sourceOfTruth);

        localStorage.setItem(PRODUCTS, shipsAsString);
        localStorageShips = sourceOfTruth;
    }
    return localStorageShips;
}
const shipFromLocalStorage = shipsFromLocalStorage();

export function renderTableRow(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    const shipData = findById(shipFromLocalStorage, cartItem.id);
    const price = shipData.shipPrice;
    const name = shipData.shipName;

    tdPrice.textContent = `${price} million credits`;
    tdName.textContent = name;
    
    const total = calculateSubTotal(price, cartItem.quantity);

    tdTotal.textContent = `${total} million credits`;

    tr.append(tdName, tdPrice, tdQuantity, tdTotal);

    return tr;
}

export function renderShip(starship) {
    const li = document.createElement('li');
    const shipName = document.createElement('p');
    const shipImage = document.createElement('img');
    const shipPrice = document.createElement('p');
    const shipDescription = document.createElement('p');
    const shipCategory = document.createElement('p');
    const button = document.createElement('button');

    li.classList.add('starship');

    shipName.classList.add('shipName');
    shipName.textContent = starship.shipName;

    li.appendChild(shipName);

    shipImage.classList.add('img');
    shipImage.src = starship.shipImage;
    shipImage.style.width = '200px';

    li.appendChild(shipImage);

    shipPrice.classList.add('price');
    shipPrice.textContent = `${starship.shipPrice} million credits`;

    li.appendChild(shipPrice);

    shipDescription.classList.add('shipDescription');
    shipDescription.textContent = starship.shipDescription;

    li.appendChild(shipDescription);

    shipCategory.classList.add('shipCategory');
    shipCategory.textContent = starship.shipCategory;

    li.appendChild(shipCategory);

    button.textContent = 'Add to Megacart';

    button.addEventListener('click', () => {

        const cart = getFromLocalStorage(CART) || [];

        const itemInCart = findById(cart, starship.id);

        if (itemInCart === undefined) {

            const newCartItem = {
                id: starship.id,
                quantity: 1, 
            };

            cart.push(newCartItem);
        } else {
            itemInCart.quantity++;
        }

        setInLocalStorage(CART, cart);
    });

    li.appendChild(button);

    return li;
}

export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);

    return JSON.parse(item);
}

export function setInLocalStorage(key, value) {
    const itemAsString = JSON.stringify(value);

    localStorage.setItem(key, itemAsString);

    return value;
}

export function calculateSubTotal(price, quantity) {
    // for every item in the cart
    let subTotal = price * quantity;

    return subTotal;
}

export function calculateTotal(cart, sourceOfTruth) {
    let accumulator = 0;

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        // go get the item's true data
        const trueShip = findById(sourceOfTruth, item.id);

        accumulator += calculateSubTotal(trueShip.shipPrice, item.quantity); 
    }
    return accumulator;
}

export function addShip() {
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

    const localStorageShips = shipsFromLocalStorage();

    localStorageShips.push(newShip);

    const stringyLocalShips = JSON.stringify(localStorageShips);
    localStorage.setItem(PRODUCTS, stringyLocalShips);
}