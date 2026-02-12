export {};

/*
 Problem: Untyped API Response Handling
*/

async function fetchLogin(): Promise<any> {
  return {
    token: "abc123",
    expiresIn: 3600
  };
}

async function testLogin() {
  const response = await fetchLogin();

  // Typo below won't be caught
  console.log(response.tokenn); // ❌ No compile error
}

testLogin();

/*
 Problems:

1. Using 'any' hides mistakes.
2. Typos are not detected.
3. Refactoring becomes risky.
4. No documentation of response shape.
5. No auto-completion in IDEs.
6. Runtime errors due to unexpected response structure.
7. Difficult to maintain as API evolves.
*/
