// Q3 – Library Management System (Classes + Objects)
// Run: node Q3_Library_Management_System.js
"use strict";

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      console.log(`"${this.title}" is already issued.`);
      return false;
    }
    this.isIssued = true;
    console.log(`Issued "${this.title}".`);
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      console.log(`"${this.title}" was not issued.`);
      return false;
    }
    this.isIssued = false;
    console.log(`Returned "${this.title}".`);
    return true;
  }
}

const books = [
  new Book("Clean Code", "Robert C. Martin", "ISBN001"),
  new Book("The Pragmatic Programmer", "Andrew Hunt", "ISBN002"),
  new Book("Atomic Habits", "James Clear", "ISBN003", true)
];

function showAvailableBooks() {
  console.log("\\n=== Available Books ===");
  const availableBooks = books.filter((book) => !book.isIssued);
  if (availableBooks.length === 0) console.log("No books are currently available.");
  availableBooks.forEach((book) => console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`));
}

function issueByISBN(isbn) {
  const book = books.find((item) => item.isbn.toLowerCase() === isbn.toLowerCase());
  if (!book) {
    console.log(`No book found with ISBN ${isbn}.`);
    return;
  }
  book.issueBook();
}

// Demonstration: change ISBN002 to test a different book.
showAvailableBooks();
issueByISBN("ISBN002");
showAvailableBooks();
