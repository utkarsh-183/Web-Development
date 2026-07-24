let a = 5;
let b = 2;
// console.log( 'a = ' , a , '& b = ', b);
// console.log('a+b is = ', a+b);
// console.log('a-b is = ', a-b);
// console.log('a*b is = ', a*b);
// console.log('a/b is = ', a/b);
// console.log('a%b is = ', a%b);
// console.log('a raised to the power b is = ', a**b);

//Unary operator
/* console.log( 'a = ' , a , '& b = ', b);
console.log('a after pre-increment is : ', ++a);
b++;
console.log('b after increment is : ', b); */

// Arithmetic operator

/* a += 4;
console.log('value of a is : ', a);

a *= 2;
console.log('value of a is : ', a); */


// comparison operator
// console.log('5==2', a==b);

//  conditional statments

// let age = 5;
// if(age>=18){
//     console.log(" eligible for vote ");
// }
// else {
//     console.log(" You cannot vote");
// }

// let mode = "light";
// let color;

// if(mode == "dark"){
//     color="white";
// } else{
//     color = "black";
// }

// console.log(color);

/* let number = prompt("Enter the number : ");
if(number%2===0){
    console.log("Even number")
} else{
    console.log("Odd number");
} */

// else if statment 
// eligibility for bike and car

// let age = prompt("Enter your age :");
// if(age<=0 || age>110){
//     console.log("invalid age");
// } else if(age<18){
//     console.log("Use bicycle");
// } else if(age>=18 && age<=65){
//     console.log("Can ride both");
// }
// else{
//     console.log("hier a driver");
// }

// Ternary Operator

// let age = prompt("Enter your age : ");
// let result = age>=18 ? "Can vote" : "Cannot vote";
// console.log(result);

// let num = prompt("Enter the number : ");
// if(num%5===0){
//     console.log("yesss", num,"is multiple of 5");
// }
// else{
//     console.log("Nooo", num,"is not a multiple of 5")
// }

let num = prompt("Enter the number : ");
let grade;
if(num>=90 && num<=100){
    grade = "A";
} else if(num>=70 && num <=89){
    grade = "B"
} else if(num>=60 && num<=69){
    grade = "C";
} else if(num>=50 && num <=59){
    grade = "D";
} else{
    grade = "F";
}

console.log("Grade of the student in particular subject is : ", grade);