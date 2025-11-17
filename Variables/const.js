// Basic declaration
const PI = 3.14159;
console.log(PI); // 3.14159

// Cannot be reassigned
const name = "Ahmed";
// name = "Ali"; // Error: Assignment to constant variable

// Must be initialized at declaration
// const x; // Error: Missing initializer

// Block-scoped like let
{
    const value = 100;
    console.log(value); // 100
}
// console.log(value); // Error

// const with objects (important!)
const person = {
    name: "Ahmed",
    age: 25
};

// Can modify properties
person.name = "Ali"; // Works!
person.age = 30; // Works!
console.log(person); // {name: "Ali", age: 30}

// But cannot reassign the object
// person = {}; // Error

// const with arrays
const numbers = [1, 2, 3];
numbers.push(4); // Works!
numbers[0] = 10; // Works!
console.log(numbers); // [10, 2, 3, 4]

// But cannot reassign the array
// numbers = []; // Error