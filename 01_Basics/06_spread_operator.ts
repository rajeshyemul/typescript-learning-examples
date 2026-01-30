// Single-line comment example

/*
 Multi-line comment example
 This file explains the spread operator (...) and how it is used
 to copy and combine arrays and objects in a safe way.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, collections are copied explicitly

// List<Integer> numbers = List.of(1, 2, 3);
// List<Integer> moreNumbers = new ArrayList<>(numbers);
// moreNumbers.add(4);
// moreNumbers.add(5);

// System.out.println(moreNumbers);

// --------------------------------------------------
// JavaScript example
// --------------------------------------------------

// JavaScript arrays and objects are reference-based

var numbers = [1, 2, 3];

// Assigning creates a reference, not a copy
var numbersRef = numbers;
numbersRef.push(4);

console.log("numbers:", numbers);      // [1, 2, 3, 4]
console.log("numbersRef:", numbersRef);

// --------------------------------------------------
// TypeScript example (Arrays)
// --------------------------------------------------

// Spread operator creates a shallow copy

let tsNumbers: number[] = [1, 2, 3];
let tsMoreNumbers = [...tsNumbers, 4, 5];

console.log("tsNumbers:", tsNumbers);        // [1, 2, 3]
console.log("tsMoreNumbers:", tsMoreNumbers); // [1, 2, 3, 4, 5]

// --------------------------------------------------
// TypeScript example (Objects)
// --------------------------------------------------

let user = {
  name: "Rajesh",
  role: "Test Automation Engineer"
};

// Create a new object instead of mutating the original
let updatedUser = {
  ...user,
  experience: 15
};

console.log("user:", user);
console.log("updatedUser:", updatedUser);

/*
========================
Key Learning Points
========================
*/

// 1. Arrays and objects are reference types in JavaScript.
// 2. Assigning them copies the reference, not the value.
// 3. Mutating a reference affects the original object.
// 4. The spread operator (...) creates a shallow copy.
// 5. Spread is commonly used to keep data immutable.
// 6. Immutability makes code easier to reason about.
// 7. TypeScript works naturally with the spread operator.

/*
How to run this file:

1. Compile:
   tsc 01_Basics/06_spread_operator.ts

2. Run:
   node 01_Basics/06_spread_operator.js
*/
