// Single-line comment example

/*
 Multi-line comment example
 This file explains function overloading in TypeScript,
 how it differs from Java, and how it actually works at runtime.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, method overloading creates multiple implementations

// int add(int a, int b) {
//     return a + b;
// }

// double add(double a, double b) {
//     return a + b;
// }

// The JVM chooses the correct method at runtime

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript does not support function overloading

// function add(a, b) {
//   return a + b;
// }

// The last function definition wins

// --------------------------------------------------
// TypeScript example: function overload signatures
// --------------------------------------------------

// Overload signatures (compile-time only)
function formatValue(value: string): string;
function formatValue(value: number): string;

// --------------------------------------------------
// Single implementation (runtime)
// --------------------------------------------------

function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}

console.log(formatValue("typescript"));
console.log(formatValue(12.345));

// formatValue(true); // ❌ Compile-time error

/*
========================
Key Learning Points
========================
*/

// 1. Java supports true method overloading with multiple implementations.
// 2. JavaScript does not support function overloading.
// 3. TypeScript supports function overload signatures.
// 4. Overload signatures exist only at compile time.
// 5. There is exactly ONE function implementation at runtime.
// 6. The implementation must handle all overload cases.
// 7. Incorrect argument types are rejected at compile time.

/*
Important TypeScript Behavior (Read Carefully):

- Overload signatures define how a function can be called.
- The implementation signature must be compatible with all overloads.
- TypeScript chooses the correct overload at compile time.
- JavaScript sees only the final implementation.
*/

/*
How to run this file:

1. Compile:
   tsc 05_Functions/05_function_overloads.ts

2. Run:
   node 05_Functions/05_function_overloads.js
*/

// --------------------------------------------------
// End of file
// --------------------------------------------------