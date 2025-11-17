// Basic template string
// let message = `Hello World`;
// console.log(message);

// String interpolation with ${}
// let name = "Ahmed";
// let age = 25;
// console.log(`My name is ${name} and I am ${age} years old`);

// Expressions inside ${}
// let a = 10;
// let b = 20;
// console.log(`Sum: ${a + b}`); // Sum: 30
// console.log(`Product: ${a * b}`); // Product: 200

// Multi-line strings
// let multiLine = `This is line 1
// This is line 2
// This is line 3`;
// console.log(multiLine);

// With old way (for comparison)
// let oldWay = "This is line 1\nThis is line 2\nThis is line 3";
// console.log(oldWay);

// Function calls inside template strings
// function greet(name) {
//     return `Hello ${name}`;
// }
// console.log(`${greet("Ahmed")}, welcome!`);
//
// Nested template strings
// let price = 100;
// let quantity = 3;
// console.log(`Total: ${price * quantity} PKR (${quantity} items @ ${price} each)`);
//
// // // HTML generation
// let firstName = "Ahmed";
// let lastName = "Khan";
// let html = `
//     <div class="user">
//         <h2>${firstName} ${lastName}</h2>
//         <p>Age: ${age}</p>
//     </div>
// `;
// console.log(html);
// //
// // Tagged templates (advanced)
// function highlight(strings, ...values) {
//     return strings.reduce((result, str, i) => {
//         return `${result}${str}<strong>${values[i] || ''}</strong>`;
//     }, '');
// }
//
// let product = "Laptop";
// let priceValue = 50000;
// console.log(highlight`Product: ${product}, Price: ${priceValue}`);