export {};

/*
 Generic wait utility for reusable async operations.
*/

// --------------------------------------------------
// Generic Wait Function
// --------------------------------------------------

async function waitUntil<T>(
  operation: () => Promise<T>,
  validate: (result: T) => boolean,
  timeoutMs: number = 5000,
  intervalMs: number = 300
): Promise<T> {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    const result = await operation();

    if (validate(result)) {
      return result;
    }

    await delay(intervalMs);
  }

  throw new Error("waitUntil: condition not satisfied");
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// --------------------------------------------------
// Example Usage
// --------------------------------------------------

let counter = 0;

async function fetchValue(): Promise<number> {
  counter++;
  return counter;
}

(async () => {
  const value = await waitUntil(
    fetchValue,
    (result) => result >= 3
  );

  console.log("Validated value:", value);
})();

/*
========================
Architecture Insight
========================

- Generic waitUntil<T> works with any return type.
- Validation logic is separated from execution logic.
- Timeout and interval are configurable.
- Reusable across UI and API layers.

========================
Automation Benefit
========================

- Reduced duplicated wait logic.
- Strong type enforcement.
- Cleaner test implementation.
- Consistent polling behavior.
*/
