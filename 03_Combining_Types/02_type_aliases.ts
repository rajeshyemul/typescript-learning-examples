// Single-line comment example

/*
 Multi-line comment example
 This file explains type aliases in TypeScript and how they help
 name and reuse complex type definitions.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, reusable types are usually defined using classes

// class User {
//     String name;
//     int experience;
//     boolean isActive;
// }

// User user = new User();

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript has no concept of named types

// var user = {
//   name: "Rajesh",
//   experience: 15,
//   isActive: true
// };

// --------------------------------------------------
// TypeScript example without type alias
// --------------------------------------------------

// Inline object type (works, but not reusable)

let userInline: {
  name: string;
  experience: number;
  isActive: boolean;
} = {
  name: "Rajesh",
  experience: 15,
  isActive: true
};

console.log("User (inline type):", userInline);

// --------------------------------------------------
// TypeScript example with type alias
// --------------------------------------------------

// Type alias defines a reusable named type

type User = {
  name: string;
  experience: number;
  isActive: boolean;
};

let userWithAlias: User = {
  name: "Rajesh",
  experience: 15,
  isActive: true
};

console.log("User (type alias):", userWithAlias);

// --------------------------------------------------
// Type alias with union types
// --------------------------------------------------

// Type aliases can combine multiple types

type ID = string | number;

let userId: ID;

userId = 101;
console.log("User ID (number):", userId);

userId = "A101";
console.log("User ID (string):", userId);

// userId = true; // ❌ Compile-time error

/*
========================
Key Learning Points
========================
*/

// 1. Java uses classes to define reusable data structures.
// 2. JavaScript has no native way to name data shapes.
// 3. TypeScript type aliases give names to complex types.
// 4. Type aliases improve readability and reuse.
// 5. Type aliases can represent objects, unions, and primitives.
// 6. Changing a type alias updates all its usages.
// 7. Type aliases are commonly used for models and API contracts.

/*
How to run this file:

1. Compile:
   tsc 03_Combining_Types/02_type_aliases.ts

2. Run:
   node 03_Combining_Types/02_type_aliases.js
*/

// --------------------------------------------------
// End of file
// --------------------------------------------------