let fruits = ['apple', 'banana'];

// ~ Adding Elements
fruits.push('orange'); // Adding 'orange' at the end
fruits.unshift('mango');
// console.log("After adding elements:", fruits); // Adding 'mango' at the start

// ~ Removing Elements
// fruits.pop(); // Removing the last element
// fruits.shift(); // Removing the first element
// console.log("After removing elements:", fruits);



// $ find` - element ko find karta hai based on condition
// console.log("Finding element is on:", fruits.indexOf('apple') ,"Index"); // Finding the first number greater than 15
// console.log(`Finding element is on: ${fruits.indexOf('apple')} Index`); // Finding the first number greater than 15

//~ includes - check karta hai element hai ya nahi
console.log(`Array includes apple: ${fruits.includes('apple')} The index of apple is ${fruits.indexOf('apple')}`); // Checking if 'apple' is in the array

