# 01 – Type-Safe Test Data

Bad test data is one of the biggest causes of flaky automation.

Common Problems:

- Missing required fields
- Typos in property names
- Wrong role values
- Hardcoded magic strings
- Silent failures due to `any`

In this section, we will:

1. Understand problems with untyped test data
2. Define strict test data models using interfaces
3. Use enums for controlled values
4. Use optional and readonly properties properly
5. Build test data factories for reuse

Goal:

Make test data predictable, reusable, and safe.
