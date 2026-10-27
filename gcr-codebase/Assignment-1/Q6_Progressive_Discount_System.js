// Q6: Apply a discount according to purchase amount.
const purchaseAmount = 6500;
let discountPercentage = 0;

if (purchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
}
const discountAmount = purchaseAmount * discountPercentage / 100;
const finalPrice = Math.round(purchaseAmount - discountAmount);

console.log(`Original total: Rs. ${purchaseAmount}`);
console.log(`Discount percentage: ${discountPercentage}%`);
console.log(`Final price: Rs. ${finalPrice}`);
