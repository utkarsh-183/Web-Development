let DATA = "secret information";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data =", DATA);
    }
}

let student1 = new User("utkarsh", "ut@12");
let student2 = new User("Rishabh", "rb@76");