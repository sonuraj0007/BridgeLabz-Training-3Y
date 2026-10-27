// Apply category discounts and a cart-wide discount if eligible.
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];
let originalTotal = cart.reduce((sum, product) => sum + product.price, 0);
let discountedPrices = [];
for (let product of cart) {
  let discount = 0;
  if (product.category === "electronics") discount = 0.10;
  else if (product.category === "fashion") discount = 0.05;
  let finalPrice = product.price * (1 - discount);
  discountedPrices.push(finalPrice);
  console.log(`${product.item}: Rs. ${finalPrice.toFixed(2)}`);
}
let total = discountedPrices.reduce((sum, price) => sum + price, 0);
if (originalTotal > 50000) total *= 0.95;
console.log(`Original total: Rs. ${originalTotal.toFixed(2)}`);
console.log(`Final total: Rs. ${total.toFixed(2)}`);
