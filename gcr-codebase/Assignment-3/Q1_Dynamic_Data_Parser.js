"use strict";

// Q1 – Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

console.log("=== Dynamic Data Parser Report ===");
for (let i = 0; i < apiData.length; i++) {
  const value = apiData[i];
  const numberValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);

  // Number("true"), Number("false"), Number("NaN"), Number(" "), and Number("100px")
  // demonstrate that conversion may produce NaN or zero; blank strings become 0.
  // Treat blank/whitespace strings and the listed invalid inputs as invalid by policy.
  const isBlankString = typeof value === "string" && value.trim() === "";
  const isInvalidByPolicy = Number.isNaN(numberValue) || isBlankString ||
    (typeof value === "string" && value.trim() === "100px") ||
    (typeof value === "string" && value.trim().toLowerCase() === "nan");

  const report = `#${i + 1}: value=${stringValue}, Number=${numberValue}, Boolean=${booleanValue}, String="${stringValue}"`;
  if (isInvalidByPolicy) {
    invalidNumbers.push(value);
    console.log(`[INVALID] ${report}`);
  } else {
    validNumbers.push(numberValue);
    console.log(`[VALID]   ${report}`);
  }
}
console.log("Valid numeric data:", validNumbers);
console.log("Invalid data:", invalidNumbers);
