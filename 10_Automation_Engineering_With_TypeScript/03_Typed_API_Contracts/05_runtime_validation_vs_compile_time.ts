export {};

/*
 Understanding the difference between
 compile-time type safety and runtime validation.
*/

// --------------------------------------------------
// Step 1 – Define API Contract
// --------------------------------------------------

interface LoginResponse {
  token: string;
  expiresIn: number;
}

// --------------------------------------------------
// Step 2 – Simulated API Call (Broken Data)
// --------------------------------------------------

async function fetchLogin(): Promise<LoginResponse> {
  // Imagine backend accidentally changed the contract
  return {
    token: "abc123",
    expiresIn: 3600,
    // backend adds unexpected property
    refreshToken: "xyz789"
  } as any; // Forced cast to simulate backend issue
}

// --------------------------------------------------
// Step 3 – Compile-Time Safety
// --------------------------------------------------

async function testLogin() {
  const response = await fetchLogin();

  console.log("Token:", response.token);

  // response.tokenn ❌ Compile-time error
}

testLogin();

/*
 Important Observation:

 TypeScript checks types at compile time only.

 At runtime:
 - Type information does not exist.
 - JavaScript executes normally.
 - Unexpected backend changes may still pass through.
*/


// --------------------------------------------------
// Step 4 – Simple Runtime Guard Example
// --------------------------------------------------

function isLoginResponse(obj: any): obj is LoginResponse {
  return (
    typeof obj.token === "string" &&
    typeof obj.expiresIn === "number"
  );
}

async function safeTestLogin() {
  const response = await fetchLogin();

  if (isLoginResponse(response)) {
    console.log("Validated token:", response.token);
  } else {
    console.error("Invalid API response shape");
  }
}

safeTestLogin();

/*
========================
Architecture Insight
========================

- TypeScript enforces compile-time safety only.
- Types are erased after compilation.
- Runtime guards are required for external data.
- API responses from backend cannot be blindly trusted.

========================
Automation Benefit
========================

- Safer API validation logic.
- Clear separation of compile-time vs runtime concerns.
- Reduced hidden failures in integration tests.
- Stronger contract verification practices.
*/
