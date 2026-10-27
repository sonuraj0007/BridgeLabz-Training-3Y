"use strict";

// Q4 – Debugging Mystery
function showMessage() {
  // In strict mode, assigning to an undeclared identifier throws ReferenceError.
  // Fix: declare the variable in the intended scope.
  const greeting = "Welcome"; // Add this to Watch in VS Code.
  console.log(greeting);
}
showMessage();

// Debug tip: put a breakpoint on console.log, add `greeting` to Watch,
// then inspect the Call Stack. It should show showMessage, then the script entry.
