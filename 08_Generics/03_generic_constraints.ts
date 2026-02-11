// Single-line comment example

/*
 Multi-line comment example
 This file explains generic constraints in TypeScript.
 Constraints allow restricting what types a generic
 parameter can represent.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, generics can be constrained

// class Box<T extends Number> {
//     T value;
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript allows unrestricted access

// function printLength(value) {
//   console.log(value.length);
// }

// --------------------------------------------------
// TypeScript example without constraint (problem)
// --------------------------------------------------
export {};

function printLengthUnsafe<T>(value: T): void {
  // console.log(value.length); // ❌ Error
}

// TypeScript does not know if T has 'length'

// --------------------------------------------------
// Generic constraint using extends
// --------------------------------------------------

// Define a type that has a length property
interface HasLength {
  length: number;
}

function printLengthSafe<T extends HasLength>(value: T): void {
  console.log("Length:", value.length);
}

printLengthSafe("TypeScript");
printLengthSafe([1, 2, 3, 4]);

// printLengthSafe(100); // ❌ Error (number has no length)

// --------------------------------------------------
// Constraint with object keys
// --------------------------------------------------

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  name: "Rajesh",
  age: 30
};

const name = getProperty(user, "name");
const age = getProperty(user, "age");

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