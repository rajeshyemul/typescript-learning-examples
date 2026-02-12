export {};

/*
 Enforcing consistent async return contracts.
*/

// --------------------------------------------------
// Simulated Framework Interface
// --------------------------------------------------

interface BrowserPage {
  fill(selector: string, password: string): Promise<void>;
  click(selector: string): Promise<void>;
  textContent(selector: string): Promise<string>;
}

// --------------------------------------------------
// Weak Design (Inconsistent Returns)
// --------------------------------------------------

class WeakPage {
  constructor(private readonly page: BrowserPage) {}

  async clickButton() {
    await this.page.click("#submit");
  }

  async getMessage() {
    return this.page.textContent("#message");
  }
}

/*
 Problems:

 - clickButton() has no explicit return type.
 - getMessage() implicitly returns Promise<string>.
 - Behavior is unclear without reading implementation.
*/


// --------------------------------------------------
// Strong Design (Consistent Contracts)
// --------------------------------------------------

class StrongPage {
  constructor(private readonly page: BrowserPage) {}

  async clickButton(): Promise<void> {
    await this.page.click("#submit");
  }

  async getMessage(): Promise<string> {
    return await this.page.textContent("#message");
  }
}

// --------------------------------------------------
// Mock Implementation
// --------------------------------------------------

const mockPage: BrowserPage = {
  async click(selector: string): Promise<void> {
    console.log(`Clicking ${selector}`);
  },
  async textContent(selector: string): Promise<string> {
    return `Text from ${selector}`;
  },
  async fill(selector: string, password: string): Promise<void> {
    console.log(`Filling ${selector} with ${password}`); }
};

(async () => {
  const page = new StrongPage(mockPage);

  await page.clickButton();

  const message = await page.getMessage();
  console.log("Message:", message);
})();


// --------------------------------------------------
// Extended Example with Navigation
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
}

class SettingsPage {
  constructor(private readonly page: BrowserPage) {}

  async changePassword(): Promise<void> {
    await this.page.click("#changePassword");
  }
}

/*
========================
Architecture Insight
========================

- All async methods must declare explicit Promise return types.
- Actions return Promise<void>.
- Data retrieval returns Promise<T>.
- Async contracts should be predictable across the framework.
- This design enforces correct async usage.
- It prevents common mistakes like missing awaits.
- It improves readability and maintainability.
- This is essential for reliable test automation.
- Consistent async contracts are a best practice in TypeScript automation frameworks.
- They provide clear expectations for method behavior.
- They enhance developer experience and reduce bugs.
*/

/*
========================
Automation Benefit
========================

- Clear intent for every method.
- Easier onboarding for new engineers.
- Reduced ambiguity in test chaining.
- Improved long-term maintainability.
- Stronger guarantees about execution order.
- Fewer runtime errors due to missing awaits. 
- Better integration with TypeScript's type system. 
- Encourages better design patterns in test automation. 
*/ 

/*
 ======================== Related Concepts ======================== 
- Async/Await syntax in TypeScript. 
- Promise handling and chaining. 
- TypeScript's type system for enforcing async contracts.
 ======================== Best Practices ======================== 
 - Always declare explicit return types for async functions. 
 - Use Promise<void> for actions that don't return data. 
 - Use Promise<T> for functions that return data. 
 - Avoid mixing async and non-async code without clear structure. 
 - Use linters to enforce consistent async return types.
  ======================== Common Pitfalls ========================
  - Forgetting to declare return types for async functions. 
  - Assuming async functions run synchronously. 
  - Not handling errors from async functions properly. 
  - Mixing async and non-async code without clear structure.
   ======================== Conclusion ======================== 
   Enforcing consistent Promise return types is critical
*/
