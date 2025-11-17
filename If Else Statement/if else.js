// Basic if statement
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
}

// if-else statement
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot");
} else {
    console.log("It's pleasant");
}

// Multiple conditions
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A+");
} else {
    console.log("Grade: A or below");
}

// Nested if
let number = 15;

if (number > 0) {
    if (number % 2 === 0) {
        console.log("Positive even number");
    } else {
        console.log("Positive odd number");
    }
} else {
    console.log("Negative number or zero");
}

// Practical example: Login check
let username = "admin";
let password = "12345";

if (username === "admin") {
    if (password === "12345") {
        console.log("Login successful");
    } else {
        console.log("Incorrect password");
    }
} else {
    console.log("User not found");
}

// With logical operators
let age2 = 25;
let hasLicense = true;

if (age2 >= 18 && hasLicense) {
    console.log("You can drive");
} else {
    console.log("You cannot drive");
}

// Block scope
if (true) {
    let x = 10;
    console.log(x); // 10
}
// console.log(x); // Error: x is not defined

// Without curly braces (single statement)
let score = 50;
if (score > 40)
    console.log("Pass"); // Works but not recommended

// Better to always use braces
if (score > 40) {
    console.log("Pass");
}