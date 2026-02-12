export {};

/*
 Typed error handling in strict TypeScript.
*/

// --------------------------------------------------
// Example Function
// --------------------------------------------------

function riskyOperation(): void {
  throw new Error("Unexpected failure");
}

// --------------------------------------------------
// Unsafe Handling (Avoid This)
// --------------------------------------------------

try {
  riskyOperation();
} catch (error: any) {
  // ❌ Avoid using 'any'
  console.error("Unsafe message:", error.message);
}

/*
 Problem:
 - 'any' disables type safety.
 - If error is not an Error instance, this may break.
*/


// --------------------------------------------------
// Safe Handling Using unknown
// --------------------------------------------------

try {
  riskyOperation();
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error("Safe message:", error.message);
  } else {
    console.error("Non-standard error:", error);
  }
}


// --------------------------------------------------
// Type Guard Example
// --------------------------------------------------

class CustomError extends Error {
  constructor(public readonly code: number, message: string) {
    super(message);
  }
}

function isCustomError(error: unknown): error is CustomError {
  return error instanceof CustomError;
}

try {
  throw new CustomError(500, "Internal failure");
} catch (error: unknown) {
  if (isCustomError(error)) {
    console.error("Custom error code:", error.code);
  } else if (error instanceof Error) {
    console.error("Standard error:", error.message);
  } else {
    console.error("Unknown type:", error);
  }
}

/*
========================
Architecture Insight
========================

- Errors should be treated as unknown.
- Narrow errors safely using instanceof.
- Avoid 'any' in catch blocks.
- Use custom type guards when needed.

========================
Automation Benefit
========================

- Safer error handling in strict mode.
- Prevents runtime crashes from incorrect assumptions.
- Improves reliability in CI pipelines.
- Encourages disciplined defensive coding.
*/

/* Additional Benefits of Typed Error Handling:
- It promotes better design patterns by encouraging developers to define specific error types for different failure scenarios.
- It allows for more granular error handling, enabling tests to react differently based on the type of error encountered.
- It improves the overall robustness of the test automation framework by ensuring that all errors are handled in a predictable and type-safe manner.
- It enhances the developer experience by providing better autocomplete and documentation for error properties in IDEs.
- It can be integrated with logging frameworks to provide richer context in logs, improving the observability of test failures.
- It allows for easier debugging and maintenance of test code by providing clearer error classifications and handling strategies.
*/