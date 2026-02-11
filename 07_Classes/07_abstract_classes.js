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
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    // Concrete method
    Shape.prototype.describe = function () {
        console.log("This is a ".concat(this.name));
    };
    return Shape;
}());
// --------------------------------------------------
// Concrete subclass implementation
// --------------------------------------------------
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this, "Circle") || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this, "Rectangle") || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var circle = new Circle(5);
var rectangle = new Rectangle(4, 6);
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
