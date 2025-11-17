const myArray = [1, 4, 6, 8, 9, 5, 4, 2]

const isEven = myArray.filter((number)=>{
    if (number % 2==0) {
        return number
    }
});
console.log("Even numbers",isEven);


const isOdd = myArray.filter((number)=>{
    if (number % 2!==0) {
        return number
    }
});
console.log("Odd numbers",isOdd);
