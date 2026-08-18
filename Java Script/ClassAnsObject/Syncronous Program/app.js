// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("Hello");
// }, 1000);

// console.log("three");

// nested loop
// let age = 32;
// if(age>=18){
//     if(age>=60) console.log('senior');
//     else console.log('middle');
// } else{
//     console.log('minor');
// }


// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// // callback hell
// getData(1, () => {
//     console.log("getting data 2........");
//     getData(2, () =>{
//         console.log("getting data 3......");
//         getData(3, () => {
//             console.log("getting data 4.......");
//             getData(4);
//         });
//     });
// });

// promise : a solution for callback hell

// let promise = new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     reject("promise has not been resolved");
// });

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data", dataId);
//             resolve("sucsess")
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData() {
    await api();
    await api();
}