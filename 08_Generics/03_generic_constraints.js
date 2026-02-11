"use strict";
// Single-line comment example
Object.defineProperty(exports, "__esModule", { value: true });
function printLengthUnsafe(value) {
    // console.log(value.length); // ❌ Error
}
function printLengthSafe(value) {
    console.log("Length:", value.length);
}
printLengthSafe("TypeScript");
printLengthSafe([1, 2, 3, 4]);
// printLengthSafe(100); // ❌ Error (number has no length)
// --------------------------------------------------
// Constraint with object keys
// --------------------------------------------------
function getProperty(obj, key) {
    return obj[key];
}
var user = {
    name: "Rajesh",
    age: 30
};
var name = getProperty(user, "name");
var age = getProperty(user, "age");
console.log("Name:", name);
console.log("Age:", age);
// getProperty(user, "salary"); // ❌ Error
/*
========================
Key Learning Points
========================
*/
// 1. Generic constraints use the `extends` keyword.
// 2. Constraints restrict what T is allowed to be.
// 3. Without constraints, TypeScript cannot assume properties.
// 4. Constraints improve safety without losing flexibility.
// 5. `keyof` works beautifully with generics.
// 6. T[K] represents the type of a property.
// 7. Constraints are essential for real-world generics.
/*
Important Mental Model:

- <T extends Something> means:
  "T must at least satisfy Something."

- Constraints allow safe property access.
- Generics + keyof unlock powerful reusable utilities.
*/
/*
How to run this file:

1. Compile:
   tsc 08_Generics/03_generic_constraints.ts

2. Run:
   node 08_Generics/03_generic_constraints.js
*/
// ----------------------------------
// End of file
// ----------------------------------   
