// Single-line comment example
/*
 Multi-line comment example
 This file introduces primitive types in TypeScript.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// int count = 10;
// double price = 99.99;
// boolean isActive = true;
// char grade = 'A';
// --------------------------------------------------
// JavaScript example
// --------------------------------------------------
// JavaScript uses dynamic typing
var count = 10; // number
var price = 99.99; // number
var isActive = true; // boolean
var grade = "A"; // string
console.log(count, price, isActive, grade);
// --------------------------------------------------
// TypeScript example
// --------------------------------------------------
// TypeScript uses explicit primitive types
var tsCount = 10;
var tsPrice = 99.99;
var tsIsActive = true;
var tsGrade = "A";
// tsCount = "ten"; // ❌ Compile-time error
console.log(tsCount, tsPrice, tsIsActive, tsGrade);
/*
========================
Key Learning Points
========================
*/
// 1. TypeScript supports number, string, and boolean as primitive types.
// 2. JavaScript uses dynamic typing.
// 3. TypeScript enforces type safety at compile time.
// 4. number covers both integers and decimals.
// 5. Explicit typing improves readability.
// 6. Type errors are caught before runtime.
/*
How to run this file:

1. Compile:
   tsc 02_Types/01_primitive_types.ts

2. Run:
   node 02_Types/01_primitive_types.js
*/
// --------------------------------------------------
// End of file
// --------------------------------------------------
