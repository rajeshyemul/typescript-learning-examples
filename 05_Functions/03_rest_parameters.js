// Single-line comment example
/*
 Multi-line comment example
 This file explains rest parameters (...) in TypeScript
 and how they allow functions to accept variable numbers of arguments.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// In Java, varargs are used for variable arguments
// int sum(int... numbers) {
//     int total = 0;
//     for (int n : numbers) {
//         total += n;
//     }
//     return total;
// }
// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------
// JavaScript uses the arguments object or rest parameters
// function sum() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// --------------------------------------------------
// TypeScript example: rest parameters
// --------------------------------------------------
// Rest parameters with explicit typing
function sumTS() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var n = numbers_1[_a];
        total += n;
    }
    return total;
}
console.log("Sum (2 numbers):", sumTS(10, 20));
console.log("Sum (4 numbers):", sumTS(1, 2, 3, 4));
// sumTS(1, "2"); // ❌ Compile-time error
// --------------------------------------------------
// Rest parameters with other parameters
// --------------------------------------------------
function logMessages(prefix) {
    var messages = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        messages[_i - 1] = arguments[_i];
    }
    for (var _a = 0, messages_1 = messages; _a < messages_1.length; _a++) {
        var message = messages_1[_a];
        console.log("".concat(prefix, ": ").concat(message));
    }
}
logMessages("INFO", "App started", "User logged in");
logMessages("ERROR", "Invalid input");
/*
========================
Key Learning Points
========================
*/
// 1. Rest parameters allow variable numbers of arguments.
// 2. Rest parameters are typed as arrays.
// 3. TypeScript enforces element types in rest parameters.
// 4. Rest parameters must be the last parameter.
// 5. Rest parameters replace the unsafe `arguments` object.
// 6. This pattern is common in logging and utility functions.
// 7. Type safety is preserved even with flexible APIs.
/*
How to run this file:

1. Compile:
   tsc 05_Functions/03_rest_parameters.ts

2. Run:
   node 05_Functions/03_rest_parameters.js
*/
