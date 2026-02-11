// Single-line comment example

/*
 Multi-line comment example
 This file explains method overriding and polymorphism
 in TypeScript classes.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, subclasses override methods

// class Animal {
//     void speak() {
//         System.out.println("Animal sound");
//     }
// }

// class Dog extends Animal {
//     @Override
//     void speak() {
//         System.out.println("Bark");
//     }
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript allows method overriding

// class Animal {
//   speak() {
//     console.log("Animal sound");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Bark");
//   }
// }

// --------------------------------------------------
// TypeScript example: method overriding
// --------------------------------------------------

class Animal {
  speak(): void {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak(): void {
    console.log("Bark");
  }
}

class Cat extends Animal {
  speak(): void {
    console.log("Meow");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.speak();
cat.speak();

// --------------------------------------------------
// Polymorphism example
// --------------------------------------------------

// Treating different subclasses as the same base type
function makeAnimalSpeak(animal: Animal): void {
  animal.speak(); // Dynamic dispatch
}

makeAnimalSpeak(new Dog());
makeAnimalSpeak(new Cat());

// Output:
// Bark
// Meow
// Bark
// Meow 

/*
========================
Key Learning Points
========================
*/

// 1. Subclasses can override parent methods.
// 2. Overridden methods must match the same signature.
// 3. Polymorphism allows treating subclasses as the base type.
// 4. The correct method is chosen at runtime.
// 5. This is called dynamic dispatch.
// 6. Polymorphism reduces conditional logic.
// 7. Enables extensible and scalable designs.

// Note: TypeScript's type system is structural, so method overriding is based on method signatures rather than explicit declarations.
// This allows for more flexible code, but it's important to ensure that overridden methods maintain the expected behavior.
// This is a key aspect of polymorphism, where the same method call can result in different behaviors based on the actual object type at runtime.
// This promotes code reuse and makes it easier to extend functionality without modifying existing code, adhering to the Open/Closed Principle in software design.
// This is a fundamental concept in object-oriented programming and is widely used in various design patterns, such as the Strategy pattern, where different algorithms can be swapped at runtime without changing the client code.
// Understanding method overriding and polymorphism is crucial for designing robust and maintainable software systems.

/*
Important Design Insight:

- Avoid using large if/else chains for type checks.
- Prefer polymorphism when behavior differs by type.
- Override only when behavior truly changes.
*/

/*
How to run this file:

1. Compile:
   tsc 07_Classes/06_method_overriding_and_polymorphism.ts

2. Run:
   node 07_Classes/06_method_overriding_and_polymorphism.js
*/

// ----------------------------------
// End of file
// -------------------------------- 
