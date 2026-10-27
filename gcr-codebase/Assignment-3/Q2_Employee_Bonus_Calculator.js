"use strict";

// Q2 – Employee Bonus Calculator
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Employee Bonus Report ===");
for (const employee of employees) {
  try {
    if (!employee || !("name" in employee) || !("salary" in employee) || !("years" in employee)) {
      throw new Error("Missing employee property");
    }
    const salary = Number(employee.salary);
    const years = Number(employee.years);
    if (!Number.isFinite(salary) || !Number.isFinite(years)) {
      throw new TypeError("Salary and years must convert to finite numbers");
    }
    const bonusRate = years > 3 ? 0.10 : 0.05;
    const bonus = salary * bonusRate;
    console.log(`${employee.name}: salary ₹${salary.toFixed(2)}, service ${years} years, bonus ${(bonusRate * 100)}% = ₹${bonus.toFixed(2)}`);
  } catch (error) {
    console.log(`Employee record error: ${error.name}: ${error.message}`);
  }
}
// Strict mode prevents accidental assignment to undeclared identifiers (implicit globals).
