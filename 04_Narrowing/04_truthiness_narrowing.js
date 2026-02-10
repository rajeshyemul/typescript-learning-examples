// Single-line comment example
/*
 Multi-line comment example
 This file explains truthiness narrowing and how TypeScript
 uses truthy and falsy checks to refine types.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// In Java, explicit null and boolean checks are required
// String value = null;
// if (value != null && !value.isEmpty()) {
//     System.out.println(value.length());
// }
// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------
// JavaScript uses truthy and falsy values
// function printValue(value) {
//   if (value) {
//     console.log(value);
//   }
// }
// --------------------------------------------------
// TypeScript example
// --------------------------------------------------
// Union with possible falsy values
function printValueTS(value) {
    if (value) {
        // TypeScript narrows value to string here
        console.log("Value:", value);
    }
    else {
        console.log("Value is null or undefined");
    }
}
printValueTS("TypeScript");
printValueTS(null);
printValueTS(undefined);
// --------------------------------------------------
// Truthiness pitfalls
// --------------------------------------------------
// Falsy values that are still valid data
function printNumberTS(value) {
    if (value) {
        // ❌ This excludes 0 unintentionally
        console.log("Number:", value);
    }
    else {
        console.log("No number provided");
    }
}
printNumberTS(5);
printNumberTS(0);
printNumberTS(null);
// --------------------------------------------------
// Safer alternative
// --------------------------------------------------
function printNumberSafe(value) {
    if (value !== null) {
        console.log("Safe number:", value);
    }
    else {
        console.log("No number provided");
    }
}
printNumberSafe(0);
printNumberSafe(null);
/*
========================
Key Learning Points
========================
*/
// 1. Truthiness checks are evaluated at runtime.
// 2. TypeScript narrows types based on truthy and falsy values.
// 3. `null` and `undefined` are falsy values.
// 4. Other valid values like 0 and "" are also falsy.
// 5. Truthiness checks can accidentally exclude valid data.
// 6. Prefer explicit checks when falsy values are meaningful.
// 7. Truthiness narrowing should be used with caution.
/*
Important TypeScript Behavior:

- Truthiness narrowing removes all falsy values.
- This includes 0, empty strings, false, null, and undefined.
- Use explicit comparisons when these values are valid.
*/
/*
How to run this file:

1. Compile:
   tsc 04_Narrowing/04_truthiness_narrowing.ts

2. Run:
   node 04_Narrowing/04_truthiness_narrowing.js
*/
// --------------------------------------------------
// End of file
// --------------------------------------------------
