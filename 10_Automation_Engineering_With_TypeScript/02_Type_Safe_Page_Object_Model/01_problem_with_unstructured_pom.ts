export {};

/*
 Problem:
 A loosely structured Page Object Model.
*/

class LoginPage {
  usernameInput = "#username";
  passwordInput = "#password";
  loginButton = "#login";

  async login(username: string, password: string) {
    console.log("Typing username:", username);
    console.log("Typing password:", password);
    console.log("Click login");
  }
}

const page = new LoginPage();
page.login("admin", "password");

/*
 Problems:

1. Locators are public.
2. No return type defined.
3. login() does not model navigation.
4. No connection to a HomePage.
5. Hard to scale for large frameworks.
6. No contract enforcement.
7. Test code can misuse the page object.
8. No way to mock or stub for testing.
9. No separation of concerns.
10. Not leveraging TypeScript's strengths.
*/

