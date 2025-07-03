# 🛍️ Auto-Shopping Bot – Discount Check

## Task Description

You're building a simple **auto-shopping bot**.

You are given the following variables:

```javascript
const total = 1500; // total price of the product
const salePercentage = 18; // current discount percentage
const targetDiscount = 100; // minimum desired savings
```

## Objective

1. Calculate the **discount amount** based on `salePercentage`.
2. If the **calculated discount is greater than or equal to** the `targetDiscount`, then the item **can be purchased**.
3. Store the result in a boolean variable called `canBuy`.

---

## Example

```javascript
const total = 1500;
const salePercentage = 18;
const targetDiscount = 100;

const discountAmount = (total * salePercentage) / 100;
let canBuy = discountAmount >= targetDiscount; // true
```

✅ `canBuy` will be `true` only if the discount amount is sufficient.
