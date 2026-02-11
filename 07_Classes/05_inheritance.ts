// Single-line comment example

/*
 Multi-line comment example
 This file explains inheritance in TypeScript,
 including extending classes and using super().
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, classes extend other classes

// class Person {
//     String name;
// }

// class Employee extends Person {
//     int experience;
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript supports class inheritance

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Employee extends Person {
//   constructor(name, experience) {
//     super(name);
//     this.experience = experience;
//   }
// }

// --------------------------------------------------
// TypeScript example: inheritance
// --------------------------------------------------

class Person {
  constructor(public name: string) {}

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name: string, public experience: number) {
    super(name); // Must call super before using 'this'
  }

  getDetails(): string {
    return `${this.name} has ${this.experience} years of experience`;
  }
}

const emp = new Employee("Rajesh", 15);

emp.greet();
console.log(emp.getDetails());

// --------------------------------------------------
// Protected members with inheritance
// --------------------------------------------------

class BaseAccount {
  protected balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }
}

class SavingsAccount extends BaseAccount {
  deposit(amount: number): void {
    this.balance += amount; // Accessible in subclass
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new SavingsAccount(1000);
account.deposit(500);
console.log("Account balance:", account.getBalance());

// console.log(account.balance); // ❌ Compile-time error

/*
========================
Key Learning Points
========================
*/

// 1. Classes extend other classes using `extends`.
// 2. Subclasses inherit properties and methods.
// 3. The `super()` call initializes the base class.
// 4. super() must be called before accessing `this`.
// 5. Protected members are accessible in subclasses.
// 6. Inheritance promotes code reuse.
// 7. Use inheritance carefully to avoid tight coupling.

/*
Important Design Insight:

- Inheritance models "is-a" relationships.
- Prefer composition when inheritance becomes complex.
- Avoid deep inheritance hierarchies.
*/

/*
How to run this file:

1. Compile:
   tsc 07_Classes/05_inheritance.ts

2. Run:
   node 07_Classes/05_inheritance.js
*/

// --------------------------------------------------
// End of file
// --------------------------------------------------   