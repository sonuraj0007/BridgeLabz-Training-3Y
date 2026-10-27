// Q3: Calculate monthly expenses and add 10% tax.
const categories = ["Food", "Travel", "Rent", "Bills", "Leisure"];
const expenses = [3000, 1200, 7000, 1500, 800];
let totalExpense = 0;

for (let index = 0; index < expenses.length; index++) {
    console.log(`${categories[index]}: Rs. ${expenses[index].toFixed(2)}`);
    totalExpense += expenses[index];
}
const averageExpense = totalExpense / expenses.length;
let finalAmount = totalExpense;
finalAmount += totalExpense * 0.10; // Add 10% tax using +=.

console.log(`Total: Rs. ${totalExpense.toFixed(2)}`);
console.log(`Average: Rs. ${averageExpense.toFixed(2)}`);
console.log(`Final amount after 10% tax: Rs. ${finalAmount.toFixed(2)}`);
