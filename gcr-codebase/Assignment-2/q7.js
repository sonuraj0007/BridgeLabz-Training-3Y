// Evaluate feedback words and sentiment.
let feedback = "Great product! Fast delivery and amazing sound quality!";
let words = feedback.trim().split(/\s+/);
let lowerFeedback = feedback.toLowerCase();
let needsImprovement = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");
console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${words.length}`);
console.log(needsImprovement ? "Needs Improvement" : "Positive Feedback");
