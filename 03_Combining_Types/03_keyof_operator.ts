// Single-line comment example

/*
 Multi-line comment example
 This file explains the `keyof` operator and how it helps
 work safely with object property names in TypeScript.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, property access is checked at compile time

// class User {
//     String name;
//     int experience;
// }

// User user = new User();
// System.out.println(user.name); // safe
// System.out.println(user.age);  // ❌ compile-time error

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript allows dynamic property access

// var user = {
//   name: "Rajesh",
//   experience: 15
// };

// console.log(user["name"]);      // works
// console.log(user["age"]);       // undefined (no warning)

// --------------------------------------------------
// TypeScript example without keyof
// --------------------------------------------------

// Using plain strings for property names is risky

type User = {
  name: string;
  experience: number;
};

function getUserPropertyUnsafe(user: User, key: string) {
  // ❌ TypeScript cannot verify this access
  return (user as any)[key];
}

const user: User = {
  name: "Rajesh",
  experience: 15
};

console.log("Unsafe access:", getUserPropertyUnsafe(user, "name"));
// getUserPropertyUnsafe(user, "age"); // Runtime bug, no compile-time error

// --------------------------------------------------
// TypeScript example with keyof
// --------------------------------------------------

// keyof creates a union of valid property names

type UserKeys = keyof User;
// UserKeys is: "name" | "experience"

function getUserPropertySafe(user: User, key: UserKeys) {
  return user[key];
}

console.log("Safe access (name):", getUserPropertySafe(user, "name"));
console.log("Safe access (experience):", getUserPropertySafe(user, "experience"));

// getUserPropertySafe(user, "age"); // ❌ Compile-time error

/*
========================
Key Learning Points
========================
*/

// 1. Java enforces property access at compile time.
// 2. JavaScript allows invalid property access silently.
// 3. Using plain strings for object keys is unsafe.
// 4. `keyof` produces a union of valid property names.
// 5. `keyof` enables type-safe dynamic property access.
// 6. Invalid keys are caught at compile time.
// 7. `keyof` is essential for safe refactoring.

/*
Important TypeScript Behavior:

- `keyof` reflects the structure of a type.
- If the type changes, `keyof` updates automatically.
- This prevents bugs caused by renamed or removed properties.
*/

/*
How to run this file:

1. Compile:
   tsc 03_Combining_Types/03_keyof_operator.ts

2. Run:
   node 03_Combining_Types/03_keyof_operator.js
*/

// --------------------------------------------------
// End of file
// --------------------------------------------------   