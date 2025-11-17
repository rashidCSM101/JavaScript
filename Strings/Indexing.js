let str = "Hello";

// Accessing characters by index
// console.log(str[0]); // H
// console.log(str[1]); // e
// console.log(str[2]); // l
// console.log(str[3]); // l
// console.log(str[4]); // o

// Length property
console.log(str.length); // 5
//
// // Last character
// console.log(str[str.length - 1]); // o
//
// // Out of range
// console.log(str[10]); // undefined
//
// // Negative indexing (doesn't work directly)
// console.log(str[-1]); // undefined
//
// // Strings are immutable
// str[0] = "h";
// console.log(str); // Hello (not changed)
//
// // Looping through string
// let word = "JavaScript";
// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
// }
//
// // charAt method
// console.log(str.charAt(0)); // H
// console.log(str.charAt(10)); // "" (empty string, not undefined)