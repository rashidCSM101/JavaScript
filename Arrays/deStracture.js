const array = [1, 2, 3];
// let [a, b] = array;  // First element 'a' mein, second 'b' mein
// let [a, , c] = array;  // Second element skip kar diya
// console.log(a);
// console.log(c);
// console.log(array);


//% ...we call restparameter
let fruits = ['apple', 'banana', 'orange', 'mango'];
let [first, second, ...remaining] = fruits;
// first = 'apple'
// second = 'banana'
// remaining = ['orange', 'mango']

let a = 5;
let b = 10;
// Swap these values using destructuring

// [a, b] = [b, a];
// console.log(a); // 10
// console.log(b); // 5

