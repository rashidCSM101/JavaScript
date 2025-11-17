// UNDEFINED
// Variable declared but not assigned
let x;
console.log(x); // undefined
console.log(typeof x); // "undefined"

// Function with no return
function test() {
    // no return statement
}
console.log(test()); // undefined

// Non-existent property
let obj = {};
console.log(obj.name); // undefined

// NULL
// Intentional absence of value
let y = null;
console.log(y); // null
console.log(typeof y); // "object" (this is a bug in JavaScript!)

// null vs undefined
console.log(null == undefined); // true (loose equality)
console.log(null === undefined); // false (strict equality)

// BIGINT
// For very large integers (beyond Number.MAX_SAFE_INTEGER)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // 1234567890123456789012345678901234567890n
console.log(typeof bigNumber); // "bigint"

// Creating BigInt
let big1 = BigInt(123456789);
let big2 = 123456789n;

// Operations with BigInt
console.log(10n + 20n); // 30n
console.log(100n - 50n); // 50n
console.log(10n * 5n); // 50n

// Cannot mix BigInt with regular numbers
// console.log(10n + 5); // Error
console.log(10n + BigInt(5)); // 15n

// TYPEOF OPERATOR
// Returns the type of a value
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (bug)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function(){}); // "function"
console.log(typeof Symbol()); // "symbol"
console.log(typeof 123n); // "bigint"

// typeof with variables
let num = 100;
let str = "test";
console.log(typeof num); // "number"
console.log(typeof str); // "string"

// Checking type before operation
let value = "123";
if (typeof value === "string") {
    console.log("It's a string");
}

// All data types in JavaScript
// 1. Primitive: number, string, boolean, undefined, null, symbol, bigint
// 2. Reference: object (includes arrays, functions, etc.)