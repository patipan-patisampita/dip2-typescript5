//Stack memory or reference type
var Student = /** @class */ (function () {
    function Student() {
        this.firstName = "Mark"; //heap memory or object type
        this.lastName = "Sakaberg"; //heap memory
    }
    return Student;
}());
var std1 = new Student(); //std1 object is heap memory
var std2 = new Student(); //std2 object is heap memory
std2.firstName = "Steav";
std2.lastName = "Job";
//console.log(std1);
console.log(std1.firstName + " " + std1.lastName);
console.log(std2.firstName + " " + std2.lastName);
