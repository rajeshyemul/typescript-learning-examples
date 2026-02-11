// Single-line comment example
var stringBox = {
    value: "TypeScript"
};
var numberBox = {
    value: 100
};
console.log("String box:", stringBox.value);
console.log("Number box:", numberBox.value);
var userPair = {
    first: "Age",
    second: 30
};
console.log("Pair:", userPair);
var userResponse = {
    success: true,
    data: {
        id: 1,
        name: "Rajesh"
    }
};
console.log("User response:", userResponse);
/*
========================
Key Learning Points
========================
*/
// 1. Generic interfaces use type parameters like <T>.
// 2. They allow reusable type-safe contracts.
// 3. Type arguments are specified when using the interface.
// 4. Multiple type parameters are supported.
// 5. Generic interfaces are common in API modeling.
// 6. They preserve type safety across different data shapes.
// 7. This pattern is heavily used in real applications.
/*
Important Mental Model:

- Generic interfaces define relationships between types.
- They are blueprints that adapt to different data shapes.
- Real frameworks use generic interfaces extensively.
*/
/*
How to run this file:

1. Compile:
   tsc 08_Generics/04_generic_interfaces.ts

2. Run:
   node 08_Generics/04_generic_interfaces.js
*/
// ----------------------------------
// End of file
// ----------------------------------   
