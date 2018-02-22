class Person {
    private static next_id: number = 100;
    private readonly id: number;
    private _name: string;
    constructor(name: string, private _email: string) {
        this.id = Person.next_id++;
        this._name = name;
    }
    get getName(): string {
        return this._name;
    }
    get getId(): number {
        return this.id;
    }
    set setName(n: string) {
        this._name = n;
    }
}

let person1: Person = new Person("Kurt Wonneguth", "kurt@gmail.com");
let person2: Person = new Person("Lenny Mürchen", "lm@gmail.com");
let person3: Person = new Person("Danny De'vito", "Danny@devito.com");
console.log(person1.getId,person1.getName)
console.log(person3.getId,person3.getName)