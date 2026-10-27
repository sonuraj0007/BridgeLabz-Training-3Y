"use strict";

// Q8 – Strict Mode Showdown
// Original: `function demo(a, a) { total = 10; delete total; }`
// Strict mode rejects duplicate parameter names with SyntaxError before execution.
// In non-strict classic scripts, duplicate parameters are allowed; assigning to undeclared
// `total` creates a global in many classic-script environments, while `delete total`
// is invalid for an unqualified identifier (and may throw SyntaxError in strict mode).

function demo(first, second) {
  let total = 10; // Correctly declared local variable.
  console.log(`first=${first}, second=${second}, total=${total}`);
}
demo(5, 10);

// Use a separate file without "use strict" to test sloppy-mode behavior reliably.
// Node.js modules and some execution environments have additional strictness rules.
