// Q8: Project salary over five years with annual increments.
let currentSalary = 400000;
const annualIncrementRate = 8;
const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * annualIncrementRate / 100;
    currentSalary = Math.round(currentSalary);
    salaryProjection.push({ Year: year, "Annual Salary (Rs.)": currentSalary });
}
console.table(salaryProjection);
