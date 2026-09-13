// Comparison Operators in JavaScript

console.log(2 != 1);       // true
console.log("2" > 1);      // true
console.log("02" > 1);     // true

console.log(null < 0);     // false
console.log(null == 0);    // false
console.log(null != 0);    // true
console.log(1 > null);     // true

// Difference Between == and ===

console.log("2" == 2);     // true
console.log("2" === 2);    // false

// == checks only value after type conversion
// === checks value and datatype without conversion

console.log(5 == "5");     // true
console.log(5 === "5");    // false

console.log(true == 1);    // true
console.log(true === 1);   // false

console.log(false == 0);   // true
console.log(false === 0);  // false

console.log(null == undefined);   // true
console.log(null === undefined);  // false

// Other Comparison Operators

console.log(10 > 5);       // true
console.log(10 < 5);       // false
console.log(10 >= 10);     // true
console.log(10 <= 9);      // false
console.log(10 != "10");   // false
console.log(10 !== "10");  // true

/*
Notes:

==  : Compares values after type conversion
=== : Compares value and datatype without conversion

!=  : Not equal after type conversion
!== : Strict not equal without type conversion

Prefer === and !== in JavaScript.
*/