// Q7 – Smart Calculator
"use strict";

class InvalidOperationError extends Error {
  constructor(operation) {
    super(`Unsupported operation: ${operation}`);
    this.name = "InvalidOperationError";
  }
}
class DivisionByZeroError extends Error {
  constructor() { super("Cannot divide by zero"); this.name = "DivisionByZeroError"; }
}
class NegativeRootError extends Error {
  constructor(value) { super(`Cannot calculate a real square root of ${value}`); this.name = "NegativeRootError"; }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

function calculate(operation, a, b) {
  switch (operation) {
    case "add": return a + b;
    case "subtract": return a - b;
    case "divide":
      if (b === 0) throw new DivisionByZeroError();
      return a / b;
    case "power": return a ** b;
    case "root":
      if (a < 0) throw new NegativeRootError(a);
      return Math.sqrt(a);
    default: throw new InvalidOperationError(operation);
  }
}

console.log("=== Smart Calculator Summary ===");
for (const operation of operations) {
  try {
    const secondOperand = operation === "root" ? undefined : num2;
    const result = calculate(operation, num1, secondOperand);
    console.log(`${operation.toUpperCase()}: ${result}`);
  } catch (error) {
    console.error(`${operation.toUpperCase()} failed — ${error.name}: ${error.message}`);
  }
}

// Test invalid operation by calling calculate("multiply", num1, num2) in a try/catch.
