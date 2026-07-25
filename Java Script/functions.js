// function myFunction() { // function definition
//     console.log(`welcome to apna college`);
//     console.log("we are still learning JS");
// }

// myFunction(); // function call

// function myFunction(msg){
//     // parameter -> input
//     console.log(msg);
// }

// myFunction(`I Love HardWork💗`); //argument

//Function for sum of 2 numbers

// function sum(x,y){
//     console.log(x+y);
// }

// sum(5,6); 

//sum function
// function sum(a, b){
//     return a+b;
// }

// function mul(a, b){
//     return a*b;
// }

// console.log(`sum of 2 parameters is : `, sum(5,7));
// console.log(`Multiplication of 2 parameters is :`, mul(5,9));

// Arrow function
// const arrowSum = (a,b) => {
//     console.log(a+b);
// };

// arrowSum(3,2);

// const mul = (a, b) => {
//     console.log(a*b);
// };
// mul(4,5);

// function vowel(s){
//     let count = 0;
//     for(let i=0; i<s.length; i++){
//         if(s[i]==`a` || s[i]==`e` || s[i]==`i` || s[i]==`o` || s[i]==`u`){
//             count++;
//         }
//     }
//     return count;
// }

// let s = prompt("enter the string : ");
// console.log(`No. of vowel in string is : `, vowel(s));

// const countVow = (str) => {
//     let count = 0;
//     for(const char of str){
//         if(char ===`a` || char ===`e` || char ===`i` || char ===`o` || char ===`u`){
//             count++;
//         } 
//     }
//     return count;
// } ; 

// let marks = [97, 91, 92,84,82];
// let toppers = marks.filter((val) => {
//     return val>90;
// })
// console.log(toppers);

let n = prompt("Enter the number : ");
let arr = [];
for(let i=1;i<=n;i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
})

console.log(sum);

let factorial = arr.reduce((res,curr) => {
    return res * curr;
});

console.log(factorial);