// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((numbers)=>{
//     console.log(numbers*2)
// });


// Practical example: Update prices
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 3000 }
];

products.forEach(({price})=>{
    // return products.price *0.3
    console.log(price * 0.3)
});
// console.log(updatePrice);
