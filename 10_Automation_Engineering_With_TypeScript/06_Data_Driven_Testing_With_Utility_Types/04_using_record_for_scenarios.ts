export {};

/*
 Using Record<K, T> to structure test scenarios.
*/

// --------------------------------------------------
// Base Model
// --------------------------------------------------

interface LoginCredentials {
  username: string;
  password: string;
}

// --------------------------------------------------
// Scenario Keys
// --------------------------------------------------

type LoginScenario =
  | "validAdmin"
  | "validGuest"
  | "invalidPassword"
  | "emptyUsername";

// --------------------------------------------------
// Structured Scenario Map
// --------------------------------------------------

const loginScenarios: Record<LoginScenario, LoginCredentials> = {
  validAdmin: {
    username: "admin",
    password: "admin123"
  },
  validGuest: {
    username: "guest",
    password: "guest123"
  },
  invalidPassword: {
    username: "admin",
    password: "wrongpass"
  },
  emptyUsername: {
    username: "",
    password: "nopass"
  }
};

// --------------------------------------------------
// Example Usage
// --------------------------------------------------

function runLoginTest(data: LoginCredentials) {
  console.log("Running test with:", data);
}

Object.values(loginScenarios).forEach(runLoginTest);

/*
========================
Architecture Insight
========================

- Record<K, T> enforces predefined scenario keys.
- All scenarios must follow the same structure.
- Missing or extra keys are compile-time errors.
- Scenario management becomes predictable.

========================
Automation Benefit
========================

- Cleaner organization of test cases.
- Scalable data-driven testing.
- Reduced duplication.
- Safer addition of new scenarios.
*/
