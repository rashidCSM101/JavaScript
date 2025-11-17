
// let variables


// Basic declaration
let name = "Ahmed";
console.log(name); // Ahmed

// let is block-scoped
{
    let x = 10;
    console.log(x); // 10
}
// console.log(x); // Error: x is not defined

// Cannot be re-declared in same scope
let age = 25;
// let age = 30; // Error: Identifier 'age' has already been declared

// Can be updated
let city = "Islamabad";
city = "Lahore";
console.log(city); // Lahore

// Hoisting with let
// console.log(myLet); // Error: Cannot access before initialization
let myLet = 5;

// Temporal Dead Zone
{
    // TDZ starts
    // console.log(temp); // Error
    let temp = 100; // TDZ ends
    console.log(temp); // 100
}