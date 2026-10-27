// Generate eight scores and analyze performance.
let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
let displayedScores = scores.map(score => `${score}`);
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
let passed = scores.filter(score => score >= 50).length;
console.log(`Scores: ${displayedScores.join(", ")}
Highest: ${highest}
Lowest: ${lowest}
Average: ${average.toFixed(2)}
Passed: ${passed}/${scores.length}`);
