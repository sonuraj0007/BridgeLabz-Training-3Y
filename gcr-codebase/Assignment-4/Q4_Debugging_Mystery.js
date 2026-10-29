// Q4 – Debugging Mystery
"use strict";

function showMessage() {
  // FIX: declare the variable. In strict mode, assigning to an undeclared
  // identifier throws ReferenceError instead of creating a global property.
  const greeting = "Welcome";
  console.log(greeting); // Add a Watch for `greeting`; set a breakpoint here.
}

showMessage();

// VS Code debugger practice:
// 1. Open this file and click left of the console.log line to add a breakpoint.
// 2. Run and Debug (F5), choose Node.js.
// 3. Add `greeting` under WATCH.
// 4. Inspect CALL STACK: showMessage -> script/module entry point.
// 5. To observe the original error, temporarily replace the declaration with:
//    greeting = "Welcome";
//    This throws ReferenceError in strict mode.
