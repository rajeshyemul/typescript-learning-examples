// Single-line comment example
/*
 Multi-line comment example
 This file explains object types in TypeScript and how they help
 define the structure (shape) of data.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// In Java, object structure is defined using classes
// class User {
//     String name;
//     int experience;
//     boolean isActive;
// }
// User user = new User();
// user.name = "Rajesh";
// user.experience = 15;
// user.isActive = true;
// --------------------------------------------------
// JavaScript example
// --------------------------------------------------
// JavaScript objects are flexible and unstructured
var userJS = {
    name: "Rajesh",
    experience: 15,
    isActive: true
};
// JavaScript allows changing object structure at runtime
// Still I commented this line since we stored this file with .ts extension
// complier may throw error if we uncomment it.
// userJS.role = "Test Automation Engineer"; // Allowed in JS 
console.log("JS user:", userJS);
// --------------------------------------------------
// TypeScript example
// --------------------------------------------------
// TypeScript enforces object structure using object types
var userTS = {
    name: "Rajesh",
    experience: 15,
    isActive: true
};
// ❌ TypeScript prevents invalid assignments
// userTS.role = "Test Automation Engineer"; // Compile-time error
console.log("TS user:", userTS);
// --------------------------------------------------
// TypeScript example with optional properties
// --------------------------------------------------
var userWithOptional = {
    name: "Rajesh",
    experience: 15,
    isActive: true
};
console.log("User with optional role:", userWithOptional);
/*
========================
Key Learning Points
========================
*/
// 1. Java defines object structure using classes.
// 2. JavaScript objects are flexible and allow shape changes.
// 3. TypeScript enforces object structure using object types.
// 4. Object types define required properties and their types.
// 5. Extra properties are not allowed unless defined.
// 6. Optional properties are marked using `?`.
// 7. Object types help catch structural bugs early.
/*
How to run this file:

1. Compile:
   tsc 02_Types/02_object_types.ts

2. Run:
   node 02_Types/02_object_types.js
*/
// --------------------------------------------------
// End of file
// --------------------------------------------------   
