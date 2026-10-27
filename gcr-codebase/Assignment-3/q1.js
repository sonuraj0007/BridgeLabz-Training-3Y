// Global bonus remains unchanged by local employee status.
let bonus = 5000;
function calculateSalary(isPermanent) {
  let salary = 40000;
  let totalSalary = isPermanent ? salary + bonus : salary;
  console.log(`Permanent: ${isPermanent}, Total Salary: ${totalSalary}`);
}
calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus is still: ${bonus}`);
