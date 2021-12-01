//3.By constructor
var Car = /** @class */ (function () {
    //define constructor
    function Car(id, name) {
        this.id = id;
        this.name = name;
    }
    //create method or function
    Car.prototype.display = function () {
        console.log(this.id + " " + this.name);
    };
    return Car;
}());
var car1 = new Car(101, 'Korat');
var car2 = new Car(102, 'Trat');
car1.display();
car2.display();
