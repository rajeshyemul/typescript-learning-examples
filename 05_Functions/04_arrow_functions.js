// Single-line comment example
/*
 Multi-line comment example
 This file explains arrow functions in TypeScript,
 their syntax, and how they differ from regular functions.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// In Java, lambda expressions are used for short functions
// (int a, int b) -> a + b
// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------
// JavaScript introduced arrow functions in ES6
// const add = (a, b) => a + b;
// --------------------------------------------------
// TypeScript example: arrow functions
// --------------------------------------------------
// Arrow function with explicit types
var addTS = function (a, b) {
    return a + b;
};
console.log("Add result:", addTS(10, 20));
// --------------------------------------------------
// Arrow function with implicit return
// --------------------------------------------------
// Single-expression arrow function
var multiplyTS = function (a, b) { return a * b; };
console.log("Multiply result:", multiplyTS(5, 4));
// --------------------------------------------------
// Arrow functions as callbacks
// --------------------------------------------------
var numbers = [1, 2, 3, 4];
// Arrow functions are commonly used as callbacks
var doubled = numbers.map(function (n) { return n * 2; });
console.log("Doubled numbers:", doubled);
// --------------------------------------------------
// Arrow functions and `this`
// --------------------------------------------------
// Arrow functions do NOT have their own `this`
// They capture `this` from the surrounding scope
var Counter = /** @class */ (function () {
    function Counter() {
        this.count = 0;
    }
    Counter.prototype.increment = function () {
        var _this = this;
        setTimeout(function () {
            _this.count++;
            console.log("Count:", _this.count);
        }, 500);
    };
    return Counter;
}());
var counter = new Counter();
counter.increment();
/*
========================
Key Learning Points
========================
*/
// 1. Arrow functions provide a shorter syntax for functions.
// 2. Parameter and return types can be explicitly typed.
// 3. Arrow functions can use implicit returns for single expressions.
// 4. Arrow functions are commonly used as callbacks.
// 5. Arrow functions do not have their own `this`.
// 6. They capture `this` from the surrounding context.
// 7. This makes arrow functions safer in callbacks.
/*
Important Note:

Use arrow functions when you want predictable `this` behavior.
Use regular functions when you need your own `this`.
*/
// --------------------------------------------------
// Comparison with regular functions
// --------------------------------------------------
// Regular function with explicit types
function addRegular(a, b) {
    return a + b;
}
console.log("Add (regular):", addRegular(10, 20));
// Regular function does not capture `this` in callbacks
var RegularCounter = /** @class */ (function () {
    function RegularCounter() {
        this.count = 0;
    }
    RegularCounter.prototype.increment = function () {
        setTimeout(function () {
            // `this` is undefined here, will cause an error
            // this.count++; // ❌ This will not work
            // console.log("Count (regular):", this.count); // ❌ This will not work
        }, 500);
    };
    return RegularCounter;
}());
var regularCounter = new RegularCounter();
regularCounter.increment();
/*
========================
Key Learning Points
========================
*/
// 1. Regular functions have their own `this`.
// 2. In callbacks, `this` may be undefined or refer to the global object.
// 3. Arrow functions capture `this` from the surrounding scope, avoiding common pitfalls.
// 4. Regular functions are still useful when you need a function with its own `this`.
// 5. Choose between arrow and regular functions based on your needs for `this` behavior.
/*
How to run this file:

1. Compile:
   tsc 05_Functions/04_arrow_functions.ts

2. Run:
   node 05_Functions/04_arrow_functions.js
*/
// --------------------------------------------------
// End of file
// --------------------------------------------------   
