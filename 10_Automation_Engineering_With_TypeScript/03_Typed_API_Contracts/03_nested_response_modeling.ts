export {};

/*
 Modeling nested API responses safely.
*/

// --------------------------------------------------
// Step 1 – Define Nested Contracts
// --------------------------------------------------

interface UserProfile {
  email: string;
  role: "ADMIN" | "GUEST" | "MANAGER";
}

interface User {
  id: string;
  profile: UserProfile;
}

interface LoginApiResponse {
  status: "success" | "failure";
  data: {
    user: User;
  };
}

// --------------------------------------------------
// Step 2 – Simulated API Call
// --------------------------------------------------

async function fetchLogin(): Promise<LoginApiResponse> {
  return {
    status: "success",
    data: {
      user: {
        id: "U001",
        profile: {
          email: "raj@example.com",
          role: "ADMIN"
        }
      }
    }
  };
}

// --------------------------------------------------
// Step 3 – Safe Usage
// --------------------------------------------------

async function testLogin() {
  const response = await fetchLogin();

  if (response.status === "success") {
    console.log("User ID:", response.data.user.id);
    console.log("Email:", response.data.user.profile.email);
    console.log("Role:", response.data.user.profile.role);
  }

  // response.data.user.profile.roles ❌ Compile-time error
}

testLogin();

/*
========================
Architecture Insight
========================

- Nested interfaces mirror real API structures.
- Union types restrict allowed values.
- Strong typing prevents deep property mistakes.
- Complex responses become predictable and documented.

========================
Automation Benefit
========================

- Safer deep assertions.
- Reduced runtime errors.
- Clear mapping between API and UI logic.
- Easier maintenance during backend changes.
*/
