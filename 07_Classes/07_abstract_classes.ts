// Single-line comment example

/*
 Multi-line comment example
 This file explains abstract classes in TypeScript,
 including abstract methods and enforced implementation.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, abstract classes define incomplete behavior

// abstract class Shape {
//     abstract double getArea();
// }

// class Circle extends Shape {
//     double radius;
//     Circle(double radius) {
//         this.radius = radius;
//     }
//
//     @Override
//     double getArea() {
//         return Math.PI * radius * radius;
//     }
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript does not have built-in abstract classes
// Behavior must be manually enforced

// --------------------------------------------------
// TypeScript example: abstract class
// --------------------------------------------------

abstract class Shape {
  constructor(public name: string) {}

  // Concrete method
  describe(): void {
    console.log(`This is a ${this.name}`);
  }

  // Abstract method (must be implemented by subclasses)
  abstract getArea(): number;
}

// --------------------------------------------------
// Concrete subclass implementation
// --------------------------------------------------

class Circle extends Shape {
  constructor(public radius: number) {
    super("Circle");
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super("Rectangle");
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

circle.describe();
console.log("Circle area:", circle.getArea());

rectangle.describe();
console.log("Rectangle area:", rectangle.getArea());

// const shape = new Shape("Test"); // ❌ Cannot instantiate abstract class

/*
========================
Key Learning Points
========================
*/

// 1. Abstract classes cannot be instantiated.
// 2. Abstract methods must be implemented in subclasses.
// 3. Abstract classes can contain both concrete and abstract methods.
// 4. They define shared structure and required behavior.
// 5. Subclasses must implement all abstract members.
// 6. Abstract classes enforce design contracts.
// 7. Useful for shared base logic with required specialization.

/*
Important Design Insight:

- Use abstract classes when sharing implementation.
- Use interfaces when defining pure contracts.
- Abstract classes support partial implementation.
- Interfaces support multiple inheritance; classes do not.
*/

/*
How to run this file:

1. Compile:
   tsc 07_Classes/07_abstract_classes.ts

2. Run:
   node 07_Classes/07_abstract_classes.js
*/

// ----------------------------------
// End of file
// -------------------------------- 