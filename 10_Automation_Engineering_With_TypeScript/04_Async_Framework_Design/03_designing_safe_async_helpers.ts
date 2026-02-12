export {};

/*
 Designing safe, reusable async helpers.
*/

// --------------------------------------------------
// Problem: Unsafe Wait Helper
// --------------------------------------------------

async function weakWait(condition: () => boolean): Promise<void> {
  while (!condition()) {
    // tight loop ❌
  }
}

/*
 Problems:

 - Blocks event loop
 - No timeout
 - No delay between checks
 - Can freeze execution
*/


// --------------------------------------------------
// Strong Async Wait Helper
// --------------------------------------------------

interface WaitOptions {
  timeoutMs?: number;
  intervalMs?: number;
}

async function waitForCondition(
  condition: () => Promise<boolean>,
  options: WaitOptions = {}
): Promise<void> {
  const timeout = options.timeoutMs ?? 5000;
  const interval = options.intervalMs ?? 200;

  const start = Date.now();

  while (Date.now() - start < timeout) {
    if (await condition()) {
      return;
    }

    await delay(interval);
  }

  throw new Error("Condition not met within timeout");
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// --------------------------------------------------
// Example Usage
// --------------------------------------------------

let counter = 0;

async function exampleCondition(): Promise<boolean> {
  counter++;
  return counter > 3;
}

(async () => {
  try {
    await waitForCondition(exampleCondition, {
      timeoutMs: 3000,
      intervalMs: 500
    });

    console.log("Condition satisfied");
  } catch (error) {
    console.error("Wait failed:", error);
  }
})();

/*
========================
Architecture Insight
========================

- Async helpers must never block the event loop.
- Timeouts must always be configurable.
- Polling intervals must be controlled.
- Errors should be explicit and informative.

========================
Automation Benefit
========================

- Reduced flaky waits.
- Predictable retry behavior.
- Clear failure diagnostics.
- Reusable framework-level utility.
*/

