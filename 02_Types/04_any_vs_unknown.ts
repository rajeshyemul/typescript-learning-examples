// Single-line comment example

/*
 Multi-line comment example
 This file explains the difference between `any` and `unknown`
 and why `unknown` is safer in TypeScript.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, variables always have a specific type

// Object value = "TypeScript";
// System.out.println(value.length()); // ❌ Compile-time error
// Java forces explicit casting before access

// --------------------------------------------------
// JavaScript example
// --------------------------------------------------

// JavaScript allows unrestricted access

var valueJS = "TypeScript";
console.log("JS length:", valueJS.length);

// JavaScript assumes the developer knows the type

// --------------------------------------------------
// TypeScript example: any
// --------------------------------------------------

// `any` disables all type checking

let valueAny: any = "TypeScript";

// TypeScript allows any operation on `any`
console.log("any length:", valueAny.length);

// This can silently cause runtime errors
valueAny = 42;
// console.log(valueAny.length); // Runtime error if executed

// --------------------------------------------------
// TypeScript example: unknown
// --------------------------------------------------

// `unknown` is a safe alternative to `any`

let valueUnknown: unknown = "TypeScript";

// ❌ Direct access is not allowed
// console.log(valueUnknown.length);

// ✅ Safe usage requires type checking
if (typeof valueUnknown === "string") {
  console.log("unknown length:", valueUnknown.length);
}

/*
========================
Key Learning Points
========================
*/

// 1. Java enforces type safety through explicit casting.
// 2. JavaScript allows unrestricted access to values.
// 3. `any` disables TypeScript’s type checking completely.
// 4. `any` should be avoided whenever possible.
// 5. `unknown` enforces type checking before usage.
// 6. `unknown` is safer and preferred over `any`.
// 7. Use `unknown` when the type is not known upfront.

/*
Important Note for Learners:

If you use `any`, TypeScript stops helping you.
If you use `unknown`, TypeScript forces you to be explicit.

Prefer `unknown` in real applications.
*/

/*
How to run this file:

1. Compile:
   tsc 02_Types/04_any_vs_unknown.ts

2. Run:
   node 02_Types/04_any_vs_unknown.js
*/
// --------------------------------------------------
// End of file
// --------------------------------------------------   