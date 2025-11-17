function getUserData() {
    // Simulated API response
    return [
        "Ahmed Khan",
        "ahmed@example.com",
        25,
        "Islamabad"
    ];
}

const [userName, email, userAge, userCity] = getUserData();

console.log(`Name: ${userName}`);
console.log(`Email: ${email}`);
console.log(`Age: ${userAge}`);
console.log(`City: ${userCity}`);