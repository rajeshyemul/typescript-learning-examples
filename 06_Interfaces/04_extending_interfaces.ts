// Single-line comment example

/*
 Multi-line comment example
 This file explains how interfaces can extend other interfaces
 to create larger, reusable contracts.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, interfaces can extend other interfaces

// interface Person {
//     String name;
// }

// interface Employee extends Person {
//     int experience;
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript has no native interface inheritance

// const employee = {
//   name: "Rajesh",
//   experience: 15
// };

// --------------------------------------------------
// TypeScript example: extending interfaces
// --------------------------------------------------

// Base interface
interface Person {
  name: string;
}

// Extended interface
interface Employee extends Person {
  experience: number;
  department: string;
}

const emp: Employee = {
  name: "Rajesh",
  experience: 15,
  department: "Quality Engineering"
};

console.log("Employee:", emp);

// --------------------------------------------------
// Extending multiple interfaces
// --------------------------------------------------

// Another base interface
interface Contact {
  email: string;
}

// Interface extending multiple interfaces
interface EmployeeProfile extends Employee, Contact {
  isActive: boolean;
}

const profile: EmployeeProfile = {
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