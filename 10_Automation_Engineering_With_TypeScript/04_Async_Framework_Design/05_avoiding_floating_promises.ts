export {};

/*
 Avoiding floating promises in automation frameworks.
*/

// --------------------------------------------------
// Problem: Floating Promise
// --------------------------------------------------

async function saveData(): Promise<void> {
  console.log("Saving data...");
}

async function process(): Promise<void> {
  saveData(); // ❌ Floating promise (not awaited)
  console.log("Processing complete");
}

process();

/*
 Problem:

 - saveData() runs asynchronously.
 - process() does not wait for it.
 - Errors inside saveData() may be lost.
 - Execution order becomes unpredictable.
*/


// --------------------------------------------------
// Correct Pattern: Always Await
// --------------------------------------------------

async function safeProcess(): Promise<void> {
  await saveData();
  console.log("Processing complete safely");
}

safeProcess();


// --------------------------------------------------
// Hidden Floating Promise Example
// --------------------------------------------------

async function triggerAsyncTask(): Promise<void> {
  throw new Error("Unexpected failure");
}

async function unsafeCaller(): Promise<void> {
  triggerAsyncTask(); // ❌ Error will be unhandled
}

unsafeCaller();

/*
 In Node.js, this may result in:
 - UnhandledPromiseRejectionWarning
 - Silent test instability
*/


// --------------------------------------------------
// Proper Handling
// --------------------------------------------------

async function safeCaller(): Promise<void> {
  try {
    await triggerAsyncTask();
  } catch (error) {
    console.error("Handled error:", error);
  }
}

safeCaller();

/*
========================
Architecture Insight
========================

- Every async call must be awaited or returned.
- Floating promises cause silent instability.
- Errors inside un-awaited async functions may go unnoticed.
- Async discipline must be enforced consistently.
- Explicit Promise<void> return types can help catch mistakes.
- This is essential for reliable test automation.

========================
Automation Benefit
========================

- No hidden background failures.
- Predictable execution order.
- Safer error handling.
- Reduced intermittent CI failures.
- Encourages better design patterns in test automation.
*/
