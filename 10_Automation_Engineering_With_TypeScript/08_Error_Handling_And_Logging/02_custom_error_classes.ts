export {};

/*
 Creating structured custom error classes.
*/

// --------------------------------------------------
// Base Framework Error
// --------------------------------------------------

class FrameworkError extends Error {
  public readonly timestamp: Date;

  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    this.timestamp = new Date();
  }
}

// --------------------------------------------------
// Specific Error Types
// --------------------------------------------------

class ValidationError extends FrameworkError {
  constructor(message: string, public readonly field?: string) {
    super(message);
  }
}

class NetworkError extends FrameworkError {
  constructor(message: string, public readonly statusCode?: number) {
    super(message);
  }
}

class TimeoutError extends FrameworkError {
  constructor(message: string, public readonly timeoutMs?: number) {
    super(message);
  }
}

// --------------------------------------------------
// Example Usage
// --------------------------------------------------

async function login(username: string, password: string): Promise<void> {
  if (!username) {
    throw new ValidationError("Username is required", "username");
  }

  if (!password) {
    throw new ValidationError("Password is required", "password");
  }

  // Simulate network issue
  throw new NetworkError("Server unreachable", 503);
}

(async () => {
  try {
    await login("", "");
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Validation failed:", error.message);
      console.error("Field:", error.field);
    } else if (error instanceof NetworkError) {
      console.error("Network issue:", error.statusCode);
    } else if (error instanceof TimeoutError) {
      console.error("Timeout:", error.timeoutMs);
    } else {
      console.error("Unknown error:", error);
    }
  }
})();

/*
========================
Architecture Insight
========================

- Custom errors classify failure types.
- Metadata can be attached to error objects.
- instanceof enables safe error narrowing.
- Base error class ensures consistency.

========================
Automation Benefit
========================

- Clearer failure reporting.
- Better categorization of test issues.
- Easier CI debugging.
- Improved observability in large frameworks.
*/

/*
Additional Benefits of Using Custom Error Classes:

- They provide a clear contract for error handling, making it easier for developers to understand what went wrong and how to fix it.
- They can be extended in the future to include additional properties or methods as needed, without affecting existing error handling logic.
- They promote better design patterns in test automation by encouraging the use of specific error types for different failure scenarios, leading to more maintainable and scalable test suites.
- They can be easily integrated with logging frameworks to provide richer context in logs, improving the overall observability of the test automation framework.
- They allow for more granular control over error handling strategies, such as retry logic or conditional test skipping based on specific error types.
*/

