// ------------------ Arrow Functions -------------------
// var sayHello = function(name) {
//     console.log('Hello ' + name);
// }; // old way of writing functions

// var square = function(n) {
//     return n * n;
// };
  
// ------------------- ES6 ---------------------
const sayHello = (name) => {
    console.log(`Hello ${name}`);
};

const square = n => {
    n * n;
}

// sayHello("Angelo");

// console.log(square(1));

// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
    return { 
        firstName: 'John',
        lastName: 'Wick'
    }
}
/**
 * The example below wouldn't work because the 
 * brackets are interpreted as opening the body of the 
 * function rather than brackets to create an object literal 
 */
// const returnObj = () => { firstName: 'John', lastName: 'Wick' }
// surrounding the implicit return with parenthesis solves the problem
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

// ------------------- Context ---------------------
class Deck {
    initialize() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        for (const suit of suits) {
            for (const face of faces) {
            deck.push(this.createCard(suit, face));
            }
        }
        this.deck = deck;
    }
}
  
class Deck {
  initialize() {
      const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
      const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
      const deck = [];
      suits.forEach(function(suit) {
        faces.forEach(function(face) {
          deck.push(this.createCard(suit, face));
        });
      });
      this.deck = deck;
    }
}

class Deck {
    initialize() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(suit => {
            faces.forEach(face => {
                deck.push(this.createCard(suit, face));
            });
        });
    }
}
  
    