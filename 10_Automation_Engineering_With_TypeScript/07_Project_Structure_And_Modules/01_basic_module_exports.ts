/*
 Basic module exports in TypeScript.
*/

// --------------------------------------------------
// Named Export
// --------------------------------------------------

export interface User {
  id: string;
  email: string;
}

export function formatUser(user: User): string {
  return `${user.id} - ${user.email}`;
}

// --------------------------------------------------
// Internal (Not Exported)
// --------------------------------------------------

function internalHelper(): void {
  console.log("This is private to this module.");
}

/*
========================
Architecture Insight
========================

- Only exported members are accessible outside the module.
- Internal helpers remain encapsulated.
- Modules act as boundaries in large frameworks.

========================
Automation Benefit
========================

- Clear separation of responsibilities.
- Controlled public APIs.
- Reduced accidental cross-layer usage.
*/

/*
Additional Benefits of Using Modules: 
- Modules promote better organization of code. 
- They help in managing dependencies and reducing global scope pollution. 
- They enable better maintainability and scalability in test automation frameworks. 
- They allow for easier testing and mocking of individual components. 
- They encourage better design patterns by enforcing clear boundaries between different parts of the framework. 
*/

