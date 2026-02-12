export {};

/*
 Using Readonly<T> to protect test datasets.
*/

// --------------------------------------------------
// Base Model
// --------------------------------------------------

interface LoginCredentials {
  username: string;
  password: string;
}

// --------------------------------------------------
// Readonly Scenario Map
// --------------------------------------------------

type LoginScenario = "admin" | "guest";

const loginScenarios: Readonly<Record<LoginScenario, LoginCredentials>> = {
  admin: {
    username: "admin",
    password: "admin123"
  },
  guest: {
    username: "guest",
    password: "guest123"
  }
};

// --------------------------------------------------
// Attempted Mutation (Will Fail)
// --------------------------------------------------

// loginScenarios.admin.username = "hacked"; ❌ Compile-time error
// loginScenarios.newUser = { username: "x", password: "y" }; ❌ Compile-time error

// --------------------------------------------------
// Readonly Array Example
// --------------------------------------------------

const loginDataset: ReadonlyArray<LoginCredentials> = [
  { username: "admin", password: "admin123" },
  { username: "guest", password: "guest123" }
];

// loginDataset.push({ username: "new", password: "new" }); ❌ Compile-time error

console.log("Login dataset:", loginDataset);

/*
========================
Architecture Insight
========================

- Readonly<T> prevents accidental mutation.
- Record + Readonly enforces scenario integrity.
- ReadonlyArray protects dataset structure.
- Test data should be immutable by default.

========================
Automation Benefit
========================

- Prevents cross-test contamination.
- Safer parallel execution.
- Reduced hidden side effects.
- Stronger test reliability.
*/
