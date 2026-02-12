export {};

/*
 Solution:
 Define strict contracts for test data.
*/

interface User {
  id: string;
  name: string;
  role: string;
  isActive: boolean;
}

const user: User = {
  id: "U001",
  name: "Rajesh",
  role: "admin",
  isActive: true
};

function login(userData: User): void {
  console.log("Logging in:", userData.name);
}

login(user);

/*
 Benefits:

1. Missing properties cause compile-time errors.
2. Extra properties are flagged.
3. Refactoring becomes safe.
4. Test data structure is documented.
*/



