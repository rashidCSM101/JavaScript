// AND operator (&&)
// Returns true if BOTH conditions are true
//
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false
//
// // Practical example
// let age = 25;
// let hasLicense = true;
//
// if (age >= 18 && hasLicense) {
//     console.log("Can drive");
// }

// OR operator (||)
// Returns true if AT LEAST ONE condition is true
//
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// Practical example
// let day = "Saturday";
//
// if (day === "Saturday" || day === "Sunday") {
//     console.log("Weekend");
// }

// NOT operator (!)
// Inverts the boolean value

// console.log(!true); // false
// console.log(!false); // true
// console.log(!(5 > 3)); // false
//
// // Combining operators
// let num = 15;
//
// if (num > 10 && num < 20) {
//     console.log("Number is between 10 and 20");
// }

// Short-circuit evaluation with &&
// If first is false, second is not evaluated
// let x = false && console.log("This won't print");

// let y = true && console.log("This will print");

// Short-circuit with ||
// If first is true, second is not evaluated
// let a = true || console.log("This won't print");
//
// let b = false || console.log("This will print");

// // Practical use of && for conditional execution
// let isLoggedIn = true;
// isLoggedIn && console.log("Welcome"); // Executes if isLoggedIn is true
//
// // Default values with ||
// let username = "";
// let displayName = username || "Guest";
// console.log(displayName); // Guest
//
// let username2 = "Ahmed";
// let displayName2 = username2 || "Guest";
// console.log(displayName2); // Ahmed
//
// // Complex conditions
// let marks = 85;
// let attendance = 80;
//
// if ((marks >= 50 && attendance >= 75) || marks >= 90) {
//     console.log("Pass");
// }
//
// // Precedence
// // ! has higher precedence than &&
// // && has higher precedence than ||
//
// console.log(true || false && false); // true (because && is evaluated first)
// console.log((true || false) && false); // false (parentheses change order)
//
// // NOT operator examples
// let isActive = true;
// if (!isActive) {
//     console.log("Account is inactive");
// } else {
//     console.log("Account is active");
// }
//
// // Double NOT !! (convert to boolean)
// console.log(!!"hello"); // true
// console.log(!!0); // false
// console.log(!!""); // false