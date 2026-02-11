export {};
// Single-line comment example

/*
 Multi-line comment example
 This file explains generic interfaces in TypeScript.
 Generic interfaces allow defining reusable, type-safe contracts.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, interfaces can be generic

// interface Box<T> {
//     T value;
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript has no type-level generics

// --------------------------------------------------
// TypeScript example: basic generic interface
// --------------------------------------------------

// Generic interface
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = {
  value: "TypeScript"
};

const numberBox: Box<number> = {
  value: 100
};

console.log("String box:", stringBox.value);
console.log("Number box:", numberBox.value);

// --------------------------------------------------
// Generic interface with multiple type parameters
// --------------------------------------------------

interface Pair<T, U> {
  first: T;
  second: U;
}

const userPair: Pair<string, number> = {
  first: "Age",
  second: 30
};

console.log("Pair:", userPair);

// --------------------------------------------------
// Real-world style example: API response
// --------------------------------------------------

interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Rajesh"
  }
};

console.log("User response:", userResponse);

/*
========================
Key Learning Points
========================
*/

// 1. Generic interfaces use type parameters like <T>.
// 2. They allow reusable type-safe contracts.
// 3. Type arguments are specified when using the interface.
// 4. Multiple type parameters are supported.
// 5. Generic interfaces are common in API modeling.
// 6. They preserve type safety across different data shapes.
// 7. This pattern is heavily used in real applications.

/*
Important Mental Model:

- Generic interfaces define relationships between types.
- They are blueprints that adapt to different data shapes.
- Real frameworks use generic interfaces extensively.
*/

/*
How to run this file:

1. Compile:
   tsc 08_Generics/04_generic_interfaces.ts

2. Run:
   node 08_Generics/04_generic_interfaces.js
*/

// ----------------------------------
// End of file
// ----------------------------------   