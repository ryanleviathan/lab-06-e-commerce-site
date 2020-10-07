// IMPORT MODULES under test here:
import { renderShip } from '../utils.js';

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
    const expected = '<li class="starship"><p class="shipName">Constitution refit Enterprise-A</p><img class="img" src="../assets/Constitution-refit-Enterprise-A.jpg"><p class="price">2</p><button>Add to Megacart</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderShip(starship);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});