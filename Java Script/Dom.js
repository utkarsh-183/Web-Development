// document.getElementById("heading");
// console.dir(heading);
// let para = document.getElementsByTagName("p");
// console.dir(para);

// console.dir(document.body.lastChild);
// console.log("js")

// let div = document.querySelector("div")
// console.dir(div);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " From Apna College!!" // conactenate

let divs = document.querySelectorAll(".box");
// divs[0].innerText = "new text";
// divs[1].innerText = "value 2";
// divs[2].innerText = "this is value 3";
let idx = 1;
for(div of divs){
    div.innerText= `this is a new line ${idx}`;
    idx++;
}