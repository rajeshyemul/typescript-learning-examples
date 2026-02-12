# 04 – Async Framework Design

Automation frameworks are built on asynchronous operations.

UI interactions, API calls, waits, and network events are all async.

Most flaky tests are caused by:

- Missing awaits
- Floating promises
- Inconsistent return types
- Hidden async behavior
- Poor retry handling

This section focuses on:

1. Understanding async mistakes
2. Enforcing consistent Promise return types
3. Designing safe async helpers
4. Implementing retry patterns correctly
5. Avoiding floating promises

The goal:

Make async behavior predictable and disciplined.
