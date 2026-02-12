export {};

/*
 Using Partial<T> for safe test data overrides.
*/

// --------------------------------------------------
// Base Domain Model
// --------------------------------------------------

interface User {
  id: string;
  username: string;
  password: string;
  role: "ADMIN" | "GUEST" | "MANAGER";
  isActive: boolean;
}

// --------------------------------------------------
// Default Template
// --------------------------------------------------

const defaultUser: User = {
  id: "U_DEFAULT",
  username: "testuser",
  password: "password123",
  role: "GUEST",
  isActive: true
};

// --------------------------------------------------
// Factory Using Partial<T>
// --------------------------------------------------

function createUser(overrides: Partial<User> = {}): User {
  return {
    ...defaultUser,
    ...overrides
  };
}

// --------------------------------------------------
// Example Usage
// --------------------------------------------------

const adminUser = createUser({
  role: "ADMIN",
  username: "adminUser"
});

const inactiveUser = createUser({
  isActive: false
});

// createUser({ invalidProp: true }); ❌ Compile-time error

console.log("Admin:", adminUser);
console.log("Inactive:", inactiveUser);

/*
========================
Architecture Insight
========================

- Partial<T> allows flexible overrides.
- Base template ensures required fields exist.
- Overrides remain type-safe.
- Object shape integrity is preserved.

========================
Automation Benefit
========================

- Reduced test data duplication.
- Easier scenario customization.
- Safer refactoring.
- Cleaner data-driven testing patterns.
*/

/* 
Additional Benefits of Using Partial<T>: 
- It prevents accidental omission of required fields. 
- It provides better autocomplete and documentation in IDEs. 
- It encourages a more declarative style of test data creation. 
- It allows for easy extension when new properties are added to the User interface.
- It centralizes default values, making it easier to maintain and update test data.
- It promotes better design patterns in test automation by encouraging the use of factory functions for test data creation.
*/
