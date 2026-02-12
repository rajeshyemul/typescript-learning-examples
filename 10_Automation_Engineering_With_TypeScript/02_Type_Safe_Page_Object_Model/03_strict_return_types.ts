export {};

/*
 Modeling navigation flow using strict return types.
*/

// --------------------------------------------------
// Simulated Framework Types
// --------------------------------------------------

interface BrowserPage {
  fill(selector: string, value: string): Promise<void>;
  click(selector: string): Promise<void>;
}

// --------------------------------------------------
// Target Page Object
// --------------------------------------------------

class HomePage {
  constructor(private readonly page: BrowserPage) {}

  async getWelcomeMessage(): Promise<string> {
    return "Welcome User";
  }
}

// --------------------------------------------------
// Improved Login Page
// --------------------------------------------------

class LoginPage {
  constructor(private readonly page: BrowserPage) {}

  private readonly usernameInput = "#username";
  private readonly passwordInput = "#password";
  private readonly loginButton = "#login";

  async login(username: string, password: string): Promise<HomePage> {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);

    // Navigation modeled explicitly
    return new HomePage(this.page);
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
  }
};

(async () => {
  const loginPage = new LoginPage(mockPage);

  const homePage = await loginPage.login("admin", "password");

  const message = await homePage.getWelcomeMessage();

  console.log("Message:", message);
})();

/*
========================
Architecture Insight
========================

- Navigation is modeled as a type contract.
- login() guarantees a HomePage on success.
- Chaining becomes type-safe.
- Compile-time enforcement prevents misuse.

========================
Automation Benefit
========================

- No accidental usage of wrong page.
- Clear navigation flow.
- Stronger test readability.
- Reduced runtime surprises.
*/
