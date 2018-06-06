# Period 1
## Vanilla JavaScript, es2015/15.., Node.js, Babel + Webpack and TypeScript


### Explain and Reflect:
>Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.

Test

>Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers.

Typescript er et supersæt.

>Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.

How does node fit in the node ecosystem?? What
 
>Explain about the Event Loop in Node.js

[![What the heck is the event loop anyway?](http://img.youtube.com/vi/8aGhZQkoFbQ/0.jpg)](http://www.youtube.com/watch?v=8aGhZQkoFbQ)

>Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises

Babel er en Javascript compiler og webpack er din egen compiler(?)

>Explain the purpose of “use strict” and also Linters, exemplified with ESLint

Når du ikke vil være ond imod din code <3

---
### Relevant projects:
- [Vanilla Javascript](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/JavaScriptExercises)
- [Promises](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/PromisesExercise)
- [Async/await](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/Async_functions)
- [es2015](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/es2015_exercises)
- [Webpacks](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/webpackExercise)
- [TypeScript](https://github.com/cph-an178/FullStack-JavaScript/tree/master/Period1/typescript_exercise)

---

## Features in Javascript

### Hoisting:
JavaScript interpreter allows you to use the function before the point at which it was declared in the source code. 

However, function definition hoisting only occurs for function declarations, not function expressions. fx.
`const func = () => { return "World"};`
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



### *this*:
A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

In most cases, the value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. 

In Java we use *this* in constructors 
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

### Function closures and js Module Pattern:
The variable `add` is assigned the return value of a self-invoking function.

The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

This is called a JavaScript **closure**. It makes it possible for a function to have "**private**" variables.

The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
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

### Immediately-Invoked Function Expressions (IIFE):
I do not remember this...
```javascript
(function initGameIIFE() {
    // All your magical code to initalize the game!
}());
```

### JavaScripts Prototype
A prototype is like an object where you can create stuff and then get it by saying Person.firstName

```javascript
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
};
```

### User defined Callback Functions
That will call `doSomething`, which will call `foo`, which will alert "stuff goes here".

Note that it's very important to pass the function reference (`foo`), rather than calling the function and passing its result (`foo()`). In your question, you do it properly, but it's just worth pointing out because it's a common error.
```javascript
function doSomething(callback) {
    // ...

    // Call the callback
    callback('stuff', 'goes', 'here');
}

function foo(a, b, c) {
    // I'm the callback
    alert(a + " " + b + " " + c);
}

doSomething(foo);
```

### *Map*, *filter* and *reduce*

**Map:**

The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.
```javascript
const numbers = [2, 4, 8, 10];
const halves = numbers.map(x => x / 2);

// halves is [1, 2, 4, 5]
```

**Filter:**

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
```javascript
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const longWords = words.filter(word => word.length > 6);

// longWords is ["exuberant", "destruction", "present"]
```

**Reduce:**

The `reduce()` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
```javascript
const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);

// total is 7
```

---
