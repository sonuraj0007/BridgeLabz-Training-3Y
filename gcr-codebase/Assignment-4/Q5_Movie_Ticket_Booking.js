// Q5 – Movie Ticket Booking (Objects + RegExp)
// Open Q5_Movie_Ticket_Booking.html in a browser.
"use strict";

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = bookingForm.elements.name.value.trim();
  const email = bookingForm.elements.email.value.trim();
  const seatsText = bookingForm.elements.seats.value.trim();
  const seats = Number(seatsText);

  const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorMessages = [];

  if (!namePattern.test(name)) errorMessages.push("Name must contain alphabets only.");
  if (!emailPattern.test(email)) errorMessages.push("Enter a valid email address.");
  if (!/^\d+$/.test(seatsText) || !Number.isInteger(seats) || seats < 1 || seats > 10) {
    errorMessages.push("Seats must be a whole number from 1 to 10.");
  }

  const errorElement = document.getElementById("error");
  const ticketElement = document.getElementById("ticket");

  if (errorMessages.length > 0) {
    errorElement.textContent = errorMessages.join(" ");
    errorElement.style.color = "#dc3545";
    ticketElement.textContent = "Booking not created. Fix the errors above.";
    return;
  }

  errorElement.textContent = "";
  const booking = { name, email, seats };
  ticketElement.innerHTML = "";
  const heading = document.createElement("h2");
  heading.textContent = "Booking Confirmed";
  const details = document.createElement("p");
  details.textContent = `Name: ${booking.name} | Email: ${booking.email} | Seats: ${booking.seats}`;
  ticketElement.append(heading, details);
  console.log("Ticket booking:", booking);
});
