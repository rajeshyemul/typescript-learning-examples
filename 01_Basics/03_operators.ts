// Single-line comment example

/*
 Multi-line comment example
 This file explains commonly used operators and how
 TypeScript enforces type safety while using them.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, operators work on strongly typed variables

// int a = 10;
// int b = 3;

// System.out.println(a + b);
// System.out.println(a * b);

// boolean isLoggedIn = true;
// boolean isAdmin = false;

// System.out.println(isLoggedIn && isAdmin);

// --------------------------------------------------
// JavaScript example
// --------------------------------------------------

// JavaScript allows operators on dynamically typed variables

var a = 10;      // number
var b = 3;       // number

console.log("a + b:", a + b);
console.log("a * b:", a * b);

// JavaScript allows unexpected behavior
// a = "10";
// console.log(a + b); // "103"

var isLoggedIn = true;
var isAdmin = false;

console.log("isLoggedIn && isAdmin:", isLoggedIn && isAdmin);

// --------------------------------------------------
// TypeScript example
// --------------------------------------------------

// TypeScript enforces type safety with operators

let tsA: number = 10;
let tsB: number = 3;

console.log("tsA + tsB:", tsA + tsB);
console.log("tsA * tsB:", tsA * tsB);

// tsA = "10"; // ❌ Compile-time error

let tsIsLoggedIn: boolean = true;
let tsIsAdmin: boolean = false;

console.log("tsIsLoggedIn && tsIsAdmin:", tsIsLoggedIn && tsIsAdmin);

/*
========================
Key Learning Points
========================
*/

// 1. Operators behave similarly in Java, JavaScript, and TypeScript.
// 2. Java enforces type safety at compile time.
// 3. JavaScript allows type changes, which can lead to unexpected results.
// 4. TypeScript prevents invalid operator usage through static typing.
// 5. Arithmetic operators require number types in TypeScript.
// 6. Logical operators require boolean operands in TypeScript.
// 7. Type safety helps avoid subtle runtime bugs.

/*
How to run this file:

1. Compile:
   tsc 01_Basics/03_operators.ts

2. Run:
   node 01_Basics/03_operators.js
*/
