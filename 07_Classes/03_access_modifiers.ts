// Single-line comment example

/*
 Multi-line comment example
 This file explains access modifiers in TypeScript:
 public, private, and protected.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, access modifiers control visibility

// class User {
//     public String name;
//     private int salary;
//     protected int experience;
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript does not enforce access modifiers

// class User {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary; // nothing prevents external access
//   }
// }

// --------------------------------------------------
// TypeScript example: public (default)
// --------------------------------------------------

class UserPublic {
  public name: string; // explicit public
  experience: number;  // public by default

  constructor(name: string, experience: number) {
    this.name = name;
    this.experience = experience;
  }
}

const user1 = new UserPublic("Rajesh", 15);
console.log("Public name:", user1.name); // Accessible

// --------------------------------------------------
// TypeScript example: private
// --------------------------------------------------

class UserPrivate {
  public name: string;
  private salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getSalary(): number {
    return this.salary;
  }
}

const user2 = new UserPrivate("Amit", 100000);

console.log("Name:", user2.name);
// console.log(user2.salary); // ❌ Compile-time error

console.log("Salary (via method):", user2.getSalary());

// --------------------------------------------------
// TypeScript example: protected
// --------------------------------------------------

class BaseEmployee {
  protected department: string;

  constructor(department: string) {
    this.department = department;
  }
}

class Manager extends BaseEmployee {
  getDepartment(): string {
    return this.department; // Accessible inside subclass
  }
}

const manager = new Manager("Engineering");
console.log("Department:", manager.getDepartment());

// console.log(manager.department); // ❌ Compile-time error

/*
========================
Key Learning Points
========================
*/

// 1. public is the default access level.
// 2. private restricts access to inside the class only.
// 3. protected allows access in subclasses.
// 4. Access modifiers are enforced at compile time.
// 5. JavaScript does not enforce TypeScript modifiers at runtime.
// 6. Encapsulation protects internal data.
// 7. Access control improves maintainability in large systems.

/*
Important Design Insight:

- Make properties private by default.
- Expose only what is necessary.
- Use protected when subclasses need controlled access.
*/

/*
How to run this file:

1. Compile:
   tsc 07_Classes/03_access_modifiers.ts

2. Run:
   node 07_Classes/03_access_modifiers.js
*/

// --------------------------------------------------
// End of file
// --------------------------------------------------   