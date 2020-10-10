// IMPORT MODULES under test here:
import { renderShip, renderTableRow, calculateSubTotal, calculateTotal, addShip, } from '../utils.js';
import { PRODUCTS } from '../data.js';

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
    const expectation = [
        {
          "id": "enterprise-a",
          "shipCategory": "Constitution class.",
          "shipDescription": "This very old model has been heavily modified for modern usage. There are modifications to the deflector dish, the side walls of the engineering hull, the nacelle spires, the nacelle aft ends and the bridge module. The crew capacity has been increased from 200 to 400 crew members without forsaking comfort. The completely new bridge module has all the newest features an intrepid captain may want.",
          "shipImage": "../assets/Constitution-refit-Enterprise-A.jpg",
          "shipName": "Constitution refit Enterprise-A",
          "shipPrice": 2
        },
        {
          "id": "enterprise-b",
          "shipCategory": "Excelsior class.",
          "shipDescription": "The Excelsior-class was a type of Federation starship used by Starfleet from the late 23rd century through the late 24th century. It was the backbone of Starfleet for nearly a century, making it one of the longest serving starship designs, and one of the most recognizable ships in the fleet. You will not regret a purchase like this.",
          "shipImage": "../assets/Excelsior-class-Enterprise-B.jpg",
          "shipName": "Excelsior-class Enterprise-B",
          "shipPrice": 3
        },
        {
          "id": "enterprise-c",
          "shipCategory": "Ambassador class.",
          "shipDescription": "The Ambassador-class features the saucer section-engineering section-warp nacelle layout common to most Starfleet vessels. It is intermediate in size between the Excelsior-class and the Galaxy-class. In addition, the ship boasts at least three engineering levels for all your science needs!",
          "shipImage": "../assets/Ambassador-class-Enterprise-C.jpg",
          "shipName": "Ambassador-class Enterprise-C",
          "shipPrice": 6
        },
        {
          "id": "daedalus",
          "shipCategory": "Antiquated space junk.",
          "shipDescription": "The Daedalus may be old, but you can rely on this ship, especially for the cost. The Daedalus-class was an early class of Starfleet vessel that, unlike most Federation starship designs, was designed with a spherical primary hull, outwardly similar to the later Olympic-class. This ship, which operated with a crew of approximately 229, was decommissioned by the year 2196. If you do ever find yourself and your crew stranded, it had a unique subspace distress call sure to attract friends to help you out!",
          "shipImage": "../assets/USS-Daedalus.jpg",
          "shipName": "USS Daedalus",
          "shipPrice": 1
        },
        {
          "id": "honshu",
          "shipCategory": "Nebula class.",
          "shipDescription": "The Nebula-class shares a similar design lineage with its larger Galaxy-class counterpart, notably its primary and secondary hulls and nacelles. Atop the primary hull is a superstructure which can support a variety of modules, such as the inclusion of a triangular platform, fitted with torpedo launchers, an oval platform, or additional warp nacelles.",
          "shipImage": "../assets/Nebula-Class-USS-Honshu.jpg",
          "shipName": "Nebula-Class USS Honshu",
          "shipPrice": 4
        },
        {
          "id": "reliant",
          "shipCategory": "Miranda class.",
          "shipDescription": "The configuration of the Miranda-class shares a similar design lineage and features with our refitted Constitution-class. The Miranda-class is composed of a single primary hull, consisting of a saucer that is similar to that of the Constitution-class; however, the bridge module, positioned on top in the center, is shaped differently than the Constitution-class module.",
          "shipImage": "../assets/Miranda-class-Reliant.jpg",
          "shipName": "Miranda-class Reliant",
          "shipPrice": 5
        },
        {
          "name": "Look at me imma ship",
          "shipPrice": 2
        }
      ];

    //Arrange
    // Set up your arguments and expectations    //Act 
    // Call the function you're testing and set the result to a const
    addShip(newShip);

    const localStorageAfter = JSON.parse(localStorage.getItem(PRODUCTS));
    //Expect 
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(expectation, localStorageAfter);
    console.log(expectation, localStorageAfter);
});