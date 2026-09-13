"use strict"; // Treat all JS code as newer version

// Basic Output
console.log(3 + 3);
console.log("Utkarsh");

// Variables
let name = "Utkarsh";
let age = 18;
let isLoggedIn = false;
let state;

// Data Types

// 1. Number
let score = 100;
console.log(score);
console.log(typeof score);

// 2. BigInt
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);

// 3. String
let city = "Varanasi";
console.log(city);
console.log(typeof city);

// 4. Boolean
let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

// 5. Null
let temperature = null;
console.log(temperature);
console.log(typeof temperature);

// 6. Undefined
let address;
console.log(address);
console.log(typeof address);

// 7. Symbol
let id = Symbol("123");
console.log(id);
console.log(typeof id);

// 8. Object
let student = {
    name: "Utkarsh",
    age: 18,
    branch: "CSE"
};

console.log(student);
console.log(typeof student);

// Existing Variables
console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof state);