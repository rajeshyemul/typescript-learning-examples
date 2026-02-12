export {};

/*
 Problem:
 Using plain JavaScript objects for test data.
*/

const user = {
  name: "Rajesh",
  role: "admin", // what if this is misspelled?
  isActive: true
};

// Later in test...
function login(userData: any) {
  console.log("Logging in:", userData.name);
}

login(user);

/*
 Problems:

1. role can be any string.
2. If someone writes "admni", TypeScript won't complain.
3. Missing required fields are not detected.
4. any hides errors.
5. Refactoring becomes risky.
*/