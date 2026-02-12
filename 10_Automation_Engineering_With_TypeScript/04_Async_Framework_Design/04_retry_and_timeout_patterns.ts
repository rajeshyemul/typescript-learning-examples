export {};

/*
 Designing safe retry and timeout patterns.
*/

// --------------------------------------------------
// Retry Options
// --------------------------------------------------

interface RetryOptions {
  retries?: number;
  delayMs?: number;
  backoffFactor?: number;
}

// --------------------------------------------------
// Generic Retry Utility
// --------------------------------------------------

async function retry<T>(
  operation: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const retries = options.retries ?? 3;
  const delayMs = options.delayMs ?? 500;
  const backoffFactor = options.backoffFactor ?? 1;

  let attempt = 0;
  let currentDelay = delayMs;

  while (attempt < retries) {
    try {
      return await operation();
    } catch (error) {
      attempt++;

      if (attempt >= retries) {
        throw new Error(
          `Operation failed after ${retries} attempts: ${error}`
        );
      }

      await delay(currentDelay);
      currentDelay *= backoffFactor;
    }
  }

  throw new Error("Unexpected retry failure");
}

// --------------------------------------------------
// Helper Delay
// --------------------------------------------------

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// --------------------------------------------------
// Example Usage
// --------------------------------------------------

let unstableCounter = 0;

async function unstableOperation(): Promise<string> {
  unstableCounter++;

  if (unstableCounter < 3) {
    throw new Error("Temporary failure");
  }

  return "Success!";
}

(async () => {
  try {
    const result = await retry(unstableOperation, {
      retries: 5,
      delayMs: 500,
      backoffFactor: 2
    });

    console.log("Result:", result);
  } catch (error) {
    console.error("Final failure:", error);
  }
})();

/*
========================
Architecture Insight
========================

- Retry logic must be centralized, not duplicated.
- Backoff strategy prevents aggressive retry loops.
- Retries must have a strict upper bound.
- Errors should propagate clearly after max attempts.

========================
Automation Benefit
========================

- Reduced flakiness for unstable UI/network operations.
- Controlled handling of transient failures.
- Cleaner test code (retry handled at utility level).
- Predictable timeout behavior.
*/
