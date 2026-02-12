export {};

/*
 Generic Element Wrapper

 Goal:
 - Encapsulate element interactions
 - Standardize behavior
 - Improve reusability
*/

// --------------------------------------------------
// Simulated Framework Interface
// --------------------------------------------------

interface BrowserPage {
  click(selector: string): Promise<void>;
  fill(selector: string, value: string): Promise<void>;
  textContent(selector: string): Promise<string>;
}

// --------------------------------------------------
// Generic Element Class
// --------------------------------------------------

class Element<TValue = void> {
  constructor(
    private readonly page: BrowserPage,
    private readonly selector: string
  ) {}

  async click(): Promise<void> {
    console.log(`Clicking element: ${this.selector}`);
    await this.page.click(this.selector);
  }

  async fill(value: string): Promise<void> {
    console.log(`Filling element: ${this.selector}`);
    await this.page.fill(this.selector, value);
  }

  async getText(): Promise<string> {
    console.log(`Getting text from: ${this.selector}`);
    return await this.page.textContent(this.selector);
  }
}

// --------------------------------------------------
// Example Usage in Page Object
// --------------------------------------------------

class LoginPage {
  private readonly username: Element;
  private readonly password: Element;
  private readonly submit: Element;

  constructor(private readonly page: BrowserPage) {
    this.username = new Element(page, "#username");
    this.password = new Element(page, "#password");
    this.submit = new Element(page, "#submit");
  }

  async login(username: string, password: string): Promise<void> {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submit.click();
  }
}

// --------------------------------------------------
// Mock Implementation
// --------------------------------------------------

const mockPage: BrowserPage = {
  async click(selector: string): Promise<void> {
    console.log(`Mock click: ${selector}`);
  },
  async fill(selector: string, value: string): Promise<void> {
    console.log(`Mock fill: ${selector} with ${value}`);
  },
  async textContent(selector: string): Promise<string> {
    return `Mock text from ${selector}`;
  }
};

(async () => {
  const loginPage = new LoginPage(mockPage);
  await loginPage.login("admin", "password");
})();

/*
========================
Architecture Insight
========================

- Element interactions are encapsulated.
- Page objects no longer deal with raw selectors.
- Behavior is centralized for reuse.
- Logging and enhancements can be added here once.
- This promotes maintainability and scalability in test automation frameworks.

========================
Automation Benefit
========================

- Cleaner page objects.
- Reduced duplication.
- Easier integration of retries, logging, and reporting.
- Stronger abstraction layer.
- Encourages better design patterns in test automation.
- Easier to mock for unit testing page objects.
*/
