# Coin Combination Counter

This project involves writing a JavaScript function that calculates how many different ways you can make a given amount using a set of coins.

## Problem Description

In the United Kingdom, currency is made up of pounds (£) and pence (p).  
There are 8 common coins in circulation:

```javascript
const coins = [1, 2, 5, 10, 20, 50, 100, 200]; // all values in pence
```

Your task is to create a function that receives a targetAmount (in pence) and an array of available coin values.
Function Signature

function countCoinCombinations(targetAmount, coins) {}

Parameters

    targetAmount: The target amount (number, in pence) you want to form.

    coins: An array of coin values (also in pence) you can use to form the amount.

Return Value

The function should return the total number of unique combinations of the given coins that sum up to the targetAmount.
Example Usage

```javascript
countCoinCombinations(5, [1, 2, 5]); // 4
countCoinCombinations(200, [1, 2, 5, 10, 20, 50, 100, 200]); // 73682
```
