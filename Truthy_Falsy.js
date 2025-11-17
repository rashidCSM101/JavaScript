// Truthy and Falsy


// FALSY VALUES (only 6 falsy values in JavaScript)
// 1. false
// 2. 0 (zero)
// 3. "" or '' (empty string)
// 4. null
// 5. undefined
// 6. NaN

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// TRUTHY VALUES (everything else is truthy)
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean(" ")); // true (space is not empty)
console.log(Boolean("0")); // true (string "0")
console.log(Boolean([])); // true (empty array)
console.log(Boolean({})); // true (empty object)
console.log(Boolean(function(){})); // true

// In conditional statements
let value = "";
if (value) {
    console.log("Truthy");
} else {
    console.log("Falsy"); // This will execute
}

let num = 0;
if (num) {
    console.log("Truthy");
} else {
    console.log("Falsy"); // This will execute
}

// Practical examples
let username = "";
if (username) {
    console.log(`Welcome ${username}`);
} else {
    console.log("Please enter username");
}

// Double negation (!!) - converts to boolean
console.log(!!"hello"); // true
console.log(!!0); // false
console.log(!!""); // false
console.log(!!null); // false

// Using truthy/falsy for default values (old way)
function greet(name) {
    name = name || "Guest"; // If name is falsy, use "Guest"
    console.log(`Hello ${name}`);
}
greet("Ahmed"); // Hello Ahmed
greet(""); // Hello Guest
greet(); // Hello Guest