// Q1 – E-Commerce Product Manager (Classes + Objects)
// Run: node Q1_Ecommerce_Product_Manager.js
"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    if (percent < 0 || percent > 100) {
      throw new RangeError("Discount must be between 0 and 100.");
    }
    this.price = this.price * (1 - percent / 100);
    return this.price;
  }

  getDetails() {
    return `#${this.id} | ${this.name} | ₹${this.price.toFixed(2)} | Category: ${this.category}`;
  }
}

const products = [
  new Product(101, "Keyboard", 850, "Accessories"),
  new Product(102, "Headphones", 1499, "Audio"),
  new Product(103, "Monitor", 8999, "Electronics"),
  new Product(104, "Mouse", 650, "Accessories")
];

products[1].applyDiscount(10);

console.log("=== All Products ===");
products.forEach((product) => console.log(product.getDetails()));

console.log("\\n=== Products Priced Above ₹1000 ===");
const expensiveProducts = products.filter((product) => product.price > 1000);
expensiveProducts.forEach((product) => console.log(product.getDetails()));
