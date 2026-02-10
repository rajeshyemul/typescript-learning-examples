// Single-line comment example
/*
 Multi-line comment example
 This file explains instanceof narrowing and how TypeScript
 refines types when working with class-based objects.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// In Java, instanceof is commonly used for type checks
// class Admin {}
// class User {}
// Object person = new Admin();
// if (person instanceof Admin) {
//     System.out.println("Admin detected");
// }
// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------
// JavaScript uses instanceof for runtime checks
// function Admin() {}
// function User() {}
// var person = new Admin();
// if (person instanceof Admin) {
//   console.log("Admin detected");
// }
// --------------------------------------------------
// TypeScript example
// --------------------------------------------------
// Classes used for narrowing
var Admin = /** @class */ (function () {
    function Admin() {
        this.permissions = ["read", "write"];
    }
    return Admin;
}());
var User = /** @class */ (function () {
    function User() {
        this.username = "rajesh";
    }
    return User;
}());
// Union of class types
function handlePerson(person) {
    if (person instanceof Admin) {
        // TypeScript knows person is Admin here
        console.log("Admin permissions:", person.permissions);
    }
    else {
        // TypeScript knows person is User here
        console.log("User name:", person.username);
    }
}
handlePerson(new Admin());
handlePerson(new User());
/*
========================
Key Learning Points
========================
*/
// 1. instanceof checks object types at runtime.
// 2. TypeScript uses instanceof for type narrowing.
// 3. instanceof works only with class-based objects.
// 4. After instanceof, properties are safely accessible.
// 5. instanceof is not used for primitive types.
// 6. This narrowing technique is common in OOP-style code.
/*
How to run this file:

1. Compile:
   tsc 04_Narrowing/02_instanceof_narrowing.ts

2. Run:
   node 04_Narrowing/02_instanceof_narrowing.js
*/
// --------------------------------------------------
// End of file
// ---------------------------------------------------
