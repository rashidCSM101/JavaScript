// Basic if-elseif-else
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Day of week example
let day = 3;

if (day === 1) {
    console.log("Monday");
} else if (day === 2) {
    console.log("Tuesday");
} else if (day === 3) {
    console.log("Wednesday");
} else if (day === 4) {
    console.log("Thursday");
} else if (day === 5) {
    console.log("Friday");
} else if (day === 6) {
    console.log("Saturday");
} else if (day === 7) {
    console.log("Sunday");
} else {
    console.log("Invalid day");
}

// Time of day greeting
let hour = 14;

if (hour < 12) {
    console.log("Good Morning");
} else if (hour < 17) {
    console.log("Good Afternoon");
} else if (hour < 21) {
    console.log("Good Evening");
} else {
    console.log("Good Night");
}

// Age category
let age = 35;

if (age < 13) {
    console.log("Child");
} else if (age < 20) {
    console.log("Teenager");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}

// Temperature checking
let temp = 25;

if (temp < 0) {
    console.log("Freezing");
} else if (temp < 10) {
    console.log("Very cold");
} else if (temp < 20) {
    console.log("Cold");
} else if (temp < 30) {
    console.log("Pleasant");
} else if (temp < 40) {
    console.log("Hot");
} else {
    console.log("Very hot");
}

// BMI calculator
let bmi = 24.5;

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi < 25) {
    console.log("Normal weight");
} else if (bmi < 30) {
    console.log("Overweight");
} else {
    console.log("Obese");
}

// Without final else
let score = 45;

// Without final else
let score = 45;

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 80) {
    console.log("Very Good");
} else if (score >= 70) {
    console.log("Good");
}
// If none match, nothing happens

// Important: Order matters!
let num = 95;

// Correct order
if (num >= 90) {
    console.log("A+"); // This executes
} else if (num >= 80) {
    console.log("A");
} else if (num >= 70) {
    console.log("B");
}

// Wrong order - logical error
if (num >= 70) {
    console.log("B"); // This would execute first!
} else if (num >= 80) {
    console.log("A"); // Never reached
} else if (num >= 90) {
    console.log("A+"); // Never reached
}

// Multiple conditions in elseif
let age2 = 25;
let salary = 50000;

if (age2 < 18) {
    console.log("Too young");
} else if (age2 >= 18 && age2 < 25) {
    console.log("Entry level");
} else if (age2 >= 25 && salary > 40000) {
    console.log("Experienced professional");
} else if (age2 >= 40) {
    console.log("Senior professional");
} else {
    console.log("Other category");
}