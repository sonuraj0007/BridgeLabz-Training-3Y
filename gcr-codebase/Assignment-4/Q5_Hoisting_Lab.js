// Q5 – Hoisting Lab: The Sequence Trap
"use strict";

// Original sequence (uncomment to test):
// console.log(score); // undefined: var declaration is hoisted and initialized.
// announce();         // Works: function declaration is hoisted.
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() { console.log(status); }

// Important: `status` is in its temporal dead zone until its declaration runs.
// In the original sequence, startGame() is called after `let status = "ready"`,
// so it prints "ready". Calling it before that declaration would throw ReferenceError.

console.log("\\n=== Fixed version ===");
const score = 50;
const status = "ready";

function announce() {
  console.log("Game started");
}
function startGame() {
  console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow functions are expressions assigned to variables; they are not hoisted
// like function declarations. Call them only after initialization.
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(status);

announceArrow();
startGameArrow();
