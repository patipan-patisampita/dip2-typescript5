class Student {
    public stdCode: number;
    private stdname: string;
}

let stud1 = new Student();
stud1.stdCode = 101;
stud1.stdname = 'Mark Sakaberg';
console.log(stud1);
console.log(stud1.stdCode + " " + stud1.stdname);
