let gameNum = Math.floor(Math.random()*100) + 1;
let userNum = Number(prompt("Guess the game Number : "));
while(userNum !== gameNum){
    if(userNum<gameNum){
        userNum = Number(prompt(("Wrong! Guess again, Number is low")));
    }
    else {
        userNum = Number(prompt((" Wrong! Guess again, Number is high")));
    }
}

console.log("Congratulations, you entered the right Number!!!!");