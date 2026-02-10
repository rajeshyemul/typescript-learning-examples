// Single-line comment example
// Function implementation
function createLogger(level) {
    var logger = (function (message) {
        console.log("[".concat(level, "] ").concat(message));
    });
    logger.level = level;
    return logger;
}
var infoLogger = createLogger("INFO");
infoLogger("Application started");
console.log("Logger level:", infoLogger.level);
var errorLogger = createLogger("ERROR");
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
