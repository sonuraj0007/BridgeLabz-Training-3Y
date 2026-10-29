// Q4 – Custom Form Builder (Forms + Classes)
// Open Q4_Custom_Form_Builder.html in a browser.
"use strict";

class FormBuilder {
  constructor(fields, container) {
    this.fields = fields;
    this.container = container;
  }

  render() {
    const form = document.createElement("form");
    form.id = "generatedForm";

    this.fields.forEach((field) => {
      const label = document.createElement("label");
      label.textContent = field.label;

      let control;
      if (field.type === "select") {
        control = document.createElement("select");
        (field.options || []).forEach((optionValue) => {
          const option = document.createElement("option");
          option.value = optionValue;
          option.textContent = optionValue;
          control.appendChild(option);
        });
      } else if (field.type === "textarea") {
        control = document.createElement("textarea");
      } else {
        control = document.createElement("input");
        control.type = field.type || "text";
      }

      control.name = field.name;
      control.required = Boolean(field.required);
      label.appendChild(control);
      form.appendChild(label);
    });

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = this.getFormData(form);
      document.getElementById("output").textContent = JSON.stringify(data, null, 2);
      console.log("Submitted form data:", data);
    });

    this.container.replaceChildren(form);
  }

  getFormData(form = document.getElementById("generatedForm")) {
    const formData = new FormData(form);
    return Object.fromEntries(formData.entries());
  }
}

const formFields = [
  { type: "text", name: "username", label: "Username", required: true },
  { type: "email", name: "email", label: "Email", required: true },
  { type: "select", name: "course", label: "Course", options: ["CSE", "Cloud Computing", "Data Science"], required: true },
  { type: "textarea", name: "notes", label: "Notes", required: false }
];

new FormBuilder(formFields, document.getElementById("formContainer")).render();
