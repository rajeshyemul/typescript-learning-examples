// Single-line comment example
var emp = {
    name: "Rajesh",
    experience: 15,
    department: "Quality Engineering"
};
console.log("Employee:", emp);
var profile = {
    name: "Rajesh",
    experience: 15,
    department: "Quality Engineering",
    email: "rajesh@example.com",
    isActive: true
};
console.log("Employee profile:", profile);
/*
========================
Key Learning Points
========================
*/
// 1. Interfaces can extend other interfaces.
// 2. Extended interfaces inherit all properties.
// 3. Interfaces can extend multiple interfaces.
// 4. This promotes reuse and consistency.
// 5. Interface extension models real-world relationships.
// 6. Missing inherited properties cause compile-time errors.
// 7. This pattern scales well in large applications.
/*
Important Design Insight:

- Use small, focused interfaces.
- Compose them using `extends`.
- Avoid large, monolithic interfaces.
*/
/*
How to run this file:

1. Compile:
   tsc 06_Interfaces/04_extending_interfaces.ts

2. Run:
   node 06_Interfaces/04_extending_interfaces.js
*/
// ----------------------------------
// End of file
// ----------------------------------
