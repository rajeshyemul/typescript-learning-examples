# 04 – Narrowing

Narrowing is how TypeScript refines types based on runtime checks.

TypeScript observes your code and uses conditions like:
- typeof
- instanceof
- equality checks
- truthy / falsy checks

to safely reduce the possible types of a value.

This section explains:
- how narrowing works
- why it is reliable
- how to use it correctly

Narrowing is essential for writing safe logic with union types.
