# Discount System

## Task Description

A website offers several types of discounts, represented by the following variables:

```js
const adminSale = 20; // percent discount for admins
const frequentClientSale = 15; // percent discount for frequent clients
const studentSale = 10; // percent discount for students
```

A user wants to purchase products. The process is represented by:

```js
const userBalance = 10;
const cartTotal = 15;

const userIsAdmin = true;
const userIsFrequentClient = false;
const userIsStudent = false;
```

## Your Task

Calculate whether the user can successfully complete the purchase after applying their appropriate discount.

- Assume that admins always get the **highest** discount,
- Students get the **smallest** discount,
- And frequent clients get a discount somewhere in between.

Apply the **best applicable discount** for the user to the cart total.

Then check if the user's balance covers the discounted total.

Assign the result (whether payment was successful) as a boolean to:

```js
let paymentComplete;
```

## Example

If:

- `userIsAdmin` is `true`, the discount is 20%.
- Cart total is 15, so discounted price is `15 * (1 - 0.20) = 12`.
- User balance is 10, which is **less** than 12 → payment is **not** successful.

Therefore:

```js
let paymentComplete = false;
```
