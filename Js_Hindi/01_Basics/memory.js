// Stack → Primitive values
// Heap  → Non-primitive values

// Primitive values are copied by value.

let myHandle = "one8utkarsh";

let anotherHandle = myHandle;

anotherHandle = "one8dsa";

console.log(myHandle);       // one8utkarsh
console.log(anotherHandle);  // one8dsa


// Non-primitive values are copied by reference.

let userOne = {
    name: "Utkarsh"
};

let userTwo = userOne;

userTwo.name = "Rahul";

console.log(userOne.name); // Rahul
console.log(userTwo.name); // Rahul


// Array example

let arr1 = [10, 20, 30];
let arr2 = arr1;

arr2.push(40);

console.log(arr1); // [10, 20, 30, 40]
console.log(arr2); // [10, 20, 30, 40]


// Separate array copy

let nums1 = [1, 2, 3];
let nums2 = [...nums1];

nums2.push(4);

console.log(nums1); // [1, 2, 3]
console.log(nums2); // [1, 2, 3, 4]