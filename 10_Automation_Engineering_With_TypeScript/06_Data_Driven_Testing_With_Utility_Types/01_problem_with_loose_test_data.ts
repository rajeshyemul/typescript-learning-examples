export {};

/*
 Problem: Loose test data structure
*/

const loginTests = [
  { username: "admin", password: "1234" },
  { user: "guest", password: "abcd" }, // typo ❌
  { username: "manager" } // missing password ❌
];

function runLoginTest(data: any) {
  console.log("Testing:", data.username);
}

loginTests.forEach(runLoginTest);

/*
 Problems:

 - Typos not detected.
 - Missing properties not detected.
 - No structure enforcement.
 - Refactoring becomes risky.
 - Test data is not self-documenting.
*/
