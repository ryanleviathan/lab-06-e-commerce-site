// IMPORT MODULES under test here:
import { renderShip, renderTableRow, calculateSubTotal, calculateTotal, shipsFromLocalStorage } from '../utils.js';

const test = QUnit.test;

test('should take in a ship and return an li with the appropariate contents', (expect) => {
    const starship = {
        id: 'enterprise-a',
        shipName: 'Constitution refit Enterprise-A',
        shipImage: 'Constitution-refit-Enterprise-A.jpg',
        price: 2,
    };
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class=\"starship\"><p class=\"shipName\">Constitution refit Enterprise-A</p><img class=\"img\" src=\"Constitution-refit-Enterprise-A.jpg\" style=\"width: 200px;\"><p class=\"price\">undefined million credits</p><p class=\"shipDescription\"></p><p class=\"shipCategory\"></p><button>Add to Megacart</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderShip(starship);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

const test2 = QUnit.test;

test2('should take in a cartItem and return a tr element with the appropriate contents', (expect) => {
    const cartItem = {
        id: 'honshu',
        quantity: 2
    };

    //Arrange
    // Set up your arguments and expectations
    const expected = '<tr><td>Nebula-Class USS Honshu</td><td>4 million credits</td><td>2</td><td>8 million credits</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(cartItem);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

const test3 = QUnit.test;

test3('should take in a cartItem and quantity and return a subtotal', (expect) => {
    const price = 4;
    const quantity = 2;

    //Arrange
    // Set up your arguments and expectations
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calculateSubTotal(price, quantity);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

const test4 = QUnit.test;

test4('should take in a subtotal and return a total', (expect) => {
    const cart = [
        {
            id: 'honshu',
            quantity: 2,
        },
        {
            id: 'reliant',
            quantity: 3,
        },
    ];

    const sourceOfTruth = [
        {
            id: 'honshu',
            shipName: 'Nebula-Class USS Honshu',
            shipImage: 'Nebula-Class-USS-Honshu.jpg',
            shipDescription: 'The Nebula-class shares a similar design lineage with its larger Galaxy-class counterpart, notably its primary and secondary hulls and nacelles. Atop the primary hull is a superstructure which can support a variety of modules, such as the inclusion of a triangular platform, fitted with torpedo launchers, an oval platform, or additional warp nacelles.',
            shipCategory: 'Nebula class.',
            shipPrice: 4,
        },
        {
            id: 'reliant',
            shipName: 'Miranda-class Reliant',
            shipImage: 'Miranda-class-Reliant.jpg',
            shipDescription: 'The configuration of the Miranda-class shares a similar design lineage and features with our refitted Constitution-class. The Miranda-class is composed of a single primary hull, consisting of a saucer that is similar to that of the Constitution-class; however, the bridge module, positioned on top in the center, is shaped differently than the Constitution-class module.',
            shipCategory: 'Miranda class.',
            shipPrice: 5,
        }
    ];
    //Arrange
    // Set up your arguments and expectations
    const expected = 23;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calculateTotal(cart, sourceOfTruth);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

const test5 = QUnit.test;

test5('addProduct should take in a product object and add it to local storage (returning nothing)', (expect) => {
    const newShip = {
        name: 'Look at me imma ship',
        shipPrice: 2
    };
    const expectation = null;

    //Arrange
    // Set up your arguments and expectations    //Act 
    // Call the function you're testing and set the result to a const
    shipsFromLocalStorage(newShip);

    const localStorageAfter = JSON.parse(localStorage.getItem('starships'));
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expectation, localStorageAfter);
});