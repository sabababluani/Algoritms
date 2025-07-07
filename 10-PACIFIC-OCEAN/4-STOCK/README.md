# Stock Profit Calculator

## Description

This project includes a function called `maxProfit` that helps determine the **maximum possible profit** from buying and selling a stock based on historical price data.

The function is given an array of numbers representing the price of a stock over the past several days. Its job is to determine **which day to buy** and **which day to sell** in order to achieve the **maximum profit**.

## Task

Implement the following function:

```js
function maxProfit(array) {}
```

Goal

    Buy the stock on one of the days (only once).

    Sell the stock on a later day (only once).

    Return the maximum profit possible from these transactions.

    If no profit can be made, the function should return 0.

Example

```js
maxProfit([2, 1, 3, 3, 8, 2]); // Output: 7
```

Explanation

    Buy on the second day when the price is 1

    Sell on the penultimate day when the price is 8

    Profit = 8 - 1 = 7

Constraints

    You must buy before you sell.

    Prices are non-negative integers.
