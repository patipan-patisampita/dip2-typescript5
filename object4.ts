//3.By constructor
class Car{
    //deining field
    id:number;
    name:string;
    //define constructor
    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }
    //create method or function
    display(){
        console.log(`${this.id} ${this.name}`);
    }
}
let car1 = new Car(101,'Korat');
let car2 = new Car(102,'Trat');
car1.display();
car2.display();