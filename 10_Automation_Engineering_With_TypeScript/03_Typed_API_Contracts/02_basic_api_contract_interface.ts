export {};

/*
 Defining a strict API response contract.
*/

interface LoginResponse {
  token: string;
  expiresIn: number;
}

async function fetchLogin(): Promise<LoginResponse> {
  return {
    token: "abc123",
    expiresIn: 3600
  };
}

async function testLogin() {
  const response = await fetchLogin();

  console.log(response.token);
  // console.log(response.tokenn); ❌ Compile-time error
}

testLogin();

/*
========================
Architecture Insight
========================

- API responses are modeled as contracts.
- Refactors are caught at compile time.
- Response structure is self-documented.
- Type safety prevents silent property mismatches.
- IDE auto-completion improves developer experience.

========================
Automation Benefit
========================

- Safer API validations.
- Cleaner assertion logic.
- Easier mocking.
- Stronger integration between UI and API tests.
- Better maintainability as API evolves.
*/
