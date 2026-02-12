export {};

/*
 Error Boundary Pattern for automation frameworks.
*/

// --------------------------------------------------
// Reusable Logger (Simplified)
// --------------------------------------------------

class Logger {
  error(message: string, context?: Record<string, unknown>): void {
    console.error(
      JSON.stringify({
        level: "ERROR",
        message,
        timestamp: new Date().toISOString(),
        context
      })
    );
  }

  info(message: string, context?: Record<string, unknown>): void {
    console.log(
      JSON.stringify({
        level: "INFO",
        message,
        timestamp: new Date().toISOString(),
        context
      })
    );
  }
}

const logger = new Logger();

// --------------------------------------------------
// Custom Framework Error
// --------------------------------------------------

class TestExecutionError extends Error {
  constructor(
    message: string,
    public readonly testName: string
  ) {
    super(message);
    this.name = "TestExecutionError";
  }
}

// --------------------------------------------------
// Error Boundary Wrapper
// --------------------------------------------------

async function runWithErrorBoundary(
  testName: string,
  testFunction: () => Promise<void>
): Promise<void> {
  logger.info("Test started", { testName });

  try {
    await testFunction();
    logger.info("Test passed", { testName });
  } catch (error: unknown) {
    if (error instanceof Error) {
      const wrappedError = new TestExecutionError(
        error.message,
        testName
      );

      logger.error("Test failed", {
        testName,
        errorName: wrappedError.name,
        message: wrappedError.message
      });

      throw wrappedError;
    } else {
      logger.error("Unknown failure", { testName });
      throw error;
    }
  }
}

// --------------------------------------------------
// Example Usage
// --------------------------------------------------

async function sampleTest(): Promise<void> {
  throw new Error("Login button not visible");
}

(async () => {
  try {
    await runWithErrorBoundary("Login Test", sampleTest);
  } catch (error) {
    console.error("Final propagated error:", error);
  }
})();

/*
========================
Architecture Insight
========================

- Test execution is wrapped in a boundary.
- Errors are classified and enriched.
- Logging is centralized.
- Failures are consistent and structured.

========================
Automation Benefit
========================

- Prevents silent crashes.
- Provides consistent failure output.
- Improves CI diagnostics.
- Enables scalable test orchestration.
*/

/* Additional Benefits of the Error Boundary Pattern:
- It promotes better design patterns by encouraging a clear separation of concerns between test logic and error handling.
- It allows for centralized management of test failures, making it easier to implement features like retry logic or failure notifications in the future.
- It enhances the maintainability of the test automation framework by providing a consistent structure for handling errors across all tests.
- It can be extended to include additional context or metadata about the test environment, improving the observability of test failures in CI pipelines.
- It encourages developers to think about error handling as an integral part of test design, leading to more robust and reliable test suites.
*/