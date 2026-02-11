// Single-line comment example

/*
 Multi-line comment example
 This file explains constructors in TypeScript and
 the concept of parameter properties, which reduce boilerplate.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, properties are declared and assigned in constructor

// class User {
//     String name;
//     int experience;
//
//     User(String name, int experience) {
//         this.name = name;
//         this.experience = experience;
//     }
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript constructor assigns properties manually

// class User {
//   constructor(name, experience) {
//     this.name = name;
//     this.experience = experience;
//   }
// }

// --------------------------------------------------
// TypeScript example: traditional constructor
// --------------------------------------------------

class UserTraditional {
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

const user1 = new UserTraditional("Rajesh", 15);
console.log(user1.getDetails());

// --------------------------------------------------
// TypeScript example: parameter properties
// --------------------------------------------------

// TypeScript allows declaring and initializing
// properties directly in the constructor

class UserWithParameterProperties {
  constructor(
    public name: string,
    public experience: number
  ) {}

  getDetails(): string {
    return `${this.name} has ${this.experience} years of experience`;
  }
}

const user2 = new UserWithParameterProperties("Amit", 10);
console.log(user2.getDetails());

/*
========================
Key Learning Points
========================
*/

// 1. Constructors initialize class properties.
// 2. Traditional constructors require property declaration + assignment.
// 3. Parameter properties reduce boilerplate.
// 4. Adding `public`, `private`, or `protected` in constructor
//    automatically creates and assigns properties.
// 5. This is a TypeScript-specific feature.
// 6. It improves readability and reduces duplication.
// 7. Common in real-world TypeScript projects.

/*
Important TypeScript Insight:

- Parameter properties are purely compile-time sugar.
- At runtime, this is just normal JavaScript property assignment.
- Use parameter properties when properties are simple and straightforward.
*/

/*
How to run this file:

1. Compile:
   tsc 07_Classes/02_constructor_and_parameter_properties.ts

2. Run:
   node 07_Classes/02_constructor_and_parameter_properties.js
*/

// --------------------------------------------------
// End of file
// --------------------------------------------------   