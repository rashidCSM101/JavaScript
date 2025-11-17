function callbackExample(callback){
    console.log("Function is called");
}

function anotherFunction(callback){
    console.log("Another function is called");
   callback();
}
anotherFunction(callbackExample)