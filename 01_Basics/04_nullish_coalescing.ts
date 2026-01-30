// Single-line comment example

/*
 Multi-line comment example
 This file explains how TypeScript handles null and undefined
 using the nullish coalescing operator (??).
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, null checks are explicit

// String username = null;
// String displayName;

// if (username != null) {
//     displayName = username;
// } else {
//     displayName = "Guest";
// }

// System.out.println(displayName);

// --------------------------------------------------
// JavaScript example
// --------------------------------------------------

// JavaScript often uses the OR (||) operator for defaults

var username = null;

// Using logical OR
var displayNameWithOr = username || "Guest";

// This can cause unexpected behavior
// If username is an empty string (""),
// || will still return "Guest"

console.log("displayNameWithOr:", displayNameWithOr);

// --------------------------------------------------
// TypeScript example
// --------------------------------------------------

// TypeScript introduces nullish coalescing (??)

let tsUsername: string | null = null;

// Using nullish coalescing operator
let displayNameWithNullish = tsUsername ?? "Guest";

console.log("displayNameWithNullish:", displayNameWithNullish);

// Difference between || and ??
let emptyUsername: string = "";

let usingOr = emptyUsername || "Guest";
let usingNullish = emptyUsername ?? "Guest";

console.log("usingOr:", usingOr);         // "Guest"
console.log("usingNullish:", usingNullish); // ""

/*
========================
Key Learning Points
========================
*/

// 1. Java requires explicit null checks.
// 2. JavaScript commonly uses || to provide default values.
// 3. The || operator treats empty strings, 0, and false as falsy.
// 4. The ?? operator only checks for null or undefined.
// 5. TypeScript encourages safer handling of null and undefined.
// 6. Nullish coalescing prevents accidental overwriting of valid values.
// 7. Prefer ?? over || when null and undefined are the only invalid states.

/*
How to run this file:

1. Compile:
   tsc 01_Basics/04_nullish_coalescing.ts

2. Run:
   node 01_Basics/04_nullish_coalescing.js
*/
