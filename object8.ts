class Company {
    id: number;
    readonly country: string;
    readonly name: string;

    constructor(contName: string, contCountry: string) {
        this.name = contName;
        this.country = contCountry;
    }

    getDetails() {
        return this.name + " " + this.country + " " + this.id;
    }
}

let comp = new Company("Welcome", "Thailand");
console.log(comp.getDetails());

comp.id = 66;
console.log(comp.getDetails());