# Period 1
## Vanilla JavaScript, es2015/15.., Node.js, Babel + Webpack and TypeScript


### Relevant projects:
- [Vanilla Javascript](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/JavaScriptExercises)
- [Promises](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/PromisesExercise)
- [Async/await](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/Async_functions)
- [es2015](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/es2015_exercises)
- [Webpacks](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/webpackExercise)
- [TypeScript](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/typescript_exercise)

---
## Hoisting:
```javascript
// Will return undefined
console.log(variable);
// Will return "World"
console.log(func());

// Variables must be declared before they're used.
let variable = "Hello";
// Function can be declared after they're used
function func() {
    return "World";
};
```
JavaScript interpreter allows you to use the function before the point at which it was declared in the source code. 

However, function definition hoisting only occurs for function declarations, not function expressions. fx.
`const func = () => { return "World"};`

---
## *this*:
```javascript
// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is set on the global object
var a = 'Global';

function whatsThis() {
  return this.a;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'
```
A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

In most cases, the value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. 

---
## Function closures and js Module Pattern:
```javascript
 var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
})();

add();
add();
add();
// the counter is now 3 
```
The variable `add` is assigned the return value of a self-invoking function.

The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

This is called a JavaScript **closure**. It makes it possible for a function to have "**private**" variables.

The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

---
## Immediately-Invoked Function Expressions (IIFE):
```javascript
(function initGameIIFE() {
    // All your magical code to initalize the game!
}());
```
hmmm i don't really remember this...

---
## JavaScripts Prototype
```javascript
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
};
```
A prototype is like an object where you can create stuff and then get it by saying Person.firstName

---
## TO BE CONTINUED ...