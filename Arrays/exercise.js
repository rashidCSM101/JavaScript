// Practice Exercise 1: Working with numbers
// let numbers = [5, 2, 8, 1, 9];
// console.log("Original numbers array:", numbers);

// : Add number 10 at the end
// Your code here
// for(let i = 1; i<=10; i++){
//     numbers.push(i)
// }
// console.log(numbers);


//: Add number 0 at the start
// Your code here

//  : Remove the last number
// Your code here

//  : Find the position of number 8
// Your code here

// // Practice Exercise 2: Working with fruits
// let fruits = ['apple', 'banana', 'orange', 'grape'];
// console.log("\nOriginal fruits array:", fruits);

//  : Check if 'mango' exists in the array
// Your code here

//  : Add 'mango' if it doesn't exist
// Your code here

//  : Find the total number of fruits
// Your code here

// Practice Exercise 3: Working with names
// let names = ['Ali', 'Sara', 'Ahmed'];
// console.log("\nOriginal names array:", names);

//  : Add 'Zain' at the start
// Your code here

//  : Remove the last name
// Your code here

//  : Print each name using forEach
// Your code here




// Practical example: Split string
const fullName = "Ahmed Ali Khan";
const [firstPart, middlePart, lastPart] = fullName.split(" ");

// let parts = fullName.split(" ");
// console.log("\nFull name parts:", parts);
// const firstPart = parts[0];
// const middlePart = parts[1];
// const lastPart = parts[2];

console.log("First part:", firstPart);  // Output: "Ahmed"
console.log("Middle part:", middlePart);  // Output: "Ali"
console.log("Last part:", lastPart);  // Output: "Khan"
// Clone array with destructuring
const source = [1, 2, 3];
const [...clone] = source;