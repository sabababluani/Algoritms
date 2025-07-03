# How is My Bob Studying? Part 2

## Task Description

You are given a variable representing Bob's test results over an unknown number of tests:

```js
const BobsTestResults = [10, 20, 40, 50]; // list of scores, variable length
```

## New Conditions

- To be considered **talented but lazy**, Bob must have an average improvement of at least **2 points per test**.
- To be considered a **good son**, Bob must have an average improvement of at least **5 points per test**.

> Note: You cannot check each individual test score progression because the total number of tests can vary. Instead, compare only the **first** and **last** scores to calculate the average improvement.

## Your Task

1. Calculate the average improvement per test as:

```
averageIncrease = (lastScore - firstScore) / (numberOfTests - 1)
```

2. Based on the average increase:

- If the average increase is **2 or more but less than 5**, print:  
  `"I don’t know, he’s talented but lazy."`
- If the average increase is **5 or more**, print:  
  `"You have a good son, ma’am, don’t worry."`
- Otherwise, print:  
  `"Oh Bob, Boboo."`

## Example

For:

```js
const BobsTestResults = [10, 13, 14, 16];
```

- Difference between last and first score: `16 - 10 = 6`
- Number of intervals: `4 - 1 = 3`
- Average increase: `6 / 3 = 2`

Since average increase is exactly 2, output:

```
I don’t know, he’s talented but lazy.
```
