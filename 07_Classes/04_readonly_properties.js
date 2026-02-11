// Single-line comment example
/*
 Multi-line comment example
 This file explains readonly properties in TypeScript
 and how they prevent modification after initialization.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// In Java, the final keyword prevents reassignment
// class User {
//     final String id;
//
//     User(String id) {
//         this.id = id;
//     }
// }
// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------
// JavaScript does not enforce immutability by default
// class User {
//   constructor(id) {
//     this.id = id;
//   }
// }
// --------------------------------------------------
// TypeScript example: readonly property
// --------------------------------------------------
var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    User.prototype.updateName = function (newName) {
        this.name = newName;
    };
    return User;
}());
var user = new User("U101", "Rajesh");
console.log("User ID:", user.id);
console.log("User Name:", user.name);
// Allowed: modifying non-readonly property
user.updateName("Amit");
console.log("Updated Name:", user.name);
// Not allowed: modifying readonly property
// user.id = "U202"; // ❌ Compile-time error
// --------------------------------------------------
// Readonly with parameter properties
// --------------------------------------------------
var Product = /** @class */ (function () {
    function Product(sku, name) {
        this.sku = sku;
        this.name = name;
    }
    return Product;
}());
var product = new Product("P1001", "Laptop");
console.log("Product SKU:", product.sku);
// product.sku = "P2002"; // ❌ Compile-time error
/*
========================
Key Learning Points
========================
*/
// 1. readonly prevents reassignment after initialization.
// 2. readonly properties must be assigned at declaration or in constructor.
// 3. readonly does not make the object fully immutable.
// 4. readonly is enforced at compile time.
// 5. Useful for IDs, configuration values, and constants.
// 6. readonly works well with parameter properties.
// 7. Encourages safer and more predictable design.
/*
Important Clarification:

- readonly prevents reassignment of the property.
- It does NOT freeze nested objects automatically.
- True immutability requires deeper patterns or libraries.
*/
/*
How to run this file:

1. Compile:
   tsc 07_Classes/04_readonly_properties.ts

2. Run:
   node 07_Classes/04_readonly_properties.js
*/
// --------------------------------------------------
// End of file
// --------------------------------------------------   
