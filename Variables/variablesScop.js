// Var is function-scoped
function varTest() {
    var x = 1;
    if (true) {
        var x = 2; // Same variable
        console.log(x); // 2
    }
    console.log(x); // 2
}

// Let is block-scoped
function letTest() {
    let x = 1;
    if (true) {
        let x = 2; // Different variable
        console.log(x); // 2
    }
    console.log(x); // 1
}