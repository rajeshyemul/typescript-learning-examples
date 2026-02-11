// Single-line comment example
/*
 Multi-line comment example
 This file explains generic functions in TypeScript,
 including multiple type parameters and type inference.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// In Java, generic methods look like:
// public <T> T identity(T value) {
//     return value;
// }
// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------
// JavaScript allows flexible functions
// function firstElement(arr) {
//   return arr[0];
// }
// --------------------------------------------------
// TypeScript example: generic function with array
// --------------------------------------------------
function getFirstElement(arr) {
    return arr[0];
}
var firstString = getFirstElement(["TypeScript", "Java"]);
var firstNumber = getFirstElement([10, 20, 30]);
console.log("First string:", firstString);
console.log("First number:", firstNumber);
// TypeScript infers T automatically
// No need to write <string> or <number>
// --------------------------------------------------
// Generic function with multiple type parameters
// --------------------------------------------------
function mergeValues(value1, value2) {
    return [value1, value2];
}
var merged = mergeValues("Age", 30);
console.log("Merged result:", merged);
// --------------------------------------------------
// Generic function with object types
// --------------------------------------------------
function wrapInArray(value) {
    return [value];
}
var wrappedString = wrapInArray("Hello");
var wrappedNumber = wrapInArray(42);
console.log("Wrapped string:", wrappedString);
console.log("Wrapped number:", wrappedNumber);
/*
========================
Key Learning Points
========================
*/
// 1. Generic functions use type parameters like <T>.
// 2. TypeScript can infer generic types automatically.
// 3. Multiple type parameters are allowed (e.g., <T, U>).
// 4. Generics work naturally with arrays.
// 5. Generics preserve type safety.
// 6. Avoid using `any` when generics are possible.
// 7. Generic functions reduce duplication.
// 8. They enable flexible and reusable code.
// 9. Generics are a powerful tool for building libraries and frameworks that can work with any data type while still enforcing type constraints.
// 10. Understanding generics is essential for mastering TypeScript and writing robust, maintainable code.
// Note: Generics can also be used with classes and interfaces to create reusable data structures, such as lists, maps, and more complex types.
// This allows developers to create flexible APIs that can work with a variety of data types while still providing strong type safety.
// Generics are a powerful tool in TypeScript that enable developers to write code that is both reusable and type-safe, making it easier to maintain and extend applications over time.
/*
Important Design Insight:

- Avoid using `any` when you can use generics.
*/
/*
Important Mental Model:
/*
Important Mental Model:

- Generics describe relationships between types.
- The return type can depend on the input type.
- Type inference makes generics ergonomic to use.
*/
// --------------------------------
/*
How to run this file:

1. Compile:
   tsc 08_Generics/02_generic_functions.ts

2. Run:
   node 08_Generics/02_generic_functions.js
*/
// ----------------------------------
// End of file
// ----------------------------------
