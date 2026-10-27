// Q4: Evaluate five subjects, each out of 100 marks.
const marks = [88, 91, 86, 90, 87];
let totalMarks = 0;
let hasFailedSubject = false;

for (let index = 0; index < marks.length; index++) {
    totalMarks += marks[index];
    if (marks[index] < 35) {
        hasFailedSubject = true;
    }
}
const averageMarks = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;
let result;

if (hasFailedSubject || percentage < 50) {
    result = "Detained";
} else if (percentage >= 85 && !hasFailedSubject) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
}
console.log(`Average: ${averageMarks.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(result);
