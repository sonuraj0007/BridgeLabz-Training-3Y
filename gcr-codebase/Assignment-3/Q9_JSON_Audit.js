"use strict";

// Q9 – JSON Audit
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
  try {
    const parsed = JSON.parse(rawData[index]);
    if (parsed.user === undefined || parsed.age === undefined) {
      throw new Error("Missing required key: user or age");
    }
    const age = Number(parsed.age);
    if (!Number.isFinite(age)) throw new TypeError("Age must be numeric");
    const entry = { ...parsed, age };
    clean.push(entry);
    if (age < 18) under18.push(entry);
    console.log(`Line ${index + 1}: OK — ${entry.user}, age ${age}`);
  } catch (error) {
    errors.push({ line: index + 1, message: error.message });
    console.log(`Line ${index + 1}: ERROR — ${error.message}`);
    // Execution jumps to catch for this record, then continues with the next loop iteration.
  }
}
console.log("Clean entries:", clean);
console.log("Errors:", errors);
console.log("Under-18 users:", under18);
