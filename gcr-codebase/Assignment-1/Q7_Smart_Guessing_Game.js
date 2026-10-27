// Q7: Compare a guess with a random number from 1 to 50.
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // Change this value to test another guess.

if (userGuess >= 1 && userGuess <= 50) {
    if (userGuess === secretNumber) {
        console.log("Correct guess!");
    } else if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else {
        if (userGuess > secretNumber) {
            console.log("Too high");
        } else {
            console.log("Too low");
        }
    }
} else {
    console.log("Enter a guess between 1 and 50.");
}
console.log(`Secret number: ${secretNumber}`);
