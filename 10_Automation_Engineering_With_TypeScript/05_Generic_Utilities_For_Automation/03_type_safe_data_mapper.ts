export {};

/*
 Type-Safe Data Mapper

 Goal:
 - Transform data between models safely
 - Prevent property mismatch errors
 - Keep compile-time guarantees
*/

// --------------------------------------------------
// Example: API Model
// --------------------------------------------------

interface ApiUser {
  user_id: string;
  user_email: string;
  user_role: "ADMIN" | "GUEST" | "MANAGER";
}

// --------------------------------------------------
// Internal Framework Model
// --------------------------------------------------

interface User {
  id: string;
  email: string;
  role: "ADMIN" | "GUEST" | "MANAGER";
}

// --------------------------------------------------
// Generic Mapper Function
// --------------------------------------------------

function mapData<TInput, TOutput>(
  input: TInput,
  mapper: (data: TInput) => TOutput
): TOutput {
  return mapper(input);
}

// --------------------------------------------------
// Specific Mapping Implementation
// --------------------------------------------------

function mapApiUserToUser(apiUser: ApiUser): User {
  return {
    id: apiUser.user_id,
    email: apiUser.user_email,
    role: apiUser.user_role
  };
}

// --------------------------------------------------
// Example Usage
// --------------------------------------------------

const apiResponse: ApiUser = {
  user_id: "U001",
  user_email: "raj@example.com",
  user_role: "ADMIN"
};

const user: User = mapData(apiResponse, mapApiUserToUser);

console.log("Mapped user:", user);

/*
========================
Architecture Insight
========================

- TInput and TOutput enforce transformation safety.
- Mapping logic is isolated and reusable.
- Model separation prevents direct coupling.
- API and UI models remain independent.
- Compile-time checks catch mapping errors early.
- This pattern is essential for robust test automation frameworks.

========================
Automation Benefit
========================

- Safer backend-to-UI data validation.
- Cleaner separation of concerns.
- Easier refactoring when APIs change.
- Stronger test reliability.
- Encourages better design patterns in test automation.
*/
