var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(code, name, department) {
        var _this = _super.call(this, code, name) || this;
        _this.department = department;
        return _this;
    }
    Person.prototype.getElevatorPitch = function () {
        return this.stdCode + " " + this.stdname + " " + this.department;
    };
    return Person;
}(Student));
var stud1 = new Student(101, 'Steave Job');
console.log(stud1.display());
var person1 = new Person(102, 'Mark Sakaberg', 'IT');
console.log(person1.getElevatorPitch());
