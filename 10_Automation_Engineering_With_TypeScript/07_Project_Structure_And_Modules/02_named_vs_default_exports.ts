/*
 Named vs Default Exports
*/

// --------------------------------------------------
// Named Exports
// --------------------------------------------------

export interface Product {
  id: string;
  name: string;
}

export function formatProduct(product: Product): string {
  return `${product.id} - ${product.name}`;
}

/*
 Import example (in another file):

 import { Product, formatProduct } from "./02_named_vs_default_exports";
*/


// --------------------------------------------------
// Default Export Example
// --------------------------------------------------

class UserService {
  getUser(id: string): string {
    return `User: ${id}`;
  }
}

export default UserService;

/*
 Import example (in another file):

 import UserService from "./02_named_vs_default_exports";
*/


/*
========================
Architecture Insight
========================

Named Exports:
- Explicit.
- Allow multiple exports per module.
- Safer during refactoring.
- Clearer import statements.

Default Exports:
- Only one per module.
- Import name can be changed freely.
- Easier for small utilities.
- Riskier in large projects.
- Can lead to confusion if overused.

======================== Automation Benefit ======================== 
- Named exports promote better maintainability and readability in test automation frameworks. 
- They provide clearer contracts for what a module offers, reducing the chance of accidental imports. 
- Default exports can be useful for single-purpose modules but should be used judiciously to avoid confusion.

========================
Best Practice for Automation Frameworks
========================

- Prefer named exports.
- Use default export only when the module represents one clear primary entity.
- Avoid mixing default and named exports excessively.
*/
