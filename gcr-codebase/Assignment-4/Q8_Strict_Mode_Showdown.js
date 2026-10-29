// Q8 – Strict Mode Showdown
"use strict";

// Strict mode rejects duplicate parameter names and would fail to parse:
// function demo(a, a) { ... }
// It also rejects assignment to an undeclared variable and deleting an
// unqualified identifier.

function demo(a, b) {
  let total = 10;
  console.log(`Arguments: ${a}, ${b}; total: ${total}`);
  // `delete total` is a syntax error in strict mode. Local variables cannot
  // be deleted. Simply let the variable go out of scope when the function ends.
}

demo(5, 10);

// Non-strict comparison (run separately in a file WITHOUT "use strict"):
// function demo(a, a) {
//   total = 10;        // Creates/sets a global in classic non-strict scripts.
//   delete total;      // Returns false for a non-configurable global property
//                      // in many classic-script environments; behavior varies
//                      // with how the global was created and the environment.
// }
// demo(5, 10);
//
// Correct ES6 version: unique parameters, const/let declarations, no delete
// of local bindings. ES modules are strict mode automatically.
