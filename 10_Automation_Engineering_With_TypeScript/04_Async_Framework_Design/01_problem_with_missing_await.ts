export {};

/*
 Problem: Missing await causes unstable behavior.
*/

async function clickButton(): Promise<void> {
  console.log("Button clicked");
}

async function submitForm(): Promise<void> {
  clickButton(); // ❌ Missing await
  console.log("Form submitted");
}

submitForm();

/*
 What happens?

 - clickButton runs asynchronously.
 - submitForm does not wait for it.
 - Execution order becomes unpredictable.

 In real automation:
 - Navigation may start before click finishes.
 - Assertions may run too early.
 - Tests become flaky.
*/

/*
========================
Architecture Insight
========================

- Async functions must always be awaited.
- Missing await breaks execution guarantees.
- Async discipline prevents race conditions.
- Explicit Promise<void> return types enforce correct usage.
- This is critical for reliable test automation.

========================
Automation Benefit
========================

- Stable execution order.
- Reduced flakiness.
- Predictable behavior in CI pipelines.
- Easier debugging when issues arise.
- Encourages better design patterns in test automation.
 */

/*
========================
Related Concepts
========================

- Async/Await syntax in TypeScript.
- Promise handling and chaining.
- Error handling in async functions.
- TypeScript's type system for enforcing async contracts.

========================
Best Practices
========================

- Always await async functions.
- Use explicit return types for async functions.
- Avoid mixing async and non-async code without clear boundaries.
- Use linters to catch missing await issues.
- Educate team on async programming patterns.

========================
Common Pitfalls
========================

- Forgetting to await a function that returns a Promise.
- Assuming async functions run synchronously.
- Not handling errors from async functions properly.
- Mixing async and non-async code without clear structure.

========================
Conclusion
========================

- Missing await is a common source of flakiness in test automation.
- Enforcing async discipline is crucial for reliable tests.
- TypeScript's type system can help catch these issues at compile time.
- Always be mindful of async behavior when designing test automation frameworks.    
*/
