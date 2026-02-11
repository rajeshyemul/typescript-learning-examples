export {};

// Single-line comment example

/*
 Multi-line comment example
 This file explains generic object types in TypeScript.
 It shows how generics work with object structures.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// In Java, generic classes can hold typed objects

// class Wrapper<T> {
//     T value;
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// JavaScript objects are dynamic and flexible

// const user = {
//   name: "Rajesh",
//   age: 30
// };

// --------------------------------------------------
// TypeScript example: generic object wrapper
// --------------------------------------------------

type Wrapper<T> = {
  data: T;
  timestamp: Date;
};

const wrappedUser: Wrapper<{ name: string; age: number }> = {
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

function updateProperty<T, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): T {
  return {
    ...obj,
    [key]: value
  };
}

const user = {
  name: "Rajesh",
  age: 30
};

const updatedUser = updateProperty(user, "age", 35);

console.log("Updated user:", updatedUser);

// updateProperty(user, "age", "thirty"); // ❌ Compile-time error
// updateProperty(user, "salary", 50000); // ❌ Compile-time error

// --------------------------------------------------
// Generic object transformer
// --------------------------------------------------

function mapObjectValues<T, U>(
  obj: T,
  transform: (value: T[keyof T]) => U
): { [K in keyof T]: U } {
  const result = {} as { [K in keyof T]: U };

  for (const key in obj) {
    result[key] = transform(obj[key]);
  }

  return result;
}

const scores = {
  math: 90,
  science: 85,
  english: 88
};

const stringScores = mapObjectValues(scores, value => `Score: ${value}`);

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
