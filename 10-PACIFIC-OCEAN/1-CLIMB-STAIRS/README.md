# Climb Stairs (Dynamic Programming)

## Description

This project implements a function that calculates the number of unique ways to climb a staircase with a given number of steps, where you can take either **1** or **2** steps at a time.

The function should follow the Fibonacci pattern, where:

- To reach step `n`, you can either come from step `n - 1` (1 step) or from step `n - 2` (2 steps).

---

## Function Signature

```javascript
function climbStairs(num) {}
```

    Parameter:

        num (Number): The number of steps in the staircase.

    Returns:

        A number representing the total number of unique ways to climb the staircase.
