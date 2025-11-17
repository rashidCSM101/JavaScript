// let password = "12345";
// let attempts = 0;
//
// while (password !== "12345" && attempts < 3) {
//     // In real scenario, you'd get input from user
//     password = "wrong"; // Simulated input
//     attempts++;
//     console.log("Attempt", attempts);
// }



let number = 12345;
let sum = 0;

while (number > 0) {
    let digit = number % 10; // Get last
    sum += digit;
    number = Math.floor(number / 10); // Remove last digit
}
console.log("Sum of digits:", sum); // 15