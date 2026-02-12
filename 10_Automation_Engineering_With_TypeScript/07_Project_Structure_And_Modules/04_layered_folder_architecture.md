# 04 – Layered Folder Architecture

A scalable automation framework must follow clear layer separation.

Without structure:

- Pages call services directly
- Services call tests
- Utilities are scattered everywhere
- Circular dependencies appear
- Refactoring becomes painful

The solution:

Use layered architecture.

---

## Recommended Structure

src/
├── tests/
├── pages/
├── elements/
├── services/
├── models/
├── utils/
├── config/
└── core/


---

## Layer Responsibilities

### 1. tests/

- Contains test files only.
- Calls page objects and services.
- Should NOT contain business logic.
- Should NOT contain raw selectors.

Rule:
Tests orchestrate. They do not implement logic.

---

### 2. pages/

- Page Object Models.
- Encapsulate UI behavior.
- Use Element wrappers.
- Should NOT contain raw API calls.

Rule:
Pages represent application state.

---

### 3. elements/

- Generic element wrappers.
- Standardized click/fill/wait logic.
- Logging and retry integration.

Rule:
All UI interaction flows through this layer.

---

### 4. services/

- API client logic.
- Typed API contracts.
- No UI logic.
- No test logic.

Rule:
Services handle backend communication only.

---

### 5. models/

- Type definitions.
- Interfaces.
- Domain models.
- API contracts.

Rule:
Models contain types only. No behavior.

---

### 6. utils/

- Generic helpers.
- Retry utilities.
- Async helpers.
- Data mappers.

Rule:
Reusable logic shared across layers.

---

### 7. config/

- Environment configuration.
- Test configuration.
- Global constants.

Rule:
No business logic.

---

### 8. core/

- Framework bootstrap logic.
- Base classes.
- Dependency injection setup.

Rule:
Foundation layer of the framework.

---

## Layer Flow (Important)

Allowed flow:

tests → pages → elements
tests → services
pages → elements
services → models
utils → models

Not Allowed

elements → tests
models → pages
services → pages
tests → elements (directly)


This prevents tight coupling.

---

## Why Layering Matters

Without layering:

- Hard to debug
- Hard to scale
- Hard to onboard new engineers
- High risk of circular imports

With layering:

- Clean separation
- Predictable structure
- Clear boundaries
- Scalable growth

---

## Senior-Level Principle

Each layer must:

- Have a single responsibility.
- Expose a clear public API.
- Avoid depending on higher layers.
- Be independently testable.

Architecture is what makes frameworks survive beyond 1 year.
