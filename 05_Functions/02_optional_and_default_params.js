// Single-line comment example
/*
 Multi-line comment example
 This file explains optional parameters and default parameters
 in TypeScript functions.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// In Java, method overloading is often used
// void greet(String name) {
//     System.out.println("Hello " + name);
// }
// void greet(String name, String title) {
//     System.out.println("Hello " + title + " " + name);
// }
// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------
// JavaScript allows missing arguments
// function greet(name, title) {
//   console.log("Hello", title, name);
// }
// greet("Rajesh"); // title is undefined
// --------------------------------------------------
// TypeScript example: optional parameters
// --------------------------------------------------
// Optional parameter marked with ?
function greetTS(name, title) {
    if (title) {
        console.log("Hello ".concat(title, " ").concat(name));
    }
    else {
        console.log("Hello ".concat(name));
    }
}
greetTS("Rajesh");
greetTS("Rajesh", "Mr.");
// greetTS(); // ❌ Compile-time error
// --------------------------------------------------
// TypeScript example: default parameters
// --------------------------------------------------
// Default value used when argument is not provided
function greetWithDefault(name, title) {
    if (title === void 0) { title = "Mr."; }
    console.log("Hello ".concat(title, " ").concat(name));
}
greetWithDefault("Rajesh");
greetWithDefault("Rajesh", "Dr.");
/*
========================
Key Learning Points
========================
*/
// 1. Optional parameters are marked using `?`.
// 2. Optional parameters may be undefined.
// 3. Optional parameters must come after required ones.
// 4. Default parameters provide fallback values.
// 5. Default parameters remove the need for manual checks.
// 6. TypeScript enforces correct argument counts.
// 7. Prefer default parameters when a sensible default exists.
/*
How to run this file:

1. Compile:
   tsc 05_Functions/02_optional_and_default_params.ts

2. Run:
   node 05_Functions/02_optional_and_default_params.js
*/
// --------------------------------------------------
// End of file
// --------------------------------------------------
