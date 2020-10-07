import { starships as sourceOfTruth } from '../data.js';

export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];

        if (item.id === someId) {
            return item;
        }
    }
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
    shipImage.src = `../assets/${starship.shipImage}`;

    li.appendChild(shipImage);

    shipPrice.classList.add('price');
    shipPrice.textContent = `${starship.price} million credits`;

    li.appendChild(shipPrice);

    shipDescription.classList.add('shipDescription');
    shipDescription.textContent = starship.shipDescription;

    li.appendChild(shipDescription);

    shipCategory.classList.add('shipCategory');
    shipCategory.textContent = starship.shipCategory;

    li.appendChild(shipCategory);

    button.textContent = 'Add to Megacart';
    

    li.appendChild(button);

    return li;
}

export function renderTableRow(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    const shipData = findById(sourceOfTruth, cartItem.id);
    
    const price = shipData.shipPrice;
    const name = shipData.shipName;

    tdPrice.textContent = `${price} million credits`;
    tdName.textContent = name;
    
    const total = calculateSubTotal(price, cartItem.quantity);

    tdTotal.textContent = `${total} million credits`;

    tr.append(tdName, tdPrice, tdQuantity, tdTotal);

    return tr;
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
