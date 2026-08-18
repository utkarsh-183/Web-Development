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


function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

// callback hell
getData(1, () => {
    console.log("getting data 2........");
    getData(2, () =>{
        console.log("getting data 3......");
        getData(3, () => {
            console.log("getting data 4.......");
            getData(4);
        });
    });
});