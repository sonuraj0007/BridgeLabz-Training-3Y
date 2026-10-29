// Q9 – JSON Audit
"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
const under18 = [];

for (let index = 0; index < rawData.length; index++) {
  const lineNumber = index + 1;
  try {
    const record = JSON.parse(rawData[index]); // Breakpoint: inspect lineNumber and record.
    const missing = [];
    if (record.user === undefined) missing.push("user");
    if (record.age === undefined) missing.push("age");

    if (missing.length > 0) {
      throw new Error(`Missing required key(s): ${missing.join(", ")}`);
    }

    const age = Number(record.age);
    if (!Number.isFinite(age)) {
      throw new TypeError("age is not a valid number");
    }

    const normalized = { ...record, age };
    clean.push(normalized);
    if (age < 18) under18.push(normalized);
    console.log(`[OK] Line ${lineNumber}: ${JSON.stringify(normalized)}`);
  } catch (error) {
    errors.push({ line: lineNumber, input: rawData[index], type: error.name, message: error.message });
    console.error(`[ERROR] Line ${lineNumber}: ${error.name}: ${error.message}`);
  }
}

console.log("\\n=== JSON Audit Summary ===");
console.log("Clean records:", clean);
console.log("Errors:", errors);
console.log("Under-18 users:", under18);
console.log(`Valid: ${clean.length}; Invalid: ${errors.length}`);
