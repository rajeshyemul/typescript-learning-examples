export {};

/*
 Improve test data safety using enums.
*/

enum UserRole {
  Admin = "ADMIN",
  Guest = "GUEST",
  Manager = "MANAGER"
}

interface User {
  id: string;
  name: string;
  role: UserRole;
  isActive: boolean;
}

const user: User = {
  id: "U001",
  name: "Rajesh",
  role: UserRole.Admin,
  isActive: true
};

// user.role = "admni"; // ❌ Compile-time error

/*
 Benefits:

1. Prevents magic strings.
2. Avoids spelling mistakes.
3. Centralizes allowed values.
4. Improves maintainability.
*/

function login(userData: User): void {console.log("Logging in:", userData.name, "with role:", userData.role); } login(user);

