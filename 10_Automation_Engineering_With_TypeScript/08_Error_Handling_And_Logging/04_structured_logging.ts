export {};

/*
 Structured Logging Utility

 Goal:
 - Standardize log format
 - Support log levels
 - Include metadata
*/

// --------------------------------------------------
// Log Levels
// --------------------------------------------------

type LogLevel = "INFO" | "WARN" | "ERROR" | "DEBUG";

// --------------------------------------------------
// Log Entry Structure
// --------------------------------------------------

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, unknown>;
}

// --------------------------------------------------
// Logger Class
// --------------------------------------------------

class Logger {
  private format(entry: LogEntry): string {
    return JSON.stringify(entry);
  }

  private log(entry: LogEntry): void {
    const formatted = this.format(entry);

    switch (entry.level) {
      case "ERROR":
        console.error(formatted);
        break;
      case "WARN":
        console.warn(formatted);
        break;
      default:
        console.log(formatted);
    }
  }

  info(message: string, context?: Record<string, unknown>): void {
    this.log({
      level: "INFO",
      message,
      timestamp: new Date().toISOString(),
      context
    });
  }

  warn(message: string, context?: Record<string, unknown>): void {
    this.log({
      level: "WARN",
      message,
      timestamp: new Date().toISOString(),
      context
    });
  }

  error(message: string, context?: Record<string, unknown>): void {
    this.log({
      level: "ERROR",
      message,
      timestamp: new Date().toISOString(),
      context
    });
  }

  debug(message: string, context?: Record<string, unknown>): void {
    this.log({
      level: "DEBUG",
      message,
      timestamp: new Date().toISOString(),
      context
    });
  }
}

// --------------------------------------------------
// Example Usage
// --------------------------------------------------

const logger = new Logger();

logger.info("Login started", { user: "admin" });
logger.warn("Slow response detected", { responseTimeMs: 1500 });
logger.error("Login failed", { reason: "Invalid credentials" });
logger.debug("Internal state", { step: "before submit" });

/*
========================
Architecture Insight
========================

- Logs follow a structured JSON format.
- Log levels categorize severity.
- Context allows attaching metadata.
- Logging is centralized in one utility.

========================
Automation Benefit
========================

- Easier CI debugging.
- Machine-readable logs.
- Cleaner integration with reporting tools.
- Consistent log formatting across framework.
*/

/* 
Additional Benefits of Structured Logging:
- It allows for better log analysis and monitoring by providing a consistent format that can be easily parsed by log management tools.
- It enables more effective debugging and troubleshooting by including contextual information that can help identify the root cause of issues.
- It improves the overall observability of the test automation framework, making it easier to track the flow of execution and identify bottlenecks or failures.
- It promotes better design patterns in test automation by encouraging developers to think about the information they want to capture in logs and how it can be structured for maximum usefulness.
- It can be easily extended to include additional log levels or metadata fields as needed, providing flexibility for different testing scenarios.
- It enhances the developer experience by providing clearer and more informative logs, making it easier to understand what is happening during test execution.
- It can be integrated with centralized logging systems to provide real-time insights into test runs, improving the efficiency of debugging and monitoring in CI pipelines.
- It promotes better collaboration among team members by providing a standardized logging format that everyone can understand and use effectively.
- It can help identify patterns and trends in test failures over time, allowing for proactive improvements to the test automation framework.
*/

// Why Structured Logs Matter
// Instead of:
// console.log("Login failed: Invalid credentials");
/* 
With structured logging:

{
  "level": "ERROR",
  "message": "Login failed",
  "timestamp": "2026-02-12T10:00:00Z",
  "context": {
    "reason": "Invalid credentials"
  }
}

- Logs become machine-readable.
- Context is easily searchable.
- Better for CI debugging.
- Integrates well with log management tools.
- Encourages thoughtful logging practices.
*/