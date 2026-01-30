// Single-line comment example
/*
 Multi-line comment example
 This file explains union types in TypeScript and how they allow
 a variable to hold more than one possible type.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// In Java, multiple types usually require inheritance or Object
// Object value;
// value = "TypeScript";
// value = 42;
// Access requires casting
// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------
// JavaScript allows any value without restrictions
// var value = "TypeScript";
// value = 42;
// value = true;
// --------------------------------------------------
// TypeScript example
// --------------------------------------------------
// Union type allows multiple specific types
var valueTS;
valueTS = "TypeScript";
console.log("valueTS (string):", valueTS);
valueTS = 42;
console.log("valueTS (number):", valueTS);
// valueTS = true; // ❌ Compile-time error
/*
========================
Key Learning Points
========================
*/
// 1. Java requires casting when working with multiple types.
// 2. JavaScript allows any type changes without restrictions.
// 3. TypeScript union types allow controlled flexibility.
// 4. Union types explicitly list allowed types.
// 5. Values outside the union are rejected at compile time.
// 6. Union types are commonly used in APIs and configs.
/*
How to run this file:

1. Compile:
   tsc 03_Combining_Types/01_union_types.ts

2. Run:
   node 03_Combining_Types/01_union_types.js
*/
// --------------------------------------------------
// End of file
// --------------------------------------------------   
