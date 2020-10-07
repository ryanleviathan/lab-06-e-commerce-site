// IMPORT MODULES under test here:
import { renderShip, renderTableRow } from '../utils.js';

const test = QUnit.test;

test('should take in a book and return an li with the appropariate contents', (expect) => {
    const starship = {
        id: 'enterprise-a',
        shipName: 'Constitution refit Enterprise-A',
        shipImage: 'Constitution-refit-Enterprise-A.jpg',
        price: 2,
    };
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="starship"><p class="shipName">Constitution refit Enterprise-A</p><img class="img" src="../assets/Constitution-refit-Enterprise-A.jpg"><p class="price">2 million credits</p><p class=\"shipDescription\"></p><p class=\"shipCategory\"></p><button>Add to Megacart</button></li>';
    
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