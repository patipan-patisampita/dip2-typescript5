class Person{
    //property/field/atribute/data of Classs
    id: string; 
    firstName: string;
    lastName: string;

    constructor(ssn:string = '30901001',fName:string,lName:string){
        this.id = ssn;
        this.firstName = fName;
        this.lastName = lName;
    }

    getFullName(){
      // return  this.id + " " + this.firstName +" "+  this.lastName;
       return `${this.id} ${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('12345678','Mark','Sakaberg');
console.log(person.getFullName());