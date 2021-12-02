class Student {
    public stdCode: number;

    //Access Modifiers with Private 
    private stdname: string;

    constructor(code: number, name: string) {
        this.stdCode = code;
        this.stdname = name;
    }
    display() {
        return this.stdCode + " " + this.stdname;
    }
}

let stud1 = new Student(101, 'Mark Sakaberg');
console.log(stud1.display());
