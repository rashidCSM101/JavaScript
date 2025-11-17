let text = "  JavaScript is Amazing  ";

// trim() - removes whitespace from both ends
// console.log(text.trim()); // "JavaScript is Amazing"
// console.log(text.trimStart()); // "JavaScript is Amazing  "
// console.log(text.trimEnd()); // "  JavaScript is Amazing"

// toUpperCase() and toLowerCase()
let str = "Hello World";
// console.log(str.toUpperCase()); // HELLO WORLD
// console.log(str.toLowerCase()); // hello world

// slice() - extracts a section
let word = "JavaScript";
// console.log(word.slice(0, 4)); // Java
// console.log(word.slice(4)); // Script
// console.log(word.slice(-6)); // Script (from end)
// console.log(word.slice(2, 6)); // vaSc

// substring() - similar to slice but doesn't accept negative
console.log(word.substring(0, 4)); // Java
console.log(word.substring(4)); // Script

// indexOf() - finds first occurrence
let sentence = "I love JavaScript and JavaScript is great";
console.log(sentence.indexOf("JavaScript")); // 7
console.log(sentence.indexOf("Python")); // -1 (not found)
console.log(sentence.indexOf("JavaScript", 10)); // 22 (search from index 10)

// lastIndexOf() - finds last occurrence
console.log(sentence.lastIndexOf("JavaScript")); // 22

// includes() - checks if string contains substring
console.log(sentence.includes("JavaScript")); // true
console.log(sentence.includes("Python")); // false

// startsWith() and endsWith()
let url = "https://google.com";
console.log(url.startsWith("https")); // true
console.log(url.startsWith("http")); // true
console.log(url.endsWith(".com")); // true

// replace() - replaces first occurrence
let text2 = "I love cats. Cats are cute";
console.log(text2.replace("cats", "dogs")); // I love dogs. Cats are cute

// replaceAll() - replaces all occurrences
console.log(text2.replaceAll("cats", "dogs")); // I love dogs. dogs are cute
console.log(text2.replaceAll(/cats/gi, "dogs")); // Case insensitive

// split() - converts string to array
let csv = "apple,banana,orange";
console.log(csv.split(",")); // ["apple", "banana", "orange"]

let name = "Ahmed Ali Khan";
console.log(name.split(" ")); // ["Ahmed", "Ali", "Khan"]

// repeat() - repeats string
console.log("Ha".repeat(3)); // HaHaHa

// concat() - joins strings
let first = "Hello";
let second = "World";
console.log(first.concat(" ", second)); // Hello World

// charAt() and charCodeAt()
let char = "A";
console.log(char.charCodeAt(0)); // 65 (ASCII code)

// padStart() and padEnd()
let num = "5";
console.log(num.padStart(3, "0")); // 005
console.log(num.padEnd(3, "0")); // 500