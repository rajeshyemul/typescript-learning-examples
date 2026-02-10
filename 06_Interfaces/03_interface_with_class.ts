// Single-line comment example

/*
 Multi-line comment example
 This file explains how classes implement interfaces
 and how interfaces enforce contracts at compile time.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, classes implement interfaces

// interface User {
//     String getName();
// }

// class Employee implements User {
//     public String getName() {
//         return "Rajesh";
//     }
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript classes have no enforced contracts

// class User {
//   getName() {
//     return "Rajesh";
//   }
// }

// --------------------------------------------------
// TypeScript example: interface with class
// --------------------------------------------------

// Interface defining a contract
interface User {
  name: string;
  experience: number;
  getDetails(): string;
}

// Class implementing the interface
class Employee implements User {
  name: string;
  experience: number;

  constructor(name: string, experience: number) {
    this.name = name;
    this.experience = experience;
  }

  getDetails(): string {
    return `${this.name} has ${this.experience} years of experience`;
  }
}

const emp = new Employee("Rajesh", 15);
console.log(emp.getDetails());

// --------------------------------------------------
// Compile-time enforcement example
// --------------------------------------------------

// ❌ If any interface member is missing,
// TypeScript will throw a compile-time error

// class InvalidEmployee implements User {
//   name: string;
//   experience: number;
// }

/*
========================
Key Learning Points
========================
*/

// 1. Interfaces define contracts for classes.
// 2. Classes use `implements` to follow an interface.
// 3. All interface members must be implemented.
// 4. Missing members cause compile-time errors.
// 5. Interfaces enforce structure, not behavior.
// 6. Interfaces do not exist at runtime.
// 7. This pattern is widely used in large codebases.

/*
Important TypeScript Behavior:

- Interfaces are checked only at compile time.
- JavaScript does not see interfaces at runtime.
- Interfaces help design predictable, maintainable APIs.
*/

/*
How to run this file:

1. Compile:
   tsc 06_Interfaces/03_interface_with_class.ts

2. Run:
   node 06_Interfaces/03_interface_with_class.js
*/

// ----------------------------------
// End of file
// ----------------------------------   