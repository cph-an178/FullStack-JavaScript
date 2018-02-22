"use strict";
function person_logger(person) {
    var str = "********************\n    ID: " + person.id + "\n    Name: " + person.first_name + " " + person.last_name + "\n    Phone: " + person.landline + "\n********************";
    return str;
}
var p1 = {
    id: 1,
    first_name: 'Kurt',
    last_name: 'Wonneguth',
    email: 'kurt@gmail.com'
};
console.log(person_logger(p1));
//# sourceMappingURL=c:/Users/alexa/Documents/Datamatiker/Semester4/JavaScript/Period1/class_demo_typescript/build/interface_demo.js.map