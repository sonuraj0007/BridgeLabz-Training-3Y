# JavaScript Debugging Assignment — Q1 to Q10

Each question is in its own `.js` file. The examples use plain JavaScript and Node.js; no external libraries are required.

## Run the files
1. Install Node.js if it is not already installed.
2. Extract this ZIP.
3. Open the extracted folder in VS Code.
4. Open the integrated terminal (`Terminal` → `New Terminal`).
5. Run a file, for example:
   ```bash
   node Q1_Dynamic_Data_Parser.js
   ```
6. Run the pyramid with a custom row count:
   ```bash
   node Q6_Pyramid_Pattern_Generator.js 7
   ```

## Debugging in VS Code
- Open the `.js` file.
- Click the gutter to the left of a line number to set a breakpoint.
- Press `F5` and select the Node.js debugger if prompted.
- Use **Variables**, **Watch**, and **Call Stack** in the Run and Debug panel.
- Step Over (`F10`), Step Into (`F11`), and Step Out (`Shift+F11`).

## Notes
- Q1 treats whitespace-only strings as invalid even though `Number(" ")` evaluates to `0`, as requested by the assignment.
- Q5's original sequence is preserved in comments so you can uncomment it to observe hoisting and the temporal dead zone. The runnable fixed example is below it.
- Q8's invalid strict-mode examples are comments because duplicate parameters and deleting a local binding are syntax errors in strict mode and would prevent the whole file from running.
- Q3 and Q9 report error types and line/index numbers.
