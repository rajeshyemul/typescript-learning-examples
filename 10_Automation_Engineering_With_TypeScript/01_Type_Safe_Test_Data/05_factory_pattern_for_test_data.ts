export {};

/*
 Factory Pattern for Test Data

 Goal:
 - Provide default values
 - Allow safe overrides
 - Avoid duplication
 - Keep strong typing
*/

// --------------------------------------------------
// Step 1 – Define the Model
// --------------------------------------------------

enum UserRole {
  Admin = "ADMIN",
  Guest = "GUEST",
  Manager = "MANAGER"
}

interface User {
  readonly id: string;
  name: string;
  role: UserRole;
  isActive: boolean;
}

// --------------------------------------------------
// Step 2 – Base Default Data
// --------------------------------------------------

const defaultUser: User = {
  id: "U_DEFAULT",
  name: "Test User",
  role: UserRole.Guest,
  isActive: true
};

// --------------------------------------------------
// Step 3 – Factory Function
// --------------------------------------------------

function createUser(overrides?: Partial<User>): User {
  return {
    ...defaultUser,
    ...overrides,
    id: overrides?.id ?? generateUniqueId()
  };
}

// --------------------------------------------------
// Utility for unique ID
// --------------------------------------------------

function generateUniqueId(): string {
  return "U_" + Math.floor(Math.random() * 100000);
}

// --------------------------------------------------
// Usage Examples
// --------------------------------------------------

const adminUser = createUser({
  role: UserRole.Admin,
  name: "Rajesh"
});

const inactiveUser = createUser({
  isActive: false
});

console.log("Admin User:", adminUser);
console.log("Inactive User:", inactiveUser);

/*
========================
Why This Is Powerful
========================

1. Default values prevent duplication.
2. Partial<User> allows safe overrides.
3. ID remains readonly and protected.
4. All test users follow the same contract.
5. Easy to extend for future properties.
6. Centralized logic for generating unique IDs.

========================
Key Automation Benefits
========================

- Consistent test data across suites.
- Reduced boilerplate.
- Safer refactoring.
- Easy scenario customization.
- Cleaner test files.

========================
Important Design Insight
========================

Factories centralize data creation logic.

Instead of scattering object literals,
you enforce structure and consistency.

This is a senior-level automation practice.
*/

