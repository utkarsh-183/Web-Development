// // const student = {
// //     fullName : "Utkarsh Tiwari",
// //     marks : 91,
// //     printMarks : function(){
// //         console.log("marks = ",this.marks);
// //     },
// // };

// // const employee = {
// //     calcTax() {
// //         console.log("tax rate is 10%");
// //     },
// // };

// // const karanArjun = {
// //     salary : 50000,
// //     calcTax() {
// //         console.log("tax rate is 20%");
// //     },
// // };

// // karanArjun.__proto__ = employee;

// class ToyotaCar {
//     constructor(brand, mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// // fortuner.setBrand("fortuner");
// let audi = new ToyotaCar("audi", 12);
// // audi.setBrand("BMW");

// class parent {
//     hello(){
//         console.log("Hello");
//     }
// }

// class child extends parent {

// }

// let obj = new child();

class person {
    constructor(){
        this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }
    sleep(){
       console.log("sleep");
    }

    work(){
        console.log("do nothing");
    }
}

class engineer extends person{
    work(){
        console.log("solve problems");
    }
}

class doctor extends person{
    work(){
        console.log("Treat Patients");
    }
}

let obj = new engineer();
let obj2 = new doctor();