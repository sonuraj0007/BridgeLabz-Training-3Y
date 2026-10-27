// Q5: Recommend an activity using weather conditions.
const temperature = 12;
const isRaining = false;
const windSpeed = 25;

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35 && !isRaining) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else if (!isRaining && (temperature >= 15 || windSpeed <= 20)) {
    console.log("Perfect day for a walk.");
} else {
    console.log("Perfect day for a walk.");
}
