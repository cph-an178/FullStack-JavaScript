"use strict";
var Person = /** @class */ (function () {
    function Person(name, _email) {
        this._email = _email;
        this.id = Person.next_id++;
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (n) {
            this._name = n;
        },
        enumerable: true,
        configurable: true
    });
    Person.next_id = 100;
    return Person;
}());
var person1 = new Person("Kurt Wonneguth", "kurt@gmail.com");
var person2 = new Person("Lenny Mürchen", "lm@gmail.com");
var person3 = new Person("Danny De'vito", "Danny@devito.com");
console.log(person1.getId, person1.getName);
console.log(person3.getId, person3.getName);
//# sourceMappingURL=c:/Users/alexa/Documents/Datamatiker/Semester4/JavaScript/Period1/class_demo_typescript/build/class_demo.js.map