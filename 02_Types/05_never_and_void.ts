// Single-line comment example

/*
 Multi-line comment example
 This file explains the difference between `void` and `never`
 in TypeScript and when each one should be used.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, methods that return nothing use void

// void logMessage(String message) {
//     System.out.println(message);
// }

// Methods that never return usually throw exceptions

// void throwError() {
//     throw new RuntimeException("Something went wrong");
// }

// --------------------------------------------------
// JavaScript example
// --------------------------------------------------

// JavaScript does not enforce return types

// Function that returns nothing Commented as we are storing this file with .ts extension

/*function logMessageJS(message) {
  console.log(message);
  // returns undefined implicitly
}*/

function throwErrorJS() {
  throw new Error("Something went wrong");
}

// --------------------------------------------------
// TypeScript example: void
// --------------------------------------------------

// `void` represents the absence of a return value

function logMessageTS(message: string): void {
  console.log(message);
}

logMessageTS("Hello TypeScript");

// --------------------------------------------------
// TypeScript example: never
// --------------------------------------------------

// `never` represents a function that never completes normally

function throwErrorTS(message: string): never {
  throw new Error(message);
}

// Uncommenting the line below will terminate the program
// throwErrorTS("Fatal error occurred");

/*
========================
Key Learning Points
========================
*/

// 1. `void` means a function does not return a value.
// 2. Functions with `void` may still return `undefined` implicitly.
// 3. `never` means a function never completes successfully.
// 4. Functions that always throw errors return `never`.
// 5. `never` is used to represent impossible code paths.
// 6. `never` is more specific than `void`.
// 7. TypeScript uses `never` for exhaustiveness checking.

/*
Important TypeScript Behavior (Read Carefully):

- Use `void` when a function performs an action but does not return data.
- Use `never` when a function cannot reach the end of execution.
- `never` tells TypeScript that certain code paths are impossible.
- This helps TypeScript catch logical errors at compile time.
*/

/*
How to run this file:

1. Compile:
   tsc 02_Types/05_never_and_void.ts

2. Run:
   node 02_Types/05_never_and_void.js
*/
// --------------------------------------------------
// End of file
// --------------------------------------------------   