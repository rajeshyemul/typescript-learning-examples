// Single-line comment example

/*
 Multi-line comment example
 This file explains function types in TypeScript and how
 functions can be typed, assigned, and passed safely.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, functional interfaces define function signatures

// interface Calculator {
//     int apply(int a, int b);
// }

// Calculator add = (a, b) -> a + b;

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript treats functions as values

// const add = (a, b) => a + b;

// --------------------------------------------------
// TypeScript example: function type annotation
// --------------------------------------------------

// Function type definition
let calculator: (a: number, b: number) => number;

// Assigning a function that matches the signature
calculator = function (a: number, b: number): number {
  return a + b;
};

console.log("Add result:", calculator(10, 20));

// --------------------------------------------------
// Assigning arrow functions
// --------------------------------------------------

calculator = (a: number, b: number): number => a * b;

console.log("Multiply result:", calculator(5, 4));

// --------------------------------------------------
// Function types as parameters (callbacks)
// --------------------------------------------------

function executeOperation(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}

const sum = executeOperation(3, 4, (x, y) => x + y);
const product = executeOperation(3, 4, (x, y) => x * y);

console.log("Sum:", sum);
console.log("Product:", product);

/*
========================
Key Learning Points
========================
*/

// 1. Functions can be typed like any other value.
// 2. Function types describe parameter types and return type.
// 3. Assigned functions must match the declared signature.
// 4. Arrow functions work naturally with function types.
// 5. Function types are commonly used for callbacks.
// 6. This enables safe higher-order functions.
// 7. TypeScript checks function compatibility at compile time.

/*
Important Note:

If a function matches the required signature,
TypeScript considers it valid — implementation details do not matter.
*/

/*
How to run this file:

1. Compile:
   tsc 05_Functions/06_function_types.ts

2. Run:
   node 05_Functions/06_function_types.js
*/

// --------------------------------------------------
// End of file
// --------------------------------------------------   
