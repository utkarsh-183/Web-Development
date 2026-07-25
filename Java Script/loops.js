// for (let count=1; count<=5; count++){
//     console.log("Java script")
// }

// calculate sum from 1 to n

// let n = Number(prompt("Enter the number : "));
// let sum=0;
// for(let i=1;i<=num;i++){
//     sum = sum + i;
// }

// sum = (n * (n+1)) / 2;

// console.log("Sum till the given number is : ", sum);

// infinite loop
// for (let i=0; i>=-1; i--){
//     console.log(i);
// }

//while loop
// let i=10;
// do{
//     console.log(i);
// }
// while(i--){
//     console.log(i);
// }

// for of loop

// let str = "Java Script";
// let size = 0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log(size);

// number guessing
// let gameNum = Math.floor(Math.random()*100)+1;
// console.log(gameNum);
// let num = Number(prompt("Enter the number b/w 1 and 100 :"));
// if(num<gameNum){
//     console.log("number is low");
// }else if(num===gameNum){
//     console.log("Number matched");
// }
//  else {
//     console.log("Number is high")
// }


let gameNum = Math.floor(Math.random()*100 ) + 1;
let userNum = Number(prompt("Guess the game Number : "));
while(userNum !== gameNum){
    if(userNum<gameNum){
        userNum = Number(prompt("number is low"));
    }
    else {
        userNum = Number(prompt("Number is high"));
    }

    // userNum = Number(prompt("Wrong! Guess again"))
}

console.log("Congratulations, you entered the right Number!!!!");   