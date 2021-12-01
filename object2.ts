//Stack memory or reference type
class Student {
    //1.By Reference value
    firstName: string = "Mark"; //heap memory or object type
    lastName: string = "Sakaberg"; //heap memory
}

let std1 = new Student(); //std1 object is heap memory
let std2 = new Student();//std2 object is heap memory
std2.firstName = "Steav";
std2.lastName = "Job";
//console.log(std1);
console.log(`${std1.firstName} ${std1.lastName}`);
console.log(`${std2.firstName} ${std2.lastName}`);