# Leap Year Calculation

## Task Description

You are given a variable:

```js
const year = 2024;
```

## Leap Year Rules

A year is a leap year if:

- It is divisible by 4,  
  **except** for years that are divisible by 100,  
  **unless** those years are also divisible by 400.

In other words:

- If the year is divisible by 400, it **is** a leap year.
- Else if the year is divisible by 100, it **is not** a leap year.
- Else if the year is divisible by 4, it **is** a leap year.
- Otherwise, it is **not** a leap year.

## Your Task

Calculate whether the given year is a leap year and assign the result (`true` or `false`) to the boolean variable:

```js
let isLeapYear;
```

## Example

For:

```js
const year = 2024;
```

Since 2024 is divisible by 4 and not by 100, it **is** a leap year:

```js
let isLeapYear = true;
```
