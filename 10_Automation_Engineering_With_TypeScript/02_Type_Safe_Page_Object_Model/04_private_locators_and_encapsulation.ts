export {};

/*
 Enforcing encapsulation in Page Objects.
 The goal is to prevent locator leakage and test misuse.
*/

// --------------------------------------------------
// Simulated Framework Types
// --------------------------------------------------

interface BrowserPage {
  fill(selector: string, value: string): Promise<void>;
  click(selector: string): Promise<void>;
  textContent(selector: string): Promise<string>;
}

// --------------------------------------------------
// Weak Design Example (DO NOT DO THIS)
// --------------------------------------------------

class WeakDashboardPage {
  public readonly welcomeMessage = "#welcome";

  constructor(public readonly page: BrowserPage) {}

  async getMessage(): Promise<string> {
    return this.page.textContent(this.welcomeMessage);
  }
}

/*
 Problem:
 Tests can directly access `welcomeMessage`.
 This leaks internal implementation.
*/


// --------------------------------------------------
// Strong Encapsulated Design
// --------------------------------------------------

class DashboardPage {
  private readonly welcomeMessage = "#welcome";

  constructor(private readonly page: BrowserPage) {}

  async getWelcomeMessage(): Promise<string> {
    return this.page.textContent(this.welcomeMessage);
  }

  async logout(): Promise<void> {
    await this.page.click("#logout");
  }
}

// --------------------------------------------------
// Mock Implementation
// --------------------------------------------------

const mockPage: BrowserPage = {
  async fill(selector: string, value: string): Promise<void> {
    console.log(`Filling ${selector} with ${value}`);
  },
  async click(selector: string): Promise<void> {
    console.log(`Clicking ${selector}`);
  },
  async textContent(selector: string): Promise<string> {
    return `Text from ${selector}`;
  }
};

(async () => {
  const dashboard = new DashboardPage(mockPage);

  const message = await dashboard.getWelcomeMessage();
  console.log("Dashboard message:", message);

  await dashboard.logout();
})();

/*
========================
Architecture Insight
========================

- Locators must remain private.
- Tests should interact through behavior, not selectors.
- Encapsulation protects internal structure.
- Refactoring becomes safe when selectors change.
- Clear separation of concerns between test logic and page structure.
- This design is more maintainable and scalable for large test suites.

========================
Automation Benefit
========================

- Reduced brittle tests.
- Cleaner abstraction boundaries.
- Safer locator updates.
- Clear separation of concerns.
- Easier to mock for unit testing page objects.
- Encourages better design patterns in test automation.
*/
