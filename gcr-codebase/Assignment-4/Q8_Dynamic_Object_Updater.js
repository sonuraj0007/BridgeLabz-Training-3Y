// Q8 – Dynamic Object Updater
// Open Q8_Dynamic_Object_Updater.html in a browser.
"use strict";

const user = { name: "John", email: "john@mail.com", age: 21 };
const userForm = document.getElementById("userForm");
const userOutput = document.getElementById("userOutput");

// Populate the form with the current object values.
userForm.elements.name.value = user.name;
userForm.elements.email.value = user.email;
userForm.elements.age.value = user.age;
renderUser();

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Update the same object from the submitted form values.
  user.name = userForm.elements.name.value.trim();
  user.email = userForm.elements.email.value.trim();
  user.age = Number(userForm.elements.age.value);

  renderUser();
  console.log("Updated user object:", user);
});

function renderUser() {
  userOutput.textContent = JSON.stringify(user, null, 2);
}
