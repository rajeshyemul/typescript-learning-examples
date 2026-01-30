// Single-line comment example

/*
 Multi-line comment example
 This file explains the non-null assertion operator (!)
 and why it should be used carefully in TypeScript.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// String name = getUserName();
// if (name != null) {
//     System.out.println(name.length());
// }

// --------------------------------------------------
// JavaScript example
// --------------------------------------------------

// JavaScript allows unsafe access without warnings

function getUserNameJS() {
  return null;
}

// This will crash at runtime
// console.log(getUserNameJS().length);

// --------------------------------------------------
// TypeScript example
// --------------------------------------------------

// Function that may return a string or null
function getUserNameTS(): string | null {
  return Math.random() > 0.5 ? "Rajesh" : null;
}

const tsUserName = getUserNameTS();

// ❌ TypeScript prevents unsafe access
// console.log(tsUserName.length);

// ⚠️ Non-null assertion bypasses the compiler
// console.log(tsUserName!.length); // Runtime crash possible

// ✅ Correct and safe approach
if (tsUserName !== null) {
  console.log("Safe length:", tsUserName.length);
} else {
  console.log("tsUserName is null, skipping access");
}

/*
========================
Key Learning Points
========================
*/

// 1. TypeScript uses control flow analysis to determine types.
// 2. A variable initialized as null and never reassigned is always null.
// 3. Such variables cannot be narrowed and become type 'never'.
// 4. Non-null assertion (!) silences the compiler but adds no safety.
// 5. Proper null checks are the safest solution.
// 6. Dynamic values enable correct type narrowing.
// 7. TypeScript prevents impossible code paths at compile time.

/*
How to run this file:

1. Compile:
   tsc 01_Basics/05_non_null_assertion.ts

2. Run:
   node 01_Basics/05_non_null_assertion.js
*/


/*
================================================
Important TypeScript Behavior (Read Carefully)
================================================

1. TypeScript uses control-flow analysis to understand how values change.
2. If a variable is initialized with `null` and never reassigned,
   TypeScript assumes it will always be `null`.
3. In such cases, a condition like `if (value !== null)` is considered
   impossible and the variable type becomes `never` inside that block.
4. The `never` type means "this code path can never happen".
5. This is why accessing properties (like `.length`) causes a compile-time error.
6. To enable proper narrowing, the value must be truly dynamic
   (for example, returned from a function).
7. This behavior prevents dead code and logical mistakes in real applications.
*/

// Example of a value that TypeScript knows will never change:
// let alwaysNull: string | null = null;
// if (alwaysNull !== null) {
//   // This block is unreachable, so the type becomes `never`
// }


// Example of a dynamic value that can change at runtime:
// function getDynamicValue(): string | null {
//   return Math.random() > 0.5 ? "Hello" : null;
// }
// let dynamicValue = getDynamicValue();
// if (dynamicValue !== null) {
//   // Here, TypeScript knows dynamicValue can be a string
//   console.log(dynamicValue.length); // Safe access
// }    

// Using non-null assertion operator (!) bypasses safety checks:
// console.log(dynamicValue!.length); // Risky if dynamicValue is null

// Always prefer proper null checks over non-null assertions for safety.
