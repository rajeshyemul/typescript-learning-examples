export {};

/*
 Modeling complete navigation flow with strong typing.
*/

// --------------------------------------------------
// Simulated Framework Types
// --------------------------------------------------

interface BrowserPage {
  fill(selector: string, value: string): Promise<void>;
  click(selector: string): Promise<void>;
}

// --------------------------------------------------
// Page Objects
// --------------------------------------------------

class LoginPage {
  constructor(private readonly page: BrowserPage) {}

  async login(username: string, password: string): Promise<DashboardPage> {
    await this.page.fill("#username", username);
    await this.page.fill("#password", password);
    await this.page.click("#login");

    return new DashboardPage(this.page);
  }
}

class DashboardPage {
  constructor(private readonly page: BrowserPage) {}

  async goToSettings(): Promise<SettingsPage> {
    await this.page.click("#settings");
    return new SettingsPage(this.page);
  }

  async logout(): Promise<LoginPage> {
    await this.page.click("#logout");
    return new LoginPage(this.page);
  }
}

class SettingsPage {
  constructor(private readonly page: BrowserPage) {}

  async changePassword(): Promise<void> {
    await this.page.click("#changePassword");
  }

  async backToDashboard(): Promise<DashboardPage> {
    await this.page.click("#back");
    return new DashboardPage(this.page);
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

// --------------------------------------------------
// Typed User Journey
// --------------------------------------------------

(async () => {
  const loginPage = new LoginPage(mockPage);

  const dashboard = await loginPage.login("admin", "password");

  const settings = await dashboard.goToSettings();

  await settings.changePassword();

  const backToDashboard = await settings.backToDashboard();

  await backToDashboard.logout();
})();

/*
========================
Architecture Insight
========================

- Each page transition returns a specific Page Object.
- Invalid navigation sequences are prevented by types.
- User journeys become compile-time enforced.
- Pages model state transitions explicitly.
- This design is highly maintainable and scalable for complex applications.

========================
Automation Benefit
========================

- Clear user flow readability.
- Reduced misuse of wrong page methods.
- Safer test chaining.
- Stronger long-term maintainability.
- Encourages better design patterns in test automation.
*/
