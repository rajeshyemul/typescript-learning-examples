// Single-line comment example

/*
 Multi-line comment example
 This file explains the instanceof operator and how it is used
 to check object types at runtime.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, instanceof is commonly used for type checks

// class Person {
//     String name;
//     Person(String name) {
//         this.name = name;
//     }
// }

// Object user = new Person("Rajesh");

// if (user instanceof Person) {
//     System.out.println(((Person) user).name);
// }


// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// In JavaScript, constructor functions can be used with instanceof

// function PersonJS(name) {
//   this.name = name;
// }

// var userJS = new PersonJS("Rajesh");

// if (userJS instanceof PersonJS) {
//   console.log("JS name:", userJS.name);
// }


// --------------------------------------------------
// TypeScript example
// --------------------------------------------------

// TypeScript combines instanceof with static typing

class PersonTS {
  constructor(public name: string) {}
}

const userTS = new PersonTS("Rajesh");

if (userTS instanceof PersonTS) {
  console.log("TS name:", userTS.name);
}

/*
========================
Key Learning Points
========================
*/

// 1. instanceof checks object types at runtime.
// 2. Java and JavaScript both support instanceof.
// 3. Java requires casting after instanceof checks.
// 4. JavaScript allows direct property access.
// 5. TypeScript uses instanceof for type narrowing.
// 6. After instanceof, TypeScript safely allows access to properties.
// 7. instanceof is commonly used with classes, not primitives.
// 8. In TypeScript files, plain JavaScript constructor functions
//    require additional typing and are usually avoided.
// 9. TypeScript encourages using classes for object creation
//    and instanceof checks.


/*
How to run this file:

1. Compile:
   tsc 01_Basics/07_instanceof_operator.ts

2. Run:
   node 01_Basics/07_instanceof_operator.js
*/
