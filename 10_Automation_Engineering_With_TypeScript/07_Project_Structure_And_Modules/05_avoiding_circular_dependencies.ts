/*
 Understanding and avoiding circular dependencies.
*/

// --------------------------------------------------
// BAD Example (Circular Dependency)
// --------------------------------------------------

/*
Imagine:

LoginPage.ts imports AuthService
AuthService.ts imports LoginPage

LoginPage.ts
--------------
import { AuthService } from "./AuthService";

export class LoginPage {
  login() {
    const auth = new AuthService();
  }
}

AuthService.ts
--------------
import { LoginPage } from "./LoginPage";

export class AuthService {
  redirectToLogin() {
    return new LoginPage();
  }
}

This creates a circular dependency:
LoginPage → AuthService → LoginPage
*/


// --------------------------------------------------
// Why This Is Dangerous
// --------------------------------------------------

/*
- Modules load partially.
- One of the imports may become undefined.
- Runtime errors occur unexpectedly.
- Refactoring becomes risky.
*/


// --------------------------------------------------
// Correct Approach: Extract Shared Layer
// --------------------------------------------------

/*
Instead of pages importing services and services importing pages,
extract shared contracts into a lower layer.

Example:

models/AuthModels.ts
--------------------
export interface AuthResult {
  token: string;
}

AuthService.ts
--------------
import { AuthResult } from "../models/AuthModels";

export class AuthService {
  authenticate(): AuthResult {
    return { token: "abc123" };
  }
}

LoginPage.ts
------------
import { AuthService } from "../services/AuthService";

export class LoginPage {
  login() {
    const service = new AuthService();
    return service.authenticate();
  }
}
*/


/*
========================
Architecture Insight
========================

- Circular dependencies happen when modules import each other.
- They break module initialization order.
- Shared contracts should be extracted into lower layers.
- Dependencies must flow downward only.

========================
Automation Benefit
========================

- Stable module resolution.
- Cleaner architecture.
- Reduced hidden runtime errors.
- Safer long-term scalability.
*/

/*
Additional Benefits of Avoiding Circular Dependencies: 
- It promotes better separation of concerns in the codebase.
- It makes the code easier to understand and maintain. 
- It allows for better testing and mocking of individual modules. 
- It encourages better design patterns in test automation frameworks by enforcing clear boundaries between different layers of the application.
- It improves the overall robustness and reliability of the test automation framework.
- It allows for easier refactoring and evolution of the codebase without introducing hidden bugs.
- It promotes better modularity and reusability of code components.
- It can lead to better performance by avoiding issues with module loading and initialization.
- It enhances the developer experience by providing clearer module dependencies and reducing confusion.
- It can help prevent memory leaks and other issues caused by circular references in larger applications.
*/