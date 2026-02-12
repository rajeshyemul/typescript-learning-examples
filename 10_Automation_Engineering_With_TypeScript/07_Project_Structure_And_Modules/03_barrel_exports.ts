/*
 Understanding Barrel Exports
*/

// --------------------------------------------------
// Imagine This Folder Structure:
//
// pages/
//   LoginPage.ts
//   DashboardPage.ts
//   index.ts  <-- Barrel
//
// services/
//   UserService.ts
//   index.ts  <-- Barrel
// --------------------------------------------------


// --------------------------------------------------
// Example: LoginPage.ts
// --------------------------------------------------

export class LoginPage {
  login(): void {
    console.log("Login action");
  }
}


// --------------------------------------------------
// Example: DashboardPage.ts
// --------------------------------------------------

export class DashboardPage {
  open(): void {
    console.log("Dashboard opened");
  }
}


// --------------------------------------------------
// Barrel File Example (pages/index.ts)
//
// export * from "./LoginPage";
// export * from "./DashboardPage";
// --------------------------------------------------


/*
 Now imports become cleaner:

 Instead of:

 import { LoginPage } from "../../pages/LoginPage";
 import { DashboardPage } from "../../pages/DashboardPage";

 You write:

 import { LoginPage, DashboardPage } from "../../pages";
*/


/*
========================
Architecture Insight
========================

- Barrel files re-export modules from a directory.
- They simplify import paths.
- They create clean public APIs for folders.
- They improve scalability and readability.

========================
Automation Benefit
========================

- Cleaner test files.
- Easier refactoring.
- Clear layer boundaries.
- Organized project structure.
*/

/*
Additional Benefits of Using Barrel Exports: 
- They reduce the number of import statements in test files, making them cleaner and easier to read. 
- They allow for easier refactoring, as changes to file paths only need to be updated in the barrel file. 
- They promote better organization of code by grouping related modules together. 
- They can help enforce a clear public API for a directory, making it easier for developers to understand what is available for use. 
- They encourage better design patterns by promoting modularity and separation of concerns in test automation frameworks. 
*/
