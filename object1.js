var Person = /** @class */ (function () {
    function Person(ssn, fName, lName) {
        if (ssn === void 0) { ssn = '30901001'; }
        this.id = ssn;
        this.firstName = fName;
        this.lastName = lName;
    }
    Person.prototype.getFullName = function () {
        // return  this.id + " " + this.firstName +" "+  this.lastName;
        return this.id + " " + this.firstName + " " + this.lastName;
    };
    return Person;
}());
var person = new Person('12345678', 'Mark', 'Sakaberg');
console.log(person.getFullName());
