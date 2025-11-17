const targetValue = (numbers, target) => {
    for (let i = 0; i < numbers.length-1; i++) {
        if (target==numbers[i]) {
            return  `target found at ${[i]}`
        }
    }
    return "Not found";
}
numbers=[1,2,3,4,5,6,7]
let result =targetValue(numbers,2)
console.log(result);
