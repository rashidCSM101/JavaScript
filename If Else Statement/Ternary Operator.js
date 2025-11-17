// Syntax: condition ? expressionIfTrue : expressionIfFalse

// Basic example
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Adult

// Same as:
// let status;
// if (age >= 18) {
//     status = "Adult";
// } else {
//     status = "Minor";
// }

// With console.log
let num = 10;
num % 2 === 0 ? console.log("Even") : console.log("Odd");

// Returning values
function checkNumber(n) {
    return n > 0 ? "Positive" : "Negative or Zero";
}
console.log(checkNumber(5)); // Positive
console.log(checkNumber(-3)); // Negative or Zero

// Nested ternary (not recommended, but possible)
let marks = 85;
let grade = marks >= 90 ? "A+" :
    marks >= 80 ? "A" :
        marks >= 70 ? "B" :
            marks >= 60 ? "C" : "F";
console.log(grade); // A

// Practical examples
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message);

// With assignment
let price = 100;
let discount = price > 500 ? 0.2 : 0.1;
console.log(discount); // 0.1

// Multiple statements (not recommended)
let score = 85;
score > 50 ? (console.log("Pass"), console.log("Good")) : console.log("Fail");

// Better to use if-else for multiple statements
if (score > 50) {
    console.log("Pass");
    console.log("Good");
} else {
    console.log("Fail");
}

// Ternary in JSX/React (very common)
// let button = isLoggedIn ? <LogoutButton /> : <LoginButton />;

// Default values
let username = "";
let displayName = username ? username : "Guest";
console.log(displayName); // Guest

// Or using || operator
let displayName2 = username || "Guest";