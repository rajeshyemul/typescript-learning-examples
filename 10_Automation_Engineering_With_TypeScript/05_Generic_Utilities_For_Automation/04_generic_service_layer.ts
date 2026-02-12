export {};

/*
 Generic Service Layer for API handling.

 Goal:
 - Centralize API request logic
 - Enforce type-safe responses
 - Standardize error handling
*/

// --------------------------------------------------
// Generic API Envelope
// --------------------------------------------------

interface ApiResponse<T> {
  status: "success" | "failure";
  data: T;
  message?: string;
}

// --------------------------------------------------
// Generic HTTP Client Interface
// --------------------------------------------------

interface HttpClient {
  get<T>(url: string): Promise<ApiResponse<T>>;
  post<T>(url: string, body: unknown): Promise<ApiResponse<T>>;
}

// --------------------------------------------------
// Mock HTTP Client Implementation
// --------------------------------------------------

class MockHttpClient implements HttpClient {
  async get<T>(url: string): Promise<ApiResponse<T>> {
    console.log(`GET request to ${url}`);

    return {
      status: "success",
      data: {} as T
    };
  }

  async post<T>(url: string, body: unknown): Promise<ApiResponse<T>> {
    console.log(`POST request to ${url}`, body);

    return {
      status: "success",
      data: {} as T
    };
  }
}

// --------------------------------------------------
// Example Domain Model
// --------------------------------------------------

interface User {
  id: string;
  email: string;
}

// --------------------------------------------------
// Service Layer
// --------------------------------------------------

class UserService {
  constructor(private readonly http: HttpClient) {}

  async getUser(userId: string): Promise<User> {
    const response = await this.http.get<User>(`/users/${userId}`);

    if (response.status !== "success") {
      throw new Error("Failed to fetch user");
    }

    return response.data;
  }

  async createUser(user: User): Promise<User> {
    const response = await this.http.post<User>("/users", user);

    if (response.status !== "success") {
      throw new Error("Failed to create user");
    }

    return response.data;
  }
}

// --------------------------------------------------
// Example Usage
// --------------------------------------------------

(async () => {
  const httpClient = new MockHttpClient();
  const userService = new UserService(httpClient);

  const user = await userService.getUser("U001");

  console.log("Fetched user:", user);
})();

/*
========================
Architecture Insight
========================

- HTTP logic is centralized in a client abstraction.
- Generics enforce type-safe response handling.
- Service layer separates domain logic from transport logic.
- API envelope is consistently enforced.
- This promotes maintainability and scalability in test automation frameworks.

========================
Automation Benefit
========================

- Cleaner test code (no raw fetch calls).
- Easier mocking in tests.
- Safer API contract usage.
- Scalable service architecture.
- Encourages better design patterns in test automation.
*/
