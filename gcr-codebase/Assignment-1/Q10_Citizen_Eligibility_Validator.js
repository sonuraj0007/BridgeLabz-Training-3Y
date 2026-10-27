// Q10: Check eligibility using age and citizenship.
// Note: "Eligible for all services" and "Eligible to vote only"
// overlap in the question. We use 21+ for all services and 18–20 for vote only.
const age = 19;
const isCitizen = true;

if (isCitizen) {
    if (age >= 21) {
        console.log("Eligible for all services.");
    } else if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only.");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18 && !isCitizen) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
