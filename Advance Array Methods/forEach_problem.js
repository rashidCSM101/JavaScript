//~ Practical example: Update prices
// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 1000 },
//     { name: "Keyboard", price: 3000 }
// ];



// products.forEach(product => {
//     product.discountPrice = product.price * 0.9; // Reduce price by 30%
// });
// console.log(products);




// Creating new objects
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 3000 }
];

const withTax = products.map(product => {
    return {
        name: product.name,
        Newprice: product.price = (product.price-(product.price * 0.1)) // Reduce price by 30%
    };
});

console.log(withTax);