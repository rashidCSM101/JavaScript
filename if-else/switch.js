// Basic switch statement
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Without break (fall-through)
let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good"); // Executes this
    // No break, so continues to next case
    case "C":
        console.log("Average"); // Also executes this
        break;
    case "D":
        console.log("Poor");
        break;
    default:
        console.log("Failed");
}

// Multiple cases for same code
let month = 4;

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month");
}

// Switch with strings
let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apple is red");
        break;
    case "banana":
        console.log("Banana is yellow");
        break;
    case "orange":
        console.log("Orange is orange");
        break;
    default:
        console.log("Unknown fruit");
}

// Switch is strict comparison (===)
let value = "1";

switch (value) {
    case 1:
        console.log("Number one");
        break;
    case "1":
        console.log("String one"); // This executes
        break;
}

// Calculator example
let operator = "+";
let a = 10;
let b = 5;
let result;

switch (operator) {
    case "+":
        result = a + b;
        console.log(result); // 15
        break;
    case "-":
        result = a - b;
        console.log(result);
        break;
    case "*":
        result = a * b;
        console.log(result);
        break;
    case "/":
        result = a / b;
        console.log(result);
        break;
    default:
        console.log("Invalid operator");
}

// Switch with return (in function)
function getDayType(day) {
    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Weekday";
        case 6:
        case 7:
            return "Weekend";
        default:
            return "Invalid day";
    }
}

console.log(getDayType(3)); // Weekday
console.log(getDayType(7)); // Weekend

// When to use switch vs if-else
// Use switch: Multiple specific values to check
// Use if-else: Range checking, complex conditions

// Switch cannot do this:
// switch (marks) {
//     case marks > 90:  // This doesn't work!
//         console.log("A+");
// }

// Use if-else instead for ranges
let marks = 85;
if (marks >= 90) {
    console.log("A+");
} else if (marks >= 80) {
    console.log("A");
}

// Switch with expressions (less common)
let hour = 14;

switch (true) {
    case (hour < 12):
        console.log("Morning");
        break;
    case (hour < 17):
        console.log("Afternoon");
        break;
    case (hour < 21):
        console.log("Evening");
        break;
    default:
        console.log("Night");
}