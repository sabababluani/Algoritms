# Online Shop – Purchase Logic

## Task Description

A user wants to buy products on a website. You are given the following variables:

```js
const userBalance = 5;
const cartTotal = 10;
```

The user clicked the **Buy** button.

## Your Task

Check if the user has enough balance to complete the purchase:

- If the user's balance is **greater than or equal to** the total cart amount, the payment is **successful**.
- Otherwise, the user does **not have enough funds**.

Based on the result, print one of the following messages to the console:

- `"Payment successful"`
- `"Insufficient funds"`

## Example

Given:

```js
const userBalance = 5;
const cartTotal = 10;
```

Result:

```js
console.log("Insufficient funds");
```

If instead:

```js
const userBalance = 15;
const cartTotal = 10;
```

Then:

```js
console.log("Payment successful");
```
