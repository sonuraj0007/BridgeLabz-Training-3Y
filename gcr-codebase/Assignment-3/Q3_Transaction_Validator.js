"use strict";

// Q3 – Transaction Validator
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];
const valid = [];
const invalid = [];

class NegativeAmountError extends Error {}
class MissingFieldError extends Error {}
class NullTransactionError extends Error {}

for (let index = 0; index < transactions.length; index++) {
  const transaction = transactions[index]; // Set a VS Code breakpoint here to inspect index/transaction.
  try {
    if (transaction === null) throw new NullTransactionError("Transaction is null");
    if (transaction.id === undefined || transaction.amount === undefined) {
      throw new MissingFieldError("Transaction is missing id or amount");
    }
    if (transaction.amount < 0) throw new NegativeAmountError("Amount cannot be negative");
    valid.push(transaction);
    console.log(`Transaction ${transaction.id}: VALID`);
  } catch (error) {
    invalid.push({ index: index + 1, transaction, type: error.name, message: error.message });
    console.log(`Transaction #${index + 1}: INVALID — ${error.name}: ${error.message}`);
  }
}
console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Summary: ${valid.length} successful, ${invalid.length} failed`);
