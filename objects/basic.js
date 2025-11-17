// Creating a simple person object
let person = {
    name: "Ali",
    age: 25,
    city: "Larkana"
};

//~ Accessing object properties
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// ~ add a new property
person.country = "Pakistan";
person['profession'] = 'Ai Engineer'; // Another way to add a property  
person.gender ="Male"
// Printing the object
// console.log(person);

// for(let key in person){
//     console.log(`${key}: ${person[key]}`);
// }
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty('city'));
