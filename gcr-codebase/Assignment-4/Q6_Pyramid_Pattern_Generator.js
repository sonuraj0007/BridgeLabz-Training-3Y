// Q6 – Pyramid Pattern Generator
"use strict";

const rawLimit = process.argv[2];
const parsedLimit = rawLimit === undefined ? 5 : Number(rawLimit);
const limit = Number.isInteger(parsedLimit) && parsedLimit > 0 ? parsedLimit : 5;

console.log(`=== Pyramid (${limit} rows) ===`);
for (let row = 1; row <= limit; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += "* ";
  }
  console.log(line.trimEnd()); // Breakpoint: inspect row, col, and line.
}

// To run with a custom limit in the VS Code terminal:
// node Q6_Pyramid_Pattern_Generator.js 7
//
// var experiment: replace `let row` / `let col` with `var row` / `var col`.
// Output remains the same for this synchronous loop, but var is function-scoped
// rather than block-scoped. After the loop, var variables remain accessible.
// Strict mode catches assignments to undeclared variables, but does not prevent
// var redeclaration. Example error: `for (i = 1; i <= limit; i++)` throws
// ReferenceError because `i` was never declared.
