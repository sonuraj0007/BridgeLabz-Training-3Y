// Q10 – Nested Hoisting and Closures
"use strict";

function outer() {
  console.log(count); // undefined: outer's `var count` is hoisted in outer's scope.
  var count = 5;

  function inner() {
    console.log(count); // undefined: inner has its own hoisted local `count`.
    var count = 10;
  }

  inner();
}

outer(); // Output: undefined, undefined

// Hoisting creates separate function execution contexts. The inner `var count`
// shadows outer's count throughout inner(), including before its assignment.
// Arrow version: lexical `this`/`arguments` behavior differs, but `var` hoisting
// inside the arrow function still creates its own local binding.
function outerWithArrow() {
  console.log(count); // undefined
  var count = 5;

  const inner = () => {
    console.log(count); // undefined: inner arrow's local var shadows outer.
    var count = 10;
  };

  inner();
}
outerWithArrow();

// Debug flow (VS Code):
// 1. Set a breakpoint on the first console.log(count) in outer.
// 2. Press F5 and inspect CALL STACK: outer -> script entry point.
// 3. Step over to `var count = 5`, then step into inner().
// 4. In inner, inspect local `count` (undefined before assignment).
// 5. Step out to return to outer, then continue.
