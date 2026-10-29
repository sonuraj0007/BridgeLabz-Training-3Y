// Q7 – Login Form Validation using RegExp
// Open Q7_Login_Form_Validation.html in a browser.
"use strict";

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const username = form.elements.username.value;
  const password = form.elements.password.value;
  const errors = [];

  if (username.length < 5) {
    errors.push("Username must contain at least 5 characters.");
  }
  if (password.length < 8) {
    errors.push("Password must contain at least 8 characters.");
  }
  if (!/[0-9]/.test(password)) errors.push("Password must include a number.");
  if (!/[A-Z]/.test(password)) errors.push("Password must include an uppercase letter.");
  if (!/[a-z]/.test(password)) errors.push("Password must include a lowercase letter.");
  if (!/[^A-Za-z0-9]/.test(password)) errors.push("Password must include a special character.");

  const messageElement = document.getElementById("messages");
  if (errors.length > 0) {
    messageElement.textContent = errors.join("\\n");
    messageElement.style.color = "#dc3545";
    console.warn("Login validation failed:", errors);
  } else {
    messageElement.textContent = "Validation successful! Login form is ready to submit.";
    messageElement.style.color = "#198754";
    console.log("Login validation passed for username:", username);
  }
});
