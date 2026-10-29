// Q3 – Transaction Validator
"use strict";

class NegativeAmountError extends Error {
  constructor(message) { super(message); this.name = "NegativeAmountError"; }
}
class MissingFieldError extends Error {
  constructor(message) { super(message); this.name = "MissingFieldError"; }
}
class NullTransactionError extends Error {
  constructor(message) { super(message); this.name = "NullTransactionError"; }
}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

for (let index = 0; index < transactions.length; index++) {
  const transaction = transactions[index]; // Set a breakpoint here to inspect each item.
  try {
    if (transaction === null || transaction === undefined) {
      throw new NullTransactionError("Transaction entry is null or undefined");
    }
    if (transaction.id === undefined || transaction.amount === undefined) {
      throw new MissingFieldError("Transaction must include both id and amount");
    }
    if (transaction.amount < 0) {
      throw new NegativeAmountError(`Negative amount: ${transaction.amount}`);
    }

    valid.push(transaction);
    console.log(`[VALID] Transaction ${transaction.id}: ₹${transaction.amount}`);
  } catch (error) {
    invalid.push({ index, transaction, type: error.name, message: error.message });
    console.error(`[INVALID] Index ${index}: ${error.name} — ${error.message}`);
  }
}

console.log("\\n=== Transaction Summary ===");
console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Successful: ${valid.length}; Failed: ${invalid.length}`);
