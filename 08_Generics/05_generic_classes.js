// Single-line comment example
/*
 Multi-line comment example
 This file explains generic classes in TypeScript.
 Generic classes allow building reusable, type-safe structures.
*/
// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------
// In Java, classes can be generic
// class Box<T> {
//     T value;
//     Box(T value) {
//         this.value = value;
//     }
// }
// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------
// JavaScript classes are flexible but not type-safe
// class Box {
//   constructor(value) {
//     this.value = value;
//   }
// }
// --------------------------------------------------
// TypeScript example: basic generic class
// --------------------------------------------------
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var stringBox = new Box("TypeScript");
var numberBox = new Box(100);
console.log("String box value:", stringBox.getValue());
console.log("Number box value:", numberBox.getValue());
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.getById = function (id) {
        return this.items.find(function (item) { return item.id === id; });
    };
    return Repository;
}());
var userRepo = new Repository();
userRepo.add({ id: 1, name: "Rajesh" });
userRepo.add({ id: 2, name: "Amit" });
console.log("User with ID 1:", userRepo.getById(1));
// userRepo.add({ name: "Invalid" }); // ❌ Compile-time error
/*
========================
Key Learning Points
========================
*/
// 1. Generic classes use type parameters like <T>.
// 2. Type arguments are specified when creating instances.
// 3. Generic classes preserve type safety.
// 4. Constraints can restrict allowed types.
// 5. <T extends Something> limits valid types.
// 6. Generic classes are used in repositories and data structures.
// 7. They reduce duplication while maintaining strong typing.
/*
Important Mental Model:

- Generic classes define reusable blueprints.
- Constraints protect assumptions about T.
- Real-world backends often use this pattern.
*/
/*
How to run this file:

1. Compile:
   tsc 08_Generics/05_generic_classes.ts

2. Run:
   node 08_Generics/05_generic_classes.js
*/
// ----------------------------------
// End of file
// ----------------------------------
