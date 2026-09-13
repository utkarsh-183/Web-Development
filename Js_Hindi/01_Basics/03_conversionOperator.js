"use strict";

// 1. String to Number
let score = "100";

console.log("String to Number:");
console.log(Number(score));
console.log(typeof Number(score));


// 2. String to Integer
let marks = "95.5";

console.log("\nString to Integer:");
console.log(parseInt(marks));
console.log(typeof parseInt(marks));


// 3. String to Float
let percentage = "95.5";

console.log("\nString to Float:");
console.log(parseFloat(percentage));
console.log(typeof parseFloat(percentage));


// 4. Number to String
let age = 18;

console.log("\nNumber to String:");
console.log(String(age));
console.log(typeof String(age));


// 5. Number to Boolean
let number = 1;

console.log("\nNumber to Boolean:");
console.log(Boolean(number));


// 6. Boolean to Number
let isLoggedIn = true;

console.log("\nBoolean to Number:");
console.log(Number(isLoggedIn));


// 7. Boolean to String
let isStudent = false;

console.log("\nBoolean to String:");
console.log(String(isStudent));


// 8. String to Boolean
let name = "Utkarsh";

console.log("\nString to Boolean:");
console.log(Boolean(name));


// 9. Empty String to Boolean
let emptyString = "";

console.log("\nEmpty String to Boolean:");
console.log(Boolean(emptyString));


// 10. Null to Number
let value = null;

console.log("\nNull to Number:");
console.log(Number(value));


// 11. Undefined to Number
let state;

console.log("\nUndefined to Number:");
console.log(Number(state));


// 12. Number to Boolean
let zero = 0;

console.log("\nZero to Boolean:");
console.log(Boolean(zero));


// 13. String to Number using Unary Plus
let price = "500";

console.log("\nUnary Plus Conversion:");
console.log(+price);
console.log(typeof +price);


// 14. Number to String using Concatenation
let amount = 100;

console.log("\nNumber to String using +:");
console.log(amount + "");
console.log(typeof (amount + ""));


// 15. String to Number using Multiplication
let x = "10";

console.log("\nString to Number using *:");
console.log(x * 2);
console.log(typeof (x * 2));


// 16. String to Number using Subtraction
let y = "20";

console.log("\nString to Number using -:");
console.log(y - 5);
console.log(typeof (y - 5));


// 17. String to Number using Division
let z = "100";

console.log("\nString to Number using /:");
console.log(z / 2);
console.log(typeof (z / 2));


// 18. Invalid String to Number
let invalid = "33abc";

console.log("\nInvalid String to Number:");
console.log(Number(invalid));


// 19. Null to String
let data = null;

console.log("\nNull to String:");
console.log(String(data));
console.log(typeof String(data));


// 20. Undefined to String
let test;

console.log("\nUndefined to String:");
console.log(String(test));
console.log(typeof String(test));