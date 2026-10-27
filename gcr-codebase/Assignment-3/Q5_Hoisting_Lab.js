"use strict";

// Q5 – Hoisting Lab
// Original trap (kept commented because reading `status` before initialization throws):
// console.log(score); // undefined: `var score` is hoisted and initialized to undefined.
// announce();         // Function declarations are hoisted with their function value.
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready"; // `let` is in the temporal dead zone until initialized.
// startGame();
// function startGame() { console.log(status); }

// Corrected version: initialize values before use.
const score = 50;
const status = "ready";
function announce() { console.log("Game started"); }
function startGame() { console.log(status); }
console.log(score);
announce();
startGame();

// Arrow comparison: arrow functions are expressions and are not callable before initialization
// when declared with const/let; they are not hoisted like function declarations.
const announceArrow = () => console.log("Game started (arrow)");
announceArrow();
