// Q2: Identify JavaScript data types and display them in one table.
const userName = "Sonu";
const userAge = 23;
const isStudent = true;
const skills = ["JavaScript", "Java"];
const userProfile = { city: "Mathura", course: "B.Tech" };
const emptyValue = null;
let notAssigned;

const entries = [
    { label: "Name", value: userName },
    { label: "Age", value: userAge },
    { label: "Student", value: isStudent },
    { label: "Skills", value: skills },
    { label: "Profile", value: userProfile },
    { label: "Empty", value: emptyValue },
    { label: "Not assigned", value: notAssigned }
];

const report = entries.map(entry => ({
    Label: entry.label,
    Value: Array.isArray(entry.value) ? entry.value.join(", ") :
        entry.value !== null && typeof entry.value === "object" ? JSON.stringify(entry.value) :
        String(entry.value),
    Type: Array.isArray(entry.value) ? "array" :
        entry.value === null ? "null" : typeof entry.value
}));
console.table(report);
