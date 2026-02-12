export {};

/*
 This file explains how optional (?) and readonly
 properties improve automation test stability.
*/

// --------------------------------------------------
// Example 1 – Optional Fields
// --------------------------------------------------

interface User {
  id: string;
  name: string;
  role: string;
  isActive?: boolean; // optional field
}

const user1: User = {
  id: "U001",
  name: "Rajesh",
  role: "ADMIN"
  // isActive is optional
};

const user2: User = {
  id: "U002",
  name: "Amit",
  role: "GUEST",
  isActive: true
};

console.log("User1:", user1);
console.log("User2:", user2);

/*
 Why Optional Fields Matter:

- Some test scenarios don't require all properties.
- Optional fields reduce unnecessary duplication.
- They clearly communicate which data is mandatory.
*/


// --------------------------------------------------
// Example 2 – Readonly Fields
// --------------------------------------------------

interface SecureUser {
  readonly id: string;
  name: string;
  role: string;
}

const secureUser: SecureUser = {
  id: "U100",
  name: "Neha",
  role: "MANAGER"
};

// secureUser.id = "U200"; // ❌ Compile-time error
secureUser.name = "Neha Sharma"; // ✅ Allowed

console.log("Secure user:", secureUser);

/*
 Why Readonly Matters in Automation:

- Test IDs should never change.
- Prevents accidental mutation.
- Ensures identity consistency across tests.
*/


// --------------------------------------------------
// Example 3 – Combining Both
// --------------------------------------------------

interface TestUser {
  readonly id: string;
  name: string;
  role: string;
  isActive?: boolean;
  lastLoginDate?: Date;
}

const testUser: TestUser = {
  id: "T001",
  name: "AutomationUser",
  role: "ADMIN"
};

console.log("Test user:", testUser);

/*
 Key Learning Points:

1. Optional (?) fields define flexibility.
2. Readonly enforces immutability.
3. Required fields ensure minimum contract.
4. Proper modeling prevents flaky tests.
5. Test data should reflect real-world constraints.
6. TypeScript's type system enhances test reliability.
7. Clear data models improve test readability.
8. Avoids silent errors in test data.
9. Encourages better test design.
10. Makes test maintenance easier and safer.
11. Promotes best practices in test data management.
12. Helps catch issues early in the development cycle.
13. Improves collaboration between developers and testers.
14. Reduces debugging time caused by incorrect test data.
15. Enhances confidence in test outcomes.
16. Facilitates better documentation of test data structures.
17. Supports better refactoring of test code.
18. Encourages thoughtful design of test data. 
19. Makes it easier to onboard new team members. 
20. Ultimately leads to more robust and reliable automation tests.
*/

