"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function say_hello(f_name, l_name, role) {
    var response = "Hello " + f_name + " " + l_name;
    response += (role) ? ", your role is: " + role : '';
    console.log(response);
}
/*
say_hello('Kurt', 'Wonnegut', 'Janitor')
say_hello('Jimmy', 'Jensen')
*/
var Person = /** @class */ (function () {
    function Person(f_name, l_name) {
        this.l_name = l_name;
        this.f_name = f_name;
        this.l_name = l_name;
    }
    Person.prototype.say_hello_v1 = function () {
        var self = this;
        setTimeout(function () {
            console.log("Hi " + self.f_name);
        });
    };
    Person.prototype.say_hello_v2 = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hi " + _this.f_name);
        });
    };
    return Person;
}());
var p1 = new Person('Kurt', 'Woeengut');
p1.say_hello_v1();
p1.say_hello_v2();
//# sourceMappingURL=c:/Users/alexa/Documents/Datamatiker/Semester4/JavaScript/Period1/class_demo_typescript/build/func_demo.js.map