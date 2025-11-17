const myArray = [1, 4, 6, 8, 9, 5, 4, 2]

const sumAll = myArray.reduce((accumalator, currentValue)=>{
    return accumalator + currentValue;
});
console.log(sumAll);
