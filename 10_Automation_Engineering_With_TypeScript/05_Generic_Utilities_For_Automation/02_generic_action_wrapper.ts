export {};

/*
 Generic Action Wrapper

 Purpose:
 - Standardize execution
 - Add logging
 - Handle errors consistently
 - Measure execution time
*/

// --------------------------------------------------
// Generic Action Wrapper
// --------------------------------------------------

async function executeAction<T>(
  actionName: string,
  action: () => Promise<T>
): Promise<T> {
  const start = Date.now();

  console.log(`Starting action: ${actionName}`);

  try {
    const result = await action();

    const duration = Date.now() - start;
    console.log(`Action succeeded: ${actionName} (${duration}ms)`);

    return result;
  } catch (error) {
    const duration = Date.now() - start;
    console.error(
      `Action failed: ${actionName} (${duration}ms)`
    );

    throw error;
  }
}

// --------------------------------------------------
// Example Usage
// --------------------------------------------------

async function mockClick(): Promise<void> {
  console.log("Clicking button...");
}

async function mockFetchData(): Promise<string> {
  return "Sample Data";
}

(async () => {
  await executeAction("Click Submit Button", mockClick);

  const data = await executeAction("Fetch User Data", mockFetchData);

  console.log("Fetched:", data);
})();

/*
========================
Architecture Insight
========================

- Generic wrapper standardizes action execution.
- T ensures return type safety.
- Logging and timing are centralized.
- Error handling is consistent across framework.
- This promotes maintainability and observability in test automation.
- It reduces duplicate try/catch logic in page objects.
- It encourages better design patterns in test automation.

========================
Automation Benefit
========================

- Cleaner page objects.
- Easier debugging.
- Better observability.
- Reduced duplicate try/catch logic.
- Stronger type safety for action results.
- Encourages better design patterns in test automation.
 */

/*
========================
Related Utilities
========================

- retry: Adds retry logic to actions.
- waitUntil: Waits for conditions with validation.
- logAction: Simple logging wrapper without timing.

These utilities can be built on top of executeAction for maximum reuse and consistency.
========================
Best Practices
- Use executeAction for all async operations in page objects.
- Define clear action names for better logging.
- Handle specific errors within the action function, not in the wrapper.
- Keep action functions focused on a single task for better observability.
- Leverage TypeScript's type system to ensure correct return types.
- Encourage better design patterns in test automation by centralizing cross-cutting concerns.
 */                 
