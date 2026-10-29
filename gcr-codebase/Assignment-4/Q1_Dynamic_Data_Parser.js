// Q1 – Dynamic Data Parser
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

console.log("=== Dynamic Data Parser Report ===");

for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];
  const numberValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);

  // Number("true"), Number("false"), Number("NaN"), Number("100px") and
  // Number(undefined) produce NaN. A blank/whitespace string becomes 0,
  // so explicitly treat whitespace-only strings as invalid for this task.
  const blankString = typeof value === "string" && value.trim() === "";
  const isValidNumber = Number.isFinite(numberValue) && !blankString;

  const report = {
    index: i,
    original: value,
    number: numberValue,
    boolean: booleanValue,
    string: stringValue
  };

  if (isValidNumber) {
    validNumbers.push({ original: value, number: numberValue });
    console.log(`[VALID] ${JSON.stringify(report)}`);
  } else {
    invalidNumbers.push({ original: value, reason: blankString ? "blank string" : "not a finite number" });
    console.log(`[INVALID] ${JSON.stringify(report)} | reason: ${invalidNumbers[invalidNumbers.length - 1].reason}`);
  }
}

console.log("\\nValid numeric values:", validNumbers);
console.log("Invalid values:", invalidNumbers);
console.log(`Summary: ${validNumbers.length} valid, ${invalidNumbers.length} invalid.`);
