// Single-line comment example
/*
 Multi-line comment example
 This file explains the basics of generics in TypeScript
 and why they are better than using `any`.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// In Java, generics provide type-safe reuse
// class Box<T> {
//     T value;
// }
// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------
// JavaScript uses flexible typing
// function identity(value) {
//   return value;
// }
// --------------------------------------------------
// TypeScript example using `any` (not ideal)
// --------------------------------------------------
function identityAny(value) {
    return value;
}
var result1 = identityAny("TypeScript");
var result2 = identityAny(100);
// Type information is lost
// result1.toUpperCase(); // Allowed, but unsafe in general
// --------------------------------------------------
// TypeScript example using generics
// --------------------------------------------------
function identity(value) {
    return value;
}
var stringResult = identity("TypeScript");
var numberResult = identity(100);
console.log("String result:", stringResult);
console.log("Number result:", numberResult);
// TypeScript preserves type information
// stringResult.toUpperCase(); // Safe
// numberResult.toFixed(2);    // Safe
/*
========================
Key Learning Points
========================
*/
// 1. Generics allow reusable type-safe code.
// 2. `any` removes type safety.
// 3. Generics preserve the input type.
// 4. `<T>` is a type parameter.
// 5. The return type can depend on the input type.
// 6. Generics improve flexibility without sacrificing safety.
// 7. This is foundational for advanced TypeScript patterns.
// 8. Generics are widely used in libraries and frameworks for maximum reusability.
// 9. They enable writing functions and classes that work with any data type while still enforcing type constraints.
// 10. Understanding generics is crucial for mastering TypeScript and writing robust, maintainable code.
// Note: Generics can also be used with classes and interfaces to create reusable data structures, such as lists, maps, and more complex types.
// This allows developers to create flexible APIs that can work with a variety of data types while still providing strong type safety.
// Generics are a powerful tool in TypeScript that enable developers to write code that is both reusable and type-safe, making it easier to maintain and extend applications over time.
// Important Design Insight:
/*
- Avoid using `any` when you can use generics.
- Generics provide type safety and flexibility.
- They allow you to write code that works with any type while still enforcing type constraints.
*/
/*
Important Mental Model:

- Generics are placeholders for types.
- They allow writing logic once, safely for many types.
- Think of T as "Type to be decided later".
*/
/*
How to run this file:

1. Compile:
   tsc 08_Generics/01_generics_basics.ts

2. Run:
   node 08_Generics/01_generics_basics.js
*/
// ----------------------------------
// End of file
// ----------------------------------
