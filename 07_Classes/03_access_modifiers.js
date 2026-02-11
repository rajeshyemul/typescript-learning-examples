// Single-line comment example
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var UserPublic = /** @class */ (function () {
    function UserPublic(name, experience) {
        this.name = name;
        this.experience = experience;
    }
    return UserPublic;
}());
var user1 = new UserPublic("Rajesh", 15);
console.log("Public name:", user1.name); // Accessible
// --------------------------------------------------
// TypeScript example: private
// --------------------------------------------------
var UserPrivate = /** @class */ (function () {
    function UserPrivate(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    UserPrivate.prototype.getSalary = function () {
        return this.salary;
    };
    return UserPrivate;
}());
var user2 = new UserPrivate("Amit", 100000);
console.log("Name:", user2.name);
// console.log(user2.salary); // ❌ Compile-time error
console.log("Salary (via method):", user2.getSalary());
// --------------------------------------------------
// TypeScript example: protected
// --------------------------------------------------
var BaseEmployee = /** @class */ (function () {
    function BaseEmployee(department) {
        this.department = department;
    }
    return BaseEmployee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getDepartment = function () {
        return this.department; // Accessible inside subclass
    };
    return Manager;
}(BaseEmployee));
var manager = new Manager("Engineering");
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
