export {};

/*
 Generic API Response Wrapper

 Goal:
 - Avoid repeating response structure
 - Reuse a common API envelope
 - Keep strict typing
*/

// --------------------------------------------------
// Step 1 – Generic API Envelope
// --------------------------------------------------

interface ApiResponse<T> {
  status: "success" | "failure";
  data: T;
  message?: string;
}

// --------------------------------------------------
// Step 2 – Specific Data Models
// --------------------------------------------------

interface User {
  id: string;
  email: string;
  role: "ADMIN" | "GUEST" | "MANAGER";
}

interface Product {
  id: string;
  name: string;
  price: number;
}

// --------------------------------------------------
// Step 3 – Simulated API Calls
// --------------------------------------------------

async function fetchUser(): Promise<ApiResponse<User>> {
  return {
    status: "success",
    data: {
      id: "U001",
      email: "raj@example.com",
      role: "ADMIN"
    }
  };
}

async function fetchProduct(): Promise<ApiResponse<Product>> {
  return {
    status: "success",
    data: {
      id: "P001",
      name: "Laptop",
      price: 1200
    }
  };
}

// --------------------------------------------------
// Step 4 – Safe Usage
// --------------------------------------------------

async function runTests() {
  const userResponse = await fetchUser();

  if (userResponse.status === "success") {
    console.log("User email:", userResponse.data.email);
  }

  const productResponse = await fetchProduct();

  if (productResponse.status === "success") {
    console.log("Product price:", productResponse.data.price);
  }

  // userResponse.data.price ❌ Compile-time error
}

runTests();

/*
========================
Architecture Insight
========================

- ApiResponse<T> removes duplication across endpoints.
- T enforces strict typing for each response payload.
- The API envelope remains consistent.
- Generic design improves scalability.

========================
Automation Benefit
========================

- Cleaner API client layer.
- Strong type enforcement across services.
- Safer data mapping in UI tests.
- Easier mocking and stubbing.
*/
