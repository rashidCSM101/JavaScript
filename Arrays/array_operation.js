// Creating a simple array with 30 numbers from 1 to 30
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];


//%   Adding Elements
//^~ Syntax
// push - end mein add karta hai
// array.push(element);
// unshift - start mein add karta hai
// array.unshift(element);


// numbers.push(31); // Example operation: adding a number to the array
// numbers.unshift(0); // Example operation: adding a number at the start

// %Removing Elements
//^~ Syntax
// pop - end se remove karta hai
// array.pop();
// shift - start se remove karta hai
// array.shift();

// numbers.pop(); // Example operation: removing the last number from the array
// numbers.shift(); // Example operation: removing the first number



//! indexOf - element ka index find karta hai
//~ array.indexOf(element);

let index =numbers.indexOf(10); // Example operation: finding the index of number 10
// console.log("Index of 10 is:", index);


//! includes - check karta hai element hai ya nahi
//! array.includes(element);


let hasTwenty = numbers.includes(20); // Example operation: checking if number 20 is in the array
// console.log("Array includes 20:", hasTwenty);


//~ slice - array ka piece nikal leta hai
// array.slice(startIndex, endIndex);
let nestedArray = numbers.slice(5, 15); // Example operation: getting a slice of the array from index 5 to 14
// console.log("Sliced array from index 5 to 14:", nestedArray);


//~ splice - elements add ya remove karta hai middle se
// array.splice(startIndex, deleteCount, item1, item2...);

let ModifiedArray = numbers.splice(5, 1, 100, 101); // Example operation: replacing the element at index 5 with 100 and 101
// console.log("Modified array after splice:", numbers);

//~ concat - do arrays ko jodta hai
let newArray = [31, 32, 33];
// let combinedArray = numbers.concat(newArray); // Example operation: combining two arrays
// console.log("Combined array:", combinedArray);


// let reversedArray = numbers.reverse(); // Example operation: reversing the array
// console.log("Reversed array:", reversedArray);



// let arrayString = numbers.join(", "); // Example operation: joining array elements into a string
// console.log("Array as string:",typeof arrayString, arrayString);



// console.log("Simple array with 30 numbers:", numbers);
