const operations = [
    function (num){
        return num + num;
    },
    function (num) {
        return num * num;
    },
    function (num){
        return num - num;
    }
        
];


console.log("addition",operations[0]([2]));
console.log("addition",operations[1]([2]));
console.log("addition",operations[2]([2]));
