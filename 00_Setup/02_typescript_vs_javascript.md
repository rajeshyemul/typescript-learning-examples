# TypeScript vs JavaScript

## JavaScript
- Dynamically typed
- Errors appear at runtime
- Flexible but risky in large codebases

```js
let count = 10;
count = "ten"; // allowed

## TypesScript
- Statically typed
- Errors caught during development
- Safer and more predictable

let count: number = 10;
// count = "ten"; // compile-time error
