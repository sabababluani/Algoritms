# Pascal's Triangle Generator

## Description

This project includes a function called `pascalTriangle` that generates the first `n` rows of **Pascal's Triangle** as a nested array.

Each number in Pascal's Triangle is the **sum of the two numbers directly above it**.

## Function

```js
function pascalTriangle(num) {}

    Input: num — the number of rows to generate.

    Output: An array of arrays, where each inner array represents a row of Pascal's Triangle.
```

Examples
Input: 1

[
[1]
]

Input: 2

[
[1],
[1, 1]
]

Input: 3

[
[1],
[1, 1],
[1, 2, 1]
]

Input: 4

[
[1],
[1, 1],
[1, 2, 1],
[1, 3, 3, 1]
]

Input: 5

[
[1],
[1, 1],
[1, 2, 1],
[1, 3, 3, 1],
[1, 4, 6, 4, 1]
]

Notes

    The first and last elements of each row are always 1.

    Each internal value is the sum of the two values above it.
