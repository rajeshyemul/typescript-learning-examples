// Single-line comment example
function getUserPropertyUnsafe(user, key) {
    // ❌ TypeScript cannot verify this access
    return user[key];
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
// 3. Using plain strings for object keys is unsafe.
// 4. `keyof` produces a union of valid property names.
// 5. `keyof` enables type-safe dynamic property access.
// 6. Invalid keys are caught at compile time.
// 7. `keyof` is essential for safe refactoring.
/*
Important TypeScript Behavior:

- `keyof` reflects the structure of a type.
- If the type changes, `keyof` updates automatically.
- This prevents bugs caused by renamed or removed properties.
*/
/*
How to run this file:

1. Compile:
   tsc 03_Combining_Types/03_keyof_operator.ts

2. Run:
   node 03_Combining_Types/03_keyof_operator.js
*/
// --------------------------------------------------
// End of file
// --------------------------------------------------   
