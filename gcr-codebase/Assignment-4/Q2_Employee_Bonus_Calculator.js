// Q2 – Employee Bonus Calculator
"use strict";

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

    const name = String(employee.name);
    const salary = Number(employee.salary);
    const years = Number(employee.years);

    if (!Number.isFinite(salary) || !Number.isFinite(years)) {
      throw new TypeError("Salary or years could not be converted to a valid number");
    }

    const bonusRate = years > 3 ? 0.10 : 0.05;
    const bonus = salary * bonusRate;
    const totalPay = salary + bonus;

    console.log(
      `${name}: Salary ₹${salary.toLocaleString("en-IN")}, ` +
      `Experience ${years} year(s), Bonus ${(bonusRate * 100).toFixed(0)}% = ` +
      `₹${bonus.toLocaleString("en-IN")}, Total ₹${totalPay.toLocaleString("en-IN")}`
    );
  } catch (error) {
    console.error(`Employee record error: ${error.name}: ${error.message}`);
  }
}
