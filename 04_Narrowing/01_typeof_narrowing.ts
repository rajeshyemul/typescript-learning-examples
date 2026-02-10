// Single-line comment example

/*
 Multi-line comment example
 This file explains typeof narrowing and how TypeScript
 uses runtime type checks to refine types.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, method overloading or instanceof is used

// void printLength(String value) {
//     System.out.println(value.length());
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript uses typeof at runtime

// function printValue(value) {
//   if (typeof value === "string") {
//     console.log(value.length);
//   }
// }

// --------------------------------------------------
// TypeScript example
// --------------------------------------------------

// Union type with multiple possibilities
function printValueTS(value: string | number) {
  if (typeof value === "string") {
    // TypeScript knows value is string here
    console.log("String length:", value.length);
  } else {
    // TypeScript knows value is number here
    console.log("Number value:", value);
  }
}

printValueTS("TypeScript");
printValueTS(42);

/*
========================
Key Learning Points
========================
*/

// 1. typeof checks are evaluated at runtime.
// 2. TypeScript uses typeof to narrow union types.
// 3. Inside the if block, the type is more specific.
// 4. typeof works for primitives like string and number.
// 5. Narrowing makes union types safe to use.
// 6. This is the most common narrowing technique.


// --------------------------------------------------
// Additional Example: keyof operator for comparison
// --------------------------------------------------

// JavaScript allows dynamic property access but is unsafe

type User = {
  name: string;
  experience: number;
};

// Unsafe function using plain string keys
function getUserPropertyUnsafe(user: User, key: string) {
  return (user as any)[key]; // Bypasses type checking
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

/*
How to run this file:

1. Compile:
   tsc 04_Narrowing/01_typeof_narrowing.ts

2. Run:
   node 04_Narrowing/01_typeof_narrowing.js
*/

// --------------------------------------------------
// End of file
// ---------------------------------------------------