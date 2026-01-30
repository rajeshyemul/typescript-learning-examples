// Single-line comment example
/*
 Multi-line comment example
 This file explains how TypeScript automatically infers types
 based on assigned values.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// In Java, the type must always be explicitly declared
// String city = "Pune";
// int year = 2026;
// city = 10;   // ❌ Compile-time error
// year = "now"; // ❌ Compile-time error
// --------------------------------------------------
// JavaScript example
// --------------------------------------------------
// JavaScript infers types at runtime (dynamic typing)
var city = "Pune"; // string
var year = 2026; // number
// JavaScript allows changing types
// city = 10;        // Allowed
// year = "now";     // Allowed
console.log("city:", city);
console.log("year:", year);
// --------------------------------------------------
// TypeScript example
// --------------------------------------------------
// TypeScript infers types at compile time (static typing)
var tsCity = "Pune"; // inferred as string
var tsYear = 2026; // inferred as number
// TypeScript does NOT allow type changes
// tsCity = 10;        // ❌ Compile-time error
// tsYear = "now";     // ❌ Compile-time error
console.log("tsCity:", tsCity);
console.log("tsYear:", tsYear);
/*
========================
Key Learning Points
========================
*/
// 1. Java always requires explicit type declarations.
// 2. JavaScript determines variable types at runtime.
// 3. JavaScript allows variables to change types freely.
// 4. TypeScript infers types based on initial values.
// 5. Once inferred, TypeScript enforces the type.
// 6. Type inference reduces the need for explicit typing.
// 7. TypeScript inference provides safety without extra syntax.
/*
How to run this file:

1. Compile:
   tsc 01_Basics/02_type_inference.ts

2. Run:
   node 01_Basics/02_type_inference.js
*/
