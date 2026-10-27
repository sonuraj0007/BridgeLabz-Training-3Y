"use strict";

// Q10 – Nested Hoisting and Closures
function outer() {
  console.log("outer count before assignment:", count); // undefined: local var is hoisted.
  var count = 5;
  function inner() {
    console.log("inner count before assignment:", count); // undefined: inner's own var shadows outer count.
    var count = 10;
    console.log("inner count after assignment:", count); // 10
  }
  inner();
  console.log("outer count after inner:", count); // 5
}
outer();

// Arrow version: arrow functions do not create their own `this`, `arguments`, or `super` binding,
// but they still create their own local lexical environment. The local `count` below still shadows.
function outerArrowDemo() {
  let count = 5;
  const inner = () => {
    console.log("arrow reads outer count:", count); // 5, because no inner `count` is declared here.
  };
  inner();
}
outerArrowDemo();

// Debug tip: break at the first console.log in outer, then step into inner.
// Call Stack: inner -> outer -> script entry. Inspect each function's local Scope.
