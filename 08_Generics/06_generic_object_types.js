"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var wrappedUser = {
    data: {
        name: "Rajesh",
        age: 30
    },
    timestamp: new Date()
};
console.log("Wrapped user:", wrappedUser);
// --------------------------------------------------
// Generic function working with object keys
// --------------------------------------------------
function updateProperty(obj, key, value) {
    var _a;
    return __assign(__assign({}, obj), (_a = {}, _a[key] = value, _a));
}
var user = {
    name: "Rajesh",
    age: 30
};
var updatedUser = updateProperty(user, "age", 35);
console.log("Updated user:", updatedUser);
// updateProperty(user, "age", "thirty"); // ❌ Compile-time error
// updateProperty(user, "salary", 50000); // ❌ Compile-time error
// --------------------------------------------------
// Generic object transformer
// --------------------------------------------------
function mapObjectValues(obj, transform) {
    var result = {};
    for (var key in obj) {
        result[key] = transform(obj[key]);
    }
    return result;
}
var scores = {
    math: 90,
    science: 85,
    english: 88
};
var stringScores = mapObjectValues(scores, function (value) { return "Score: ".concat(value); });
console.log("Transformed scores:", stringScores);
/*
========================
Key Learning Points
========================
*/
// 1. Generics work naturally with object types.
// 2. Wrapper<T> can hold any object type safely.
// 3. keyof allows restricting property keys.
// 4. T[K] represents the type of a specific property.
// 5. Spread operator works well with generic objects.
// 6. Generic object transformations preserve structure.
// 7. This prepares you for mapped types and utility types.
/*
Important Mental Model:

- Generics describe relationships between object shapes.
- keyof connects keys with their values.
- T[K] connects a property to its correct type.
- Mapped types transform object structures safely.
*/
/*
How to run this file:

1. Compile:
   tsc 08_Generics/06_generic_object_types.ts

2. Run:
   node 08_Generics/06_generic_object_types.js
*/
// ----------------------------------
// End of file
// ----------------------------------
