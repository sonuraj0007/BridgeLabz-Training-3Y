// Q9 – Shopping Cart Total (Classes + RegExp for Coupon)
// Run: node Q9_Shopping_Cart_Total.js
"use strict";

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity = 1) {
    if (!name || !Number.isFinite(price) || price < 0 ||
        !Number.isInteger(quantity) || quantity < 1) {
      throw new TypeError("Provide a name, non-negative price, and positive whole-number quantity.");
    }
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  applyCoupon(couponCode) {
    // Accept SAVE20 or DISC10 style codes; the number determines discount %.
    const match = /^([A-Z]+)(\d{1,2})$/.exec(couponCode);
    if (!match || !["SAVE", "DISC"].includes(match[1])) {
      throw new Error("Invalid coupon. Use a code such as SAVE20 or DISC10.");
    }

    const discountPercent = Number(match[2]);
    if (discountPercent < 1 || discountPercent > 100) {
      throw new Error("Coupon discount must be between 1% and 100%.");
    }

    return {
      code: couponCode,
      discountPercent,
      discountAmount: this.getTotal() * discountPercent / 100,
      finalTotal: this.getTotal() * (1 - discountPercent / 100)
    };
  }
}

const cart = new Cart();
cart.addItem("T-shirt", 599, 2);
cart.addItem("Backpack", 1299, 1);
cart.addItem("Water Bottle", 299, 1);

console.log("=== Shopping Cart ===");
cart.items.forEach((item) => {
  console.log(`${item.name} × ${item.quantity}: ₹${(item.price * item.quantity).toFixed(2)}`);
});
console.log(`Subtotal: ₹${cart.getTotal().toFixed(2)}`);

const couponCode = "SAVE20"; // Try "DISC10" or an invalid code.
try {
  const couponResult = cart.applyCoupon(couponCode);
  console.log(`Coupon: ${couponResult.code} (${couponResult.discountPercent}% off)`);
  console.log(`Discount: ₹${couponResult.discountAmount.toFixed(2)}`);
  console.log(`Final total: ₹${couponResult.finalTotal.toFixed(2)}`);
} catch (error) {
  console.error(`Coupon error: ${error.message}`);
}
