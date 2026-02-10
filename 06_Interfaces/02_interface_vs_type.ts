// Single-line comment example

/*
 Multi-line comment example
 This file explains the difference between `interface` and `type`
 in TypeScript and when to use each.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, interfaces define contracts
// Classes implement interfaces

// interface User {
//     String name;
//     int experience;
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript has no concept of interfaces or types

// const user = {
//   name: "Rajesh",
//   experience: 15
// };

// --------------------------------------------------
// TypeScript example: using interface
// --------------------------------------------------

// Interface defines a contract
interface UserInterface {
  name: string;
  experience: number;
}

const userFromInterface: UserInterface = {
  name: "Rajesh",
  experience: 15
};

console.log("User (interface):", userFromInterface);

// --------------------------------------------------
// TypeScript example: using type alias
// --------------------------------------------------

// Type alias defining the same shape
type UserType = {
  name: string;
  experience: number;
};

const userFromType: UserType = {
  name: "Rajesh",
  experience: 15
};

console.log("User (type):", userFromType);

// --------------------------------------------------
// Key differences
// --------------------------------------------------

// Interfaces can be extended
interface AdminInterface extends UserInterface {
  permissions: string[];
}

const admin: AdminInterface = {
  name: "Rajesh",
  experience: 15,
  permissions: ["read", "write"]
};

console.log("Admin (interface extension):", admin);

// --------------------------------------------------
// Type aliases can create unions
// --------------------------------------------------

// Type aliases support unions
type ID = string | number;

let userId: ID;
userId = 101;
userId = "A101";

// userId = true; // ❌ Compile-time error

/*
========================
Key Learning Points
========================
*/

// 1. Interfaces and types can both describe object shapes.
// 2. Interfaces are primarily used for object contracts.
// 3. Interfaces support extension and declaration merging.
// 4. Type aliases are more flexible and support unions.
// 5. Type aliases cannot be reopened or merged.
// 6. Use interfaces for public APIs and class contracts.
// 7. Use type aliases for unions and complex compositions.

/*
Important Guidance (Real-world Rule of Thumb):

- Use `interface` when modeling object shapes and contracts.
- Use `type` when modeling unions, primitives, or complex combinations.
- Most real projects use both — not one exclusively.
*/

/*
How to run this file:

1. Compile:
   tsc 06_Interfaces/02_interface_vs_type.ts

2. Run:
   node 06_Interfaces/02_interface_vs_type.js
*/

// ----------------------------------
// End of file
// ----------------------------------   