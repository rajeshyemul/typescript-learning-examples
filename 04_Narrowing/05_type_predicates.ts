// Single-line comment example

/*
 Multi-line comment example
 This file explains type predicates and how they allow developers
 to define custom narrowing logic in TypeScript.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, instanceof or explicit checks are used

// boolean isString(Object value) {
//     return value instanceof String;
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript has no concept of type predicates

// function isString(value) {
//   return typeof value === "string";
// }

// --------------------------------------------------
// TypeScript example without type predicate
// --------------------------------------------------

// Union type
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String length:", value.length);
  } else {
    console.log("Number value:", value);
  }
}

// --------------------------------------------------
// TypeScript example with type predicate
// --------------------------------------------------

// Custom type guard using a type predicate
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function printValueWithPredicate(value: string | number) {
  if (isString(value)) {
    // TypeScript knows value is string here
    console.log("String length:", value.length);
  } else {
    // TypeScript knows value is number here
    console.log("Number value:", value);
  }
}

printValueWithPredicate("TypeScript");
printValueWithPredicate(100);

// --------------------------------------------------
// Practical example with objects
// --------------------------------------------------

type Admin = {
  role: "ADMIN";
  permissions: string[];
};

type User = {
  role: "USER";
  username: string;
};

type Person = Admin | User;

// Type predicate for object narrowing
function isAdmin(person: Person): person is Admin {
  return person.role === "ADMIN";
}

function handlePerson(person: Person) {
  if (isAdmin(person)) {
    console.log("Admin permissions:", person.permissions);
  } else {
    console.log("User name:", person.username);
  }
}

handlePerson({ role: "ADMIN", permissions: ["read", "write"] });
handlePerson({ role: "USER", username: "rajesh" });

/*
========================
Key Learning Points
========================
*/

// 1. Type predicates allow custom narrowing logic.
// 2. A type predicate uses the syntax: value is Type.
// 3. TypeScript trusts the return value of predicate functions.
// 4. Predicates enable reusable and readable narrowing.
// 5. They work with primitives and complex object types.
// 6. Type predicates are commonly called type guards.
// 7. This is a professional-level TypeScript feature.

/*
Important TypeScript Behavior:

- Type predicates only affect the compiler, not runtime behavior.
- If the predicate logic is wrong, TypeScript will still trust it.
- Always ensure predicate conditions are accurate.
*/

/*
How to run this file:

1. Compile:
   tsc 04_Narrowing/05_type_predicates.ts

2. Run:
   node 04_Narrowing/05_type_predicates.js
*/

// --------------------------------------------------
// End of file
// --------------------------------------------------
