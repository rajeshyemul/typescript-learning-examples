export {};

/*
 Improved: Basic typed Page Object structure.

 We are still framework-agnostic.
 This example simulates browser actions using console logs.
*/

// --------------------------------------------------
// Simulated Framework Types
// --------------------------------------------------

interface BrowserPage {
  fill(selector: string, value: string): Promise<void>;
  click(selector: string): Promise<void>;
}

// --------------------------------------------------
// Typed Page Object
// --------------------------------------------------

class LoginPage {
  constructor(private readonly page: BrowserPage) {}

  private readonly usernameInput: string = "#username";
  private readonly passwordInput: string = "#password";
  private readonly loginButton: string = "#login";

  async login(username: string, password: string): Promise<void> {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

// --------------------------------------------------
// Mock Implementation (for demonstration)
// --------------------------------------------------

const mockPage: BrowserPage = {
  async fill(selector: string, value: string): Promise<void> {
    console.log(`Filling ${selector} with ${value}`);
  },
  async click(selector: string): Promise<void> {
    console.log(`Clicking ${selector}`);
  }
};

const loginPage = new LoginPage(mockPage);

loginPage.login("admin", "password");

/*
========================
Architecture Insight
========================

- Dependency injection removes global browser coupling.
- Private locators protect internal structure from misuse.
- Explicit Promise<void> enforces async discipline.
- This design scales better for large test suites.
- Future navigation modeling can be built on this foundation.
- TypeScript's type system enhances safety and maintainability.

========================
Automation Benefit
========================

- Safer refactoring.
- Cleaner test files.
- Predictable async behavior.
- Strong foundation for navigation modeling.
- Better separation of concerns.
- Easier to mock for unit testing page objects.
- Encourages better design patterns in test automation.
*/
