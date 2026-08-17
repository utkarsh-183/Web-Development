// const student = {
//     fullName : "Utkarsh Tiwari",
//     marks : 91,
//     printMarks : function(){
//         console.log("marks = ",this.marks);
//     },
// };

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary : 50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};

karanArjun.__proto__ = employee;