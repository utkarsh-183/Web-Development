const name = "utkarsh"
const LCP = 300 //LeetCode problems

// console.log(name +" "+ LCP)

console.log(`Hello my name is ${name} and my total solved leetcode problem is ${LCP} till date`);

const gameName = new String('Smashkarts')
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherStirng = gameName.slice(-8,4)
console.log(anotherStirng);

const newString2 = "    utkarsh    ";
console.log(newString2)
console.log(newString2.trim());

const url = "https://utkarsh.com/utkarsh%20tiwari"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

const gameName2 = new String('GTA-Plonky-SmashKarts')
console.log(gameName2.split('-'))

   