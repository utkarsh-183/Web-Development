// ================= PRIMITIVE DATA TYPES =================

// Primitive values store a single value.
// JavaScript has 7 primitive data types:
//
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt


// 1. String
// Used to store text.

const name = "Utkarsh";

console.log(name);        // Utkarsh
console.log(typeof name); // string


// 2. Number
// Used for integers and decimal values.

const score = 100;
const scoreValue = 100.3;

console.log(score);             // 100
console.log(scoreValue);        // 100.3
console.log(typeof score);      // number


// 3. Boolean
// Stores only true or false.

const isLoggedIn = false;

console.log(isLoggedIn);        // false
console.log(typeof isLoggedIn); // boolean


// 4. Null
// Represents an intentional empty value.

const outsideTemp = null;

console.log(outsideTemp);        // null
console.log(typeof outsideTemp); // object
// typeof null gives object because of a historical JavaScript bug.


// 5. Undefined
// A variable is undefined when no value is assigned.

let userEmail;

console.log(userEmail);        // undefined
console.log(typeof userEmail); // undefined


// 6. Symbol
// Creates a unique value.
// Two Symbols with the same description are still different.

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);      // false
console.log(typeof id1);       // symbol


// 7. BigInt
// Used for very large integers.
// Add n at the end of the number.

const bigNumber = 12345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber); // bigint



// ================= NON-PRIMITIVE DATA TYPES =================

// Non-primitive values can store multiple values.
// They are also called reference types.
//
// 1. Array
// 2. Object
// 3. Function


// 1. Array
// Used to store multiple values in an ordered collection.

const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);        // ["Apple", "Mango", "Banana"]
console.log(fruits[0]);     // Apple
console.log(typeof fruits); // object


// 2. Object
// Used to store data in key-value pairs.

const user = {
    name: "Utkarsh",
    age: 19,
    branch: "CSE"
};

console.log(user.name);     // Utkarsh
console.log(user.age);      // 19
console.log(typeof user);   // object


// 3. Function
// A reusable block of code.

function greet() {
    console.log("Hello Utkarsh");
}

greet();                    // Hello Utkarsh
console.log(typeof greet);  // function



// ================= IMPORTANT DIFFERENCE =================

// Primitive: copied by value

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20


// Non-primitive: copied by reference

let arr1 = [10, 20, 30];
let arr2 = arr1;

arr2[0] = 99;

console.log(arr1); // [99, 20, 30]
console.log(arr2); // [99, 20, 30]