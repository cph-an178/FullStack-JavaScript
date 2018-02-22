"use strict";
// Static type
var burger = 'hamburger', // String 
calories = 300, // Numeric
tasty = true; // Boolean
// Alternatively, you can omit the type declaration:
// var burger = 'hamburger';
// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
speak(burger, calories);
// We tell our function to expect an object that fulfills the Food interface. 
// This way we know that the properties we need will always be available.
function speak1(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
    name: "ice cream",
    calories: 200
};
speak1(ice_cream);
// Classes
var Menu = /** @class */ (function () {
    // A straightforward constructor. 
    function Menu(item_list, total_pages) {
        // The this keyword is mandatory.
        this.items = item_list;
        this.pages = total_pages;
    }
    // Methods
    Menu.prototype.list = function () {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
// Create a new instance of the Menu class.
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
// Call the list method.
sundayMenu.list();
// Generics
// The <T> after the function name symbolizes that it's a generic function.
// When we call the function, every instance of T will be replaced with the actual provided type.
// Receives one argument of type T,
// Returns an array of type T.
function genericFunc(argument) {
    var arrayOfT = []; // Create empty array of type T.
    arrayOfT.push(argument); // Push, now arrayOfT = [argument].
    return arrayOfT;
}
var arrayFromString = genericFunc("beep");
console.log(arrayFromString[0]); // "beep"
console.log(typeof arrayFromString[0]); // String
var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]); // 42
console.log(typeof arrayFromNumber[0]); // number
// Modules
var sayHi = function () {
    console.log("Hello!");
};
module.exports = sayHi;
/*
import sayHi = require('src');
sayHi();
*/ 
//# sourceMappingURL=c:/Users/alexa/Documents/Datamatiker/Semester4/JavaScript/Period1/typescript_exercise/build/ex2.js.map