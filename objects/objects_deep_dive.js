
// ************************************************************************************
// JavaScript Objects: A Deep Dive
// ************************************************************************************

// ------------------------------------------------------------------------------------
// 1. Introduction to Objects
// ------------------------------------------------------------------------------------

// What are objects in JavaScript?
// Objects are fundamental data structures in JavaScript that allow you to store collections of data and more complex entities. They are composed of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects, functions, and arrays.

// ------------------------------------------------------------------------------------
// Creating Objects
// ------------------------------------------------------------------------------------

// a) Object Literals (the most common way)
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'gaming', 'hiking'],
    address: {
        street: '123 Main St',
        city: 'Anytown',
    },
    greet: function() {
        console.log('Hello, my name is ' + this.firstName);
    }
};

console.log('Person object created with an object literal:', person);


// b) Using the `new Object()` constructor
const car = new Object();
car.make = 'Toyota';
car.model = 'Camry';
car.year = 2023;

console.log('\nCar object created with new Object():', car);


// ------------------------------------------------------------------------------------
// Accessing Properties
// ------------------------------------------------------------------------------------

// a) Dot Notation
// Used when the property key is a valid identifier (no spaces, starts with a letter, $, or _).
console.log('\nAccessing properties:');
console.log('First Name:', person.firstName); // John
console.log('City:', person.address.city);   // Anytown

// b) Bracket Notation
// Required when the property key is not a valid identifier (e.g., contains spaces) or when using a variable to hold the key name.
console.log('Last Name:', person['lastName']); // Doe

let propertyName = 'age';
console.log('Age:', person[propertyName]); // 30

const personWithSpaceInKey = {
    'full name': 'Jane Doe'
};
console.log('Full Name:', personWithSpaceInKey['full name']); // Jane Doe


// ------------------------------------------------------------------------------------
// Modifying and Adding Properties
// ------------------------------------------------------------------------------------
console.log('\nModifying and adding properties:');

// Modifying an existing property
person.age = 31;
console.log('Modified age:', person.age); // 31

// Adding a new property
person.email = 'john.doe@example.com';
console.log('Added email:', person.email); // john.doe@example.com
console.log('Person object after modifications:', person);


// ------------------------------------------------------------------------------------
// Deleting Properties
// ------------------------------------------------------------------------------------
console.log('\nDeleting properties:');

delete person.isStudent;
console.log('Person object after deleting isStudent:', person);


// ------------------------------------------------------------------------------------
// Methods in Objects
// ------------------------------------------------------------------------------------
// Functions stored as object properties are called methods.
console.log('\nCalling an object method:');
person.greet(); // Hello, my name is John


// ************************************************************************************
// 2. Core Object Methods (Static Methods on the `Object` constructor)
// ************************************************************************************
// These methods are called on the `Object` constructor itself, not on an object instance.

const user = {
    name: 'Alice',
    id: 123,
    isAdmin: true
};

console.log('\n\n--- Object.keys() ---');
// Returns an array of a given object's own enumerable property names.
const keys = Object.keys(user);
console.log('Keys of the user object:', keys); // [ 'name', 'id', 'isAdmin' ]

console.log('\n--- Object.values() ---');
// Returns an array of a given object's own enumerable property values.
const values = Object.values(user);
console.log('Values of the user object:', values); // [ 'Alice', 123, true ]

console.log('\n--- Object.entries() ---');
// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// This is very useful for iterating over an object.
const entries = Object.entries(user);
console.log('Entries of the user object:', entries); // [ [ 'name', 'Alice' ], [ 'id', 123 ], [ 'isAdmin', true ] ]

// Example: Iterating over an object with Object.entries() and a for...of loop
console.log('\nIterating over user object:');
for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}

