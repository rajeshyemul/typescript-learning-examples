// Single-line comment example

/*
 Multi-line comment example
 This file explains the basics of interfaces in TypeScript
 and how they define the shape of objects.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, interfaces define contracts

// interface User {
//     String name;
//     int experience;
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript has no built-in interface concept

// const user = {
//   name: "Rajesh",
//   experience: 15
// };

// --------------------------------------------------
// TypeScript example: interface basics
// --------------------------------------------------

// Interface defining object structure
interface User {
  name: string;
  experience: number;
  isActive: boolean;
}

// Object adhering to the interface
const userTS: User = {
  name: "Rajesh",
  experience: 15,
  isActive: true
};

console.log("User:", userTS);

// ❌ Missing or extra properties are not allowed
// const invalidUser: User = {
//   name: "Rajesh",
//   experience: 15
// };

/*
========================
Key Learning Points
========================
*/

// 1. Interfaces define the shape of an object.
// 2. Objects must fully satisfy the interface.
// 3. Missing properties cause compile-time errors.
// 4. Interfaces improve consistency across codebases.
// 5. Interfaces describe structure, not implementation.

/*
How to run this file:

1. Compile:
   tsc 06_Interfaces/01_interfaces_basics.ts

2. Run:
   node 06_Interfaces/01_interfaces_basics.js
*/

// ----------------------------------
// End of file
// ----------------------------------   

