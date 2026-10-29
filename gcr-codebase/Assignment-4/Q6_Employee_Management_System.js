// Q6 – Employee Management System (Classes + Object Methods)
// Run: node Q6_Employee_Management_System.js
"use strict";

class Employee {
  constructor(id, name, department, monthlySalary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.monthlySalary = monthlySalary;
  }

  getAnnualSalary() {
    return this.monthlySalary * 12;
  }

  applyBonus(percent) {
    if (percent < 0) throw new RangeError("Bonus percent cannot be negative.");
    return this.getAnnualSalary() * (1 + percent / 100);
  }

  getDetails() {
    return `${this.name} (${this.department}) — Annual salary: ₹${this.getAnnualSalary().toLocaleString("en-IN")}`;
  }
}

const employees = [
  new Employee(1, "Amit", "IT", 45000),
  new Employee(2, "Sara", "HR", 38000),
  new Employee(3, "Kiran", "Finance", 52000),
  new Employee(4, "Neha", "IT", 48000),
  new Employee(5, "Rahul", "Operations", 41000)
];

console.log("=== Employee Annual Salaries ===");
employees.forEach((employee) => console.log(employee.getDetails()));

const totalAnnualPayout = employees.reduce(
  (total, employee) => total + employee.getAnnualSalary(),
  0
);
console.log(`\\nTotal annual company payout: ₹${totalAnnualPayout.toLocaleString("en-IN")}`);

console.log(`Amit's annual salary after 10% bonus: ₹${employees[0].applyBonus(10).toLocaleString("en-IN")}`);
