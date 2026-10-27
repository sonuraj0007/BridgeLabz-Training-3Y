"use strict";

// Q6 – Pyramid Pattern Generator
// Set PATTERN_ROWS to a number from the command line, e.g. `node Q6_Pyramid_Pattern_Generator.js 6`.
// Default is 5. In a browser, replace this with Number(prompt("Rows?")) if desired.
const requestedRows = Number(process.argv[2]);
const rows = Number.isInteger(requestedRows) && requestedRows > 0 ? requestedRows : 5;

console.log(`=== Pyramid (${rows} rows) ===`);
for (let row = 1; row <= rows; row++) {
  let line = "";
  for (let column = 1; column <= row; column++) {
    line += "* ";
  }
  console.log(line.trimEnd());
}

// Try changing `let row` to `var row` and step through the loops.
// `var` is function-scoped (or script-scoped here), while `let` is block-scoped.
// With synchronous console.log inside the loop, the visible pattern is the same.
// An undeclared loop variable (e.g. `for (i = 0; ...)`) throws in strict mode.
