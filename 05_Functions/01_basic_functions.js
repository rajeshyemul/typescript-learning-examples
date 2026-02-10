// Single-line comment example
/*
 Multi-line comment example
 This file explains basic function typing in TypeScript,
 including parameter types and return types.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// In Java, method parameters and return types are explicit
// int add(int a, int b) {
//     return a + b;
// }
// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------
// JavaScript does not enforce parameter or return types
// function add(a, b) {
//   return a + b;
// }
// --------------------------------------------------
// TypeScript example
// --------------------------------------------------
// Typed parameters and return value
function addTS(a, b) {
    return a + b;
}
var result = addTS(10, 20);
console.log("Result:", result);
// addTS("10", 20); // ❌ Compile-time error
/*
========================
Key Learning Points
========================
*/
// 1. TypeScript requires explicit parameter types.
// 2. Return types can be inferred but are often written for clarity.
// 3. Incorrect argument types are caught at compile time.
// 4. Function typing prevents many runtime bugs.
// 5. This is the foundation for all advanced function patterns.
/*
How to run this file:

1. Compile:
   tsc 05_Functions/01_basic_functions.ts

2. Run:
   node 05_Functions/01_basic_functions.js
*/
// --------------------------------------------------
// End of file
// --------------------------------------------------
