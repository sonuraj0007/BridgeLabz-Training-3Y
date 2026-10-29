// Q2 – Student Form Validator (Forms + RegExp)
// Open Q2_Student_Form_Validator.html in a browser.
"use strict";

const studentForm = document.querySelector("#studentForm");
const fieldRules = {
  name: {
    pattern: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
    message: "Use alphabets only (spaces between names are allowed)."
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Enter an email such as example@domain.com."
  },
  phone: {
    pattern: /^\d{10}$/,
    message: "Phone number must contain exactly 10 digits."
  },
  password: {
    pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
    message: "Password needs an uppercase letter, a number, and a special character."
  }
};

function validateField(fieldName) {
  const input = studentForm.elements[fieldName];
  const errorElement = document.getElementById(`${fieldName}Error`);
  const value = input.value.trim();
  const rule = fieldRules[fieldName];
  const isValid = rule.pattern.test(value);

  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
  errorElement.textContent = isValid ? "" : rule.message;
  return isValid;
}

Object.keys(fieldRules).forEach((fieldName) => {
  studentForm.elements[fieldName].addEventListener("input", () => validateField(fieldName));
});

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const isFormValid = Object.keys(fieldRules).map(validateField).every(Boolean);
  const result = document.getElementById("result");

  if (isFormValid) {
    result.textContent = "Registration form is valid!";
    result.style.color = "#198754";
    console.log("Valid student form submitted.");
  } else {
    result.textContent = "Please correct the highlighted fields.";
    result.style.color = "#dc3545";
  }
});
