# 🔢 Evens vs Odds — Valid Pair Insertion Counter

This function determines how many valid pairs exist in an array where a given number can be inserted between **adjacent elements** based on specific rules about **even and odd numbers**.

## 📌 Problem Description

Write a function:

```javascript
function availableCouple(array: number[], num: number): number
```

It receives an array of numbers and a number (num) to insert. It should return the number of valid positions between pairs of neighboring elements where num can be inserted based on the following rules:
📐 Rules

    If num is even, it can be inserted between two neighbors only if at least one of the neighbors is even.

        ❌ Can't insert if both neighbors are odd

    If num is odd, it can be inserted only if at least one of the neighbors is odd.

        ❌ Can't insert if both neighbors are even

🔁 Function Signature

```javascript
function availableCouple(array, num) {}
```
