// Single-line comment example

/*
 Multi-line comment example
 This file explains type assertions in TypeScript,
 why they exist, and when they should be used carefully.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, casting is explicit and checked at compile time

// Object value = "TypeScript";
// String text = (String) value;
// System.out.println(text.length());

// Incorrect casts cause ClassCastException at runtime

// --------------------------------------------------
// JavaScript example
// --------------------------------------------------

// JavaScript allows accessing properties without type checks

var valueJS = "TypeScript";

// JavaScript assumes you know what you're doing
console.log("JS length:", valueJS.length);

// --------------------------------------------------
// TypeScript example
// --------------------------------------------------

// TypeScript uses type assertions to tell the compiler
// what type a value should be treated as

let valueTS: unknown = "TypeScript";

// ❌ TypeScript does not allow direct access
// console.log(valueTS.length);

// ✅ Type assertion using 'as'
let textLength = (valueTS as string).length;
console.log("TS length (asserted):", textLength);

// --------------------------------------------------
// Incorrect type assertion (dangerous)
// --------------------------------------------------

let wrongValue: unknown = 42;

// TypeScript allows this assertion,
// but it does NOT make it safe at runtime
// let crash = (wrongValue as string).length; // Runtime error if executed

/*
========================
Key Learning Points
========================
*/

// 1. Java uses explicit casting with compile-time checks.
// 2. JavaScript allows unchecked property access.
// 3. TypeScript blocks unsafe access by default.
// 4. Type assertions tell TypeScript how to treat a value.
// 5. Type assertions do NOT perform runtime validation.
// 6. Incorrect assertions can still cause runtime errors.
// 7. Use type assertions only when you are certain about the type.

/*
Important Note for Learners:

Type assertions are a promise to the compiler.
If the promise is wrong, TypeScript cannot protect you.

Prefer proper type checks or narrowing whenever possible.
*/

/*
How to run this file:

1. Compile:
   tsc 02_Types/03_type_assertions.ts

2. Run:
   node 02_Types/03_type_assertions.js
*/
// --------------------------------------------------
// End of file
// --------------------------------------------------   