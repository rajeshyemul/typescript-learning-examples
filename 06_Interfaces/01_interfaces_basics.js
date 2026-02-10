// Single-line comment example
// Object adhering to the interface
var userTS = {
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
