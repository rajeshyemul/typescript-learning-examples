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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, experience) {
        var _this = _super.call(this, name) || this; // Must call super before using 'this'
        _this.experience = experience;
        return _this;
    }
    Employee.prototype.getDetails = function () {
        return "".concat(this.name, " has ").concat(this.experience, " years of experience");
    };
    return Employee;
}(Person));
var emp = new Employee("Rajesh", 15);
emp.greet();
console.log(emp.getDetails());
// --------------------------------------------------
// Protected members with inheritance
// --------------------------------------------------
var BaseAccount = /** @class */ (function () {
    function BaseAccount(initialBalance) {
        this.balance = initialBalance;
    }
    return BaseAccount;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        this.balance += amount; // Accessible in subclass
    };
    SavingsAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return SavingsAccount;
}(BaseAccount));
var account = new SavingsAccount(1000);
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
