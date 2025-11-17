// // Declaring a variable
// var name;
// console.log(name); // undefined
//
// // Declaring and initializing
// var age = 25;
// console.log(age); // 25
//
// // Multiple declarations
// var x = 10, y = 20, z = 30;
//
// // var can be re-declared
// var city = "Islamabad";
// var city = "Karachi"; // No error
// console.log(city); // Karachi
//
// // var can be updated
// var country = "Pakistan";
// country = "India";
// console.log(country); // India
//
//
//
// // Hoisting example
// console.log(myVar); // undefined (not error)
// var myVar = 5;
// console.log(myVar); // 5
//
//
// // More About Variables
//
// // Variable naming rules
// var firstName = "Ahmed";     // camelCase (recommended)
// var first_name = "Ali";      // snake_case
// var FirstName = "Hassan";    // PascalCase
// var $price = 100;            // Can start with $
// var _value = 50;             // Can start with _
//
// // Invalid variable names
// // var 123name = "test";     // Cannot start with number
// // var first-name = "test";  // Cannot use hyphen
// // var first name = "test";  // Cannot have space
//
// // Case sensitive
// var Name = "Ahmed";
// var name = "Ali";
// console.log(Name); // Ahmed
// console.log(name); // Ali
//
// // Meaningful variable names
// var userName = "john_doe";
// var userAge = 30;
// var isLoggedIn = true;
//
// // Multiple variables
// var a = 1, b = 2, c = 3;




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