// Classify numbers from 1 to 30.
let numbers = [];
let results = [];
for (let number = 1; number <= 30; number++) numbers.push(number);
for (let number of numbers) {
  let label;
  if (number % 3 === 0 && number % 5 === 0) label = "FizzBuzz";
  else if (number % 2 === 0) label = "Even";
  else label = "Odd";
  results.push(`${number}: ${label}`);
}
console.log(results.join("\n"));
