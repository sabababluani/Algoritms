# Average Calculator

## Description

This JavaScript program calculates:

1. The **average of all negative numbers** in an array.
2. The **average of all positive numbers** in the same array.
3. The **count of zeros** in the array.

The final result is stored in a variable called `stats`, which is an array with the following structure:


- `stats[0]`: average of negative numbers (or `0` if none)
- `stats[1]`: average of positive numbers (or `0` if none)
- `stats[2]`: count of zeros

## Given

```javascript
const numbers = [5, 3, 13, 48, 7, 0];
```

## Goal

Store the results in this variable:

```
const stats = [negativeAvg, positiveAvg, zeroCount];
```
