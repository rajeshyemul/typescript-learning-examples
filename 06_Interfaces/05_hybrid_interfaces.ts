// Single-line comment example

/*
 Multi-line comment example
 This file explains hybrid interfaces in TypeScript.
 A hybrid interface describes an object that is both
 callable like a function and has properties.
*/

// --------------------------------------------------
// Java example (commented for reference)
// --------------------------------------------------

// Java does not support callable objects directly
// Behavior and data are usually separated

// interface Logger {
//     void log(String message);
// }

// --------------------------------------------------
// JavaScript example (commented for reference)
// --------------------------------------------------

// In JavaScript, functions are objects

// function logger(message) {
//   console.log(message);
// }
// logger.level = "INFO";

// --------------------------------------------------
// TypeScript example: hybrid interface
// --------------------------------------------------

// Hybrid interface definition
interface Logger {
  (message: string): void;   // callable signature
  level: string;             // property
}

// Function implementation
function createLogger(level: string): Logger {
  const logger = ((message: string) => {
    console.log(`[${level}] ${message}`);
  }) as Logger;

  logger.level = level;
  return logger;
}

const infoLogger = createLogger("INFO");
infoLogger("Application started");
console.log("Logger level:", infoLogger.level);

const errorLogger = createLogger("ERROR");
errorLogger("Something went wrong");
console.log("Logger level:", errorLogger.level);

/*
========================
Key Learning Points
========================
*/

// 1. Hybrid interfaces describe callable objects with properties.
// 2. Functions in JavaScript are also objects.
// 3. TypeScript allows interfaces to define call signatures.
// 4. Hybrid interfaces are common in libraries and frameworks.
// 5. The callable signature defines how the object is invoked.
// 6. Properties add state or metadata to the function.
// 7. This pattern is used in logging, configuration, and APIs.

/*
Important TypeScript Insight:

- Hybrid interfaces exist only at compile time.
- At runtime, this is just a function with properties.
- TypeScript ensures both the call signature and properties exist.
*/

/*
How to run this file:

1. Compile:
   tsc 06_Interfaces/05_hybrid_interfaces.ts

2. Run:
   node 06_Interfaces/05_hybrid_interfaces.js
*/

// ----------------------------------
// End of file
// ----------------------------------   