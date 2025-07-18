# Cart Total

You are a developer for an online store.

Your task is to loop through the products selected by the customer and calculate the total cost of their purchase.

## Requirements

- Each product may have a discount, described by the `salePrice` property.
- A customer **cannot** buy more items than are available in stock.
- The `stock` property indicates how many units of the product are currently available in the store.
- The `quantity` property indicates how many units of the product the customer wants to buy.

## Instructions

- Use the product's `salePrice` if it exists; otherwise, use the regular `price`.
- If the requested `quantity` exceeds the available `stock`, limit the quantity to the stock value.
- Calculate the total cost for all valid products and assign it to the variable `cartTotal`.

### Output

Write the final result to the variable:

```js
let cartTotal;
```

Example

```js
const cart = [
  { name: "T-Shirt", price: 25, salePrice: 20, stock: 10, quantity: 2 },
  { name: "Shoes", price: 80, stock: 1, quantity: 3 },
  { name: "Hat", price: 15, stock: 0, quantity: 1 },
];

// Expected total = (2 * 20) + (1 * 80) = 120
let cartTotal = 120;
```
