export {};

/*
 Problem: Throwing generic errors everywhere.
*/

async function login(username: string, password: string): Promise<void> {
  if (!username || !password) {
    throw new Error("Login failed");
  }

  console.log("Login successful");
}

(async () => {
  try {
    await login("", "");
  } catch (error) {
    console.error("Test failed:", error);
  }
})();

/*
 Problems:

 - Error message is vague.
 - No context (which user? which step?).
 - No classification (validation error? network error?).
 - Hard to debug in large test suites.
*/


/*
========================
Architecture Insight
========================

- Generic Error does not communicate intent.
- Missing context makes debugging difficult.
- Large frameworks require structured error types.

========================
Automation Benefit
========================

- Clearer test failures.
- Faster debugging.
- Better CI diagnostics.
*/
