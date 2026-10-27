"use strict";

// Q7 – Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {}
class DivisionByZeroError extends Error {}
class NegativeRootError extends Error {}

function calculate(operation, a, b) {
  switch (operation) {
    case "add": return a + b;
    case "divide":
      if (b === 0) throw new DivisionByZeroError("Cannot divide by zero");
      return a / b;
    case "power": return a ** b;
    case "root":
      if (a < 0) throw new NegativeRootError("Square root of a negative number is not real");
      return Math.sqrt(a);
    case "subtract": return a - b;
    default: throw new InvalidOperationError(`Unknown operation: ${operation}`);
  }
}

console.log("=== Smart Calculator Summary ===");
for (const operation of operations) {
  try {
    const result = calculate(operation, num1, num2);
    console.log(`${operation.padEnd(8)} | inputs: ${num1}, ${num2} | result: ${result}`);
  } catch (error) {
    console.log(`${operation.padEnd(8)} | ERROR ${error.name}: ${error.message}`);
  }
}
// Bonus check for an unrecognized operation:
try {
  calculate("multiply", num1, num2);
} catch (error) {
  console.log(`Unknown operation check: ${error.name}: ${error.message}`);
}
