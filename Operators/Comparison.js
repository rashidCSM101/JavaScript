// Comparison Operators

// Equal to (==) - loose equality (type conversion)
console.log(5 == 5); // true
console.log(5 == "5"); // true (string converted to number)
console.log(true == 1); // true
console.log(false == 0); // true
console.log(null == undefined); // true

// Strict equal to (===) - no type conversion
console.log(5 === 5); // true
console.log(5 === "5"); // false (different types)
console.log(true === 1); // false
console.log(null === undefined); // false

// Not equal (!=) - loose inequality
console.log(5 != 10); // true
console.log(5 != "5"); // false

// Strict not equal (!==)
console.log(5 !== "5"); // true
console.log(5 !== 5); // false

// Greater than (>)
console.log(10 > 5); // true
console.log(5 > 10); // false

// Less than (<)
console.log(5 < 10); // true
console.log(10 < 5); // false

// Greater than or equal (>=)
console.log(10 >= 10); // true
console.log(10 >= 5); // true

// Less than or equal (<=)
console.log(5 <= 10); // true
console.log(5 <= 5); // true

// String comparison (lexicographical)
console.log("apple" < "banana"); // true
console.log("Z" < "a"); // true (uppercase has lower ASCII)
console.log("10" < "9"); // true (string comparison, not numeric)

// Comparison with different types
console.log("2" > 1); // true (string "2" converted to number)
console.log("01" == 1); // true

// Special cases
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(undefined == null); // true
console.log(undefined === null); // false

// Boolean() function - converts to boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false