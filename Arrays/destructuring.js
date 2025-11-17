// Clone array with destructuring
const source = [1, 2, 3];
const [...clone] = source;
// const clone = [...source];
// console.log(clone);


// Combine with spread
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];

// const [...combined] = [...arr3, ...arr4];
// console.log(combined);
// const combined = [...arr3, ...arr4];
// console.log(combined);






// Date parsing
const dateString = "2025-10-09";
const [year, month, day] = dateString.split("-");

// console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
// CSV parsing
const csvRow = "Ahmed,25,Islamabad";
const [name, age, city] = csvRow.split(",");

console.log(`Name: ${name}, Age: ${age}, City: ${city}`);