// Basic nested if-else
let age = 25;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive");
    } else {
        console.log("You need a license");
    }
} else {
    console.log("You are too young to drive");
}

// Multiple levels of nesting
let marks = 85;
let attendance = 80;

if (marks >= 50) {
    if (attendance >= 75) {
        if (marks >= 90) {
            console.log("Excellent! Grade: A+");
        } else if (marks >= 80) {
            console.log("Great! Grade: A");
        } else {
            console.log("Good! Grade: B");
        }
    } else {
        console.log("Low attendance, need improvement");
    }
} else {
    console.log("Failed");
}

// Number checking example
let num = 15;

if (num > 0) {
    if (num % 2 === 0) {
        console.log("Positive even number");
    } else {
        console.log("Positive odd number");
    }
} else if (num < 0) {
    if (num % 2 === 0) {
        console.log("Negative even number");
    } else {
        console.log("Negative odd number");
    }
} else {
    console.log("Number is zero");
}

// Login system example
let username = "admin";
let password = "12345";
let isActive = true;

if (username === "admin") {
    if (password === "12345") {
        if (isActive) {
            console.log("Login successful");
        } else {
            console.log("Account is deactivated");
        }
    } else {
        console.log("Incorrect password");
    }
} else {
    console.log("User not found");
}

// Avoiding deep nesting (better approach)
// Using early returns or logical operators
function checkDriving(age, hasLicense) {
    if (age < 18) {
        return "Too young";
    }

    if (!hasLicense) {
        return "Need license";
    }

    return "Can drive";
}

console.log(checkDriving(25, true)); // Can drive
console.log(checkDriving(16, true)); // Too young
console.log(checkDriving(25, false)); // Need license

// Better readability with logical operators
let age2 = 25;
let hasLicense2 = true;

if (age2 >= 18 && hasLicense2) {
    console.log("You can drive");
} else if (age2 < 18) {
    console.log("Too young");
} else {
    console.log("Need license");
}