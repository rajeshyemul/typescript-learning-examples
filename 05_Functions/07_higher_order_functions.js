// Single-line comment example
/*
 Multi-line comment example
 This file explains higher-order functions in TypeScript
 and how functions can accept and return other functions safely.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// In Java, behavior is often passed using interfaces or lambdas
// interface Operation {
//     int apply(int a, int b);
// }
// int calculate(int a, int b, Operation op) {
//     return op.apply(a, b);
// }
// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------
// JavaScript freely passes functions
// function calculate(a, b, operation) {
//   return operation(a, b);
// }
// --------------------------------------------------
// TypeScript example: higher-order function
// --------------------------------------------------
// Function that accepts another function as a parameter
function calculateTS(a, b, operation) {
    return operation(a, b);
}
// Passing different behaviors
var sumResult = calculateTS(10, 5, function (x, y) { return x + y; });
var diffResult = calculateTS(10, 5, function (x, y) { return x - y; });
console.log("Sum:", sumResult);
console.log("Difference:", diffResult);
// --------------------------------------------------
// Higher-order function returning a function
// --------------------------------------------------
// Function factory
function createMultiplier(factor) {
    return function (value) {
        return value * factor;
    };
}
var double = createMultiplier(2);
var triple = createMultiplier(3);
console.log("Double:", double(5));
console.log("Triple:", triple(5));
// --------------------------------------------------
// Real-world style example
// --------------------------------------------------
// Logger creator using higher-order functions
function createLogger(prefix) {
    return function (message) {
        console.log("".concat(prefix, ": ").concat(message));
    };
}
var infoLogger = createLogger("INFO");
var errorLogger = createLogger("ERROR");
infoLogger("Application started");
errorLogger("Something went wrong");
/*
========================
Key Learning Points
========================
*/
// 1. Higher-order functions accept functions as arguments or return them.
// 2. TypeScript allows precise typing of function parameters and returns.
// 3. Function types ensure correct behavior is passed.
// 4. Returning functions enables function factories.
// 5. This pattern is common in logging, configuration, and frameworks.
// 6. Type safety is preserved even with dynamic behavior.
// 7. Higher-order functions are a core functional programming concept.
/*
Important TypeScript Behavior:

- TypeScript checks the *shape* of functions, not their names.
- Returned functions must match the declared return type.
- Incorrect callback signatures are caught at compile time.
*/
/*
How to run this file:

1. Compile:
   tsc 05_Functions/07_higher_order_functions.ts

2. Run:
   node 05_Functions/07_higher_order_functions.js
*/
// ----------------------------------
// End of file
// ----------------------------------
