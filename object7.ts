class Student {
    public stdCode: number;
    //Access Modifiers with Protect 
    protected stdname: string;
    constructor(code: number, name: string) {
        this.stdCode = code;
        this.stdname = name;
    }
    display() {
        return this.stdCode + " " + this.stdname;
    }
}

class Person extends Student {
    //Access Modifiers with private 
    private department: string;
    constructor(code: number, name: string, department: string) {
        super(code, name);
        this.department = department;
    }
    getElevatorPitch() {
        return this.stdCode + " " + this.stdname + " " + this.department;
    }
}

let stud1 = new Student(101, 'Steave Job');
console.log(stud1.display());

let person1 = new Person(102, 'Mark Sakaberg', 'IT');
console.log(person1.getElevatorPitch());
