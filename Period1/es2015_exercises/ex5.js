function f(x, y, yes, z, greeting, multiple, day, obj) {
    return `
    Sum: ${x+y} 
    Rest Value 1 is a ${yes.constructor.name} 
    Rest Value 2 is a ${z.constructor.name} 
    Rest Value 3 is a ${greeting.constructor.name} 
    Rest Value 4 is a ${multiple.constructor.name} 
    Rest Value 5 is a ${day.constructor.name} 
    Rest Value 6 is a ${obj.constructor.name} 
    `;
}
console.log(f(5,2,true,421,'Hello',[1,2,3],new Date("2018-02-23"),{}));

/// [...arg] = Rest parameteres
var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = [...rest];
console.log(f(5,2,...restParams));
// It produces the same

var chars = [... f(5,2,...restParams)];
console.log(chars);
// It prints every char that our function returns in an array