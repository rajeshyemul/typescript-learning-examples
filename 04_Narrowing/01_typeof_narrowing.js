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
function printValueTS(value) {
    if (typeof value === "string") {
        // TypeScript knows value is string here
        console.log("String length:", value.length);
    }
    else {
        // TypeScript knows value is number here
        console.log("Number value:", value);
    }
}
printValueTS("TypeScript");
printValueTS(42);
// Unsafe function using plain string keys
function getUserPropertyUnsafe(user, key) {
    return user[key]; // Bypasses type checking
}
var user = {
    name: "Rajesh",
    experience: 15
};
console.log("Unsafe access:", getUserPropertyUnsafe(user, "name"));
// UserKeys is: "name" | "experience"
function getUserPropertySafe(user, key) {
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
