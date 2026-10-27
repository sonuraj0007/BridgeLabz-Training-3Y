// Q9: Generate a random arithmetic question and its answer.
const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const randomIndex = Math.floor(Math.random() * operators.length);
const operator = operators[randomIndex];
let correctAnswer;

switch (operator) {
    case "+":
        correctAnswer = firstNumber + secondNumber;
        break;
    case "-":
        correctAnswer = firstNumber - secondNumber;
        break;
    case "*":
        correctAnswer = firstNumber * secondNumber;
        break;
    case "/":
        correctAnswer = Number((firstNumber / secondNumber).toFixed(2));
        break;
}
console.log(`Question: ${firstNumber} ${operator} ${secondNumber} = ?`);
console.log(`Correct answer: ${operator === "/" ? correctAnswer.toFixed(2) : correctAnswer}`);
