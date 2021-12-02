var Student = /** @class */ (function () {
    function Student(code, name) {
        this.stdCode = code;
        this.stdname = name;
    }
    Student.prototype.display = function () {
        return this.stdCode + " " + this.stdname;
    };
    return Student;
}());
var stud1 = new Student(101, 'Mark Sakaberg');
console.log(stud1.display());
