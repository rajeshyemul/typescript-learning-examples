// Single-line comment example

/*
 Multi-line comment example
 This file explains the basics of classes in TypeScript
 and how they define structure and behavior.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, classes define structure and behavior

// class User {
//     String name;
//     void greet() {
//         System.out.println("Hello " + name);
//     }
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript classes do not enforce types

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log("Hello " + this.name);
//   }
// }

// --------------------------------------------------
// TypeScript example
// --------------------------------------------------

class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log("Hello " + this.name);
  }
}

const user = new User("Rajesh");
user.greet();

/*
========================
Key Learning Points
========================
*/

// 1. Classes define structure and behavior.
// 2. TypeScript requires explicit property types.
// 3. Constructors initialize class properties.
// 4. Methods can have return types.
// 5. TypeScript checks class usage at compile time.
// 6. Classes are syntactic sugar over JavaScript prototypes.
// 7. Type safety improves reliability in large systems.

/*
How to run this file:

1. Compile:
   tsc 07_Classes/01_class_basics.ts

2. Run:
   node 07_Classes/01_class_basics.js
*/

// --------------------------------------------------
// End of file
// --------------------------------------------------