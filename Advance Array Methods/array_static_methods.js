

// Array.isArray()
// Checks if the passed value is an Array.
console.log('Array.isArray()');
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({a: 1, b: 2})); // false
console.log(Array.isArray('hello')); // false
console.log(Array.isArray(undefined)); // false

// Array.of()
// Creates a new Array instance from a variable number of arguments.
console.log('\nArray.of()');
const arr1 = Array.of(1, 2, 3);
console.log(arr1); // [1, 2, 3]
const arr2 = Array.of('hello', 'world');
console.log(arr2); // ["hello", "world"]
const arr3 = Array.of(5);
console.log(arr3); // [5]

// Array.from()
// Creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log('\nArray.from()');
const str = 'hello';
const arr4 = Array.from(str);
console.log(arr4); // ["h", "e", "l", "l", "o"]

const set = new Set(['foo', 'bar', 'baz', 'foo']);
const arr5 = Array.from(set);
console.log(arr5); // ["foo", "bar", "baz"]

function f() {
  return Array.from(arguments);
}
console.log(f(1, 2, 3)); // [1, 2, 3]

// Using a map function
const arr6 = Array.from([1, 2, 3], x => x + x);
console.log(arr6); // [2, 4, 6]

