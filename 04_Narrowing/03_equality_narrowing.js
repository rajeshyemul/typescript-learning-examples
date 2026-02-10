// Single-line comment example
// Function using equality narrowing
function checkRoleTS(role) {
    if (role === "ADMIN") {
        // TypeScript knows role is "ADMIN" here
        console.log("Admin access granted");
    }
    else {
        // TypeScript knows role is "USER" here
        console.log("User access granted");
    }
}
checkRoleTS("ADMIN");
checkRoleTS("USER");
// --------------------------------------------------
// Equality narrowing with null
// --------------------------------------------------
function printLength(value) {
    if (value === null) {
        console.log("No value provided");
    }
    else {
        // TypeScript knows value is string here
        console.log("Length:", value.length);
    }
}
printLength("TypeScript");
printLength(null);
/*
========================
Key Learning Points
========================
*/
// 1. Equality checks are evaluated at runtime.
// 2. TypeScript uses strict equality (===) for narrowing.
// 3. Literal comparisons narrow union types.
// 4. Equality checks work well with string and number literals.
// 5. Checking against null removes null from the type.
// 6. Equality narrowing is commonly used in business logic.
/*
Important Note:

Always prefer strict equality (===) in TypeScript.
Loose equality (==) does not provide reliable narrowing.
*/
/*
How to run this file:

1. Compile:
   tsc 04_Narrowing/03_equality_narrowing.ts

2. Run:
   node 04_Narrowing/03_equality_narrowing.js
*/
// --------------------------------------------------
// End of file
// ---------------------------------------------------  
