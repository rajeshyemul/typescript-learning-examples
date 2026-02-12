export {};

/*
 Using Pick<T> and Omit<T> for precise test data modeling.
*/

// --------------------------------------------------
// Base Domain Model
// --------------------------------------------------

interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  role: "ADMIN" | "GUEST" | "MANAGER";
  isActive: boolean;
}

// --------------------------------------------------
// Login Test Only Needs Username & Password
// --------------------------------------------------

type LoginCredentials = Pick<User, "username" | "password">;

const loginTestData: LoginCredentials[] = [
  { username: "admin", password: "1234" },
  { username: "guest", password: "abcd" },
];

// { username: "admin" } ❌ Compile-time error

// --------------------------------------------------
// Registration Test Should Exclude id & isActive
// --------------------------------------------------

type RegistrationData = Omit<User, "id" | "isActive">;

const registrationTestData: RegistrationData = {
  username: "newuser",
  password: "secure123",
  email: "new@example.com",
  role: "GUEST",
};

// --------------------------------------------------
// Example 2 – Using Pick and Omit in API Response Modeling
// --------------------------------------------------

interface ApiResponse<T> {
  status: "success" | "error";
  data: T;
}

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

interface User {
  id: string;
  email: string;
  role: "ADMIN" | "GUEST" | "MANAGER";
  password: string;
}

// Only expose email and role from User
type PublicUserInfo = Pick<User, "email" | "role">;

async function fetchUser(): Promise<ApiResponse<PublicUserInfo>> {
  return {
    status: "success",
    data: {
      email: "admin@example.com",
      role: "ADMIN",
    },
  };
}

(async () => {
  const response = await fetchUser();

  if (response.status === "success") {
    console.log("User email:", response.data.email);
    console.log("User role:", response.data.role);

    // response.data.password ❌ Compile-time error
  }
})();

/*
========================
Architecture Insight
========================

- Pick<T> extracts only required fields.
- Omit<T> removes unnecessary fields.
- Test data should match test intent.
- Domain model should not be overexposed.
- This promotes better design and maintainability in test automation frameworks.
- It reduces accidental misuse of irrelevant fields.
- It makes test data more self-documenting.
- It provides strong compile-time validation.
- It encourages better design patterns in test automation.
- API endpoints often return partial views of entities.
- Pick<T> explicitly models allowed exposure.
- Omit<T> removes sensitive fields safely.
- Utility types help enforce least-privilege data design.

========================
Automation Benefit
========================

- Cleaner test scenarios.
- Reduced accidental field usage.
- Strong compile-time validation.
- Easier refactoring when domain model changes.
- Better documentation of test data intent.
- Encourages better design patterns in test automation.
- Safer API validations.
- Reduced accidental sensitive data usage.
- Clear contract modeling.
- Improved long-term maintainability.
 */

/*
========================
Related Utilities
========================

- Required<T>: Makes all properties required.
- Partial<T>: Makes all properties optional.
- Readonly<T>: Makes all properties read-only.
- Record<K, T>: Creates a type with keys K and values T.
- This utility type is essential for precise test data modeling in test automation frameworks.
 */

/*
========================
Related Examples
========================

- 10_Automation_Engineering_With_TypeScript/05_Generic_Utilities_For_Automation/02_generic_action_wrapper.ts
- 10_Automation_Engineering_With_TypeScript/05_Generic_Utilities_For_Automation/03_type_safe_data_mapper.ts
- 10_Automation_Engineering_With_TypeScript/05_Generic_Utilities_For_Automation/04_generic_service_layer.ts
- 10_Automation_Engineering_With_TypeScript/05_Generic_Utilities_For_Automation/05_generic_element_wrapper.ts
- 10_Automation_Engineering_With_TypeScript/03_Typed_API_Contracts/04_generic_api_response_wrapper.ts
 */

/*
========================
Related Concepts
========================

- Type Aliases: Create new names for types.
- Interfaces: Define object shapes and contracts.
- Generics: Create reusable components with type parameters.
- Utility Types: Built-in types for common transformations.
- This combination of features is essential for robust test automation frameworks.
 */

/*
========================
Best Practices
========================

- Use Pick<T> for focused test data.
- Use Omit<T> to exclude irrelevant fields.
- Keep test data aligned with test intent.
- Avoid overexposing domain models in tests.
- Leverage TypeScript's type system for safer tests.
- Encourage better design patterns in test automation.
 */
