// A
const names = ['Lars', 'Jan', 'Peter', 'Bo',
    'Frederik', 'Ib', 'Kim', 'Sebastian'];

let names_string = names.join('-');
console.log(names_string);

// B
const reducer = (accumulator, currentValue) => accumulator + currentValue;

var numbers = [2, 3, 67, 33];

let sum = numbers.reduce(reducer);
console.log(sum);

// C
var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 },
]

const reducer2 = function(accumulator, member, index, arr) {
    if(index < arr.length - 1) {
        return accumulator + member.age
    }
    else {
        return (accumulator + member.age) / arr.length;
    }
}
let avg_age = members.reduce(reducer2, 0);
console.log(avg_age);

