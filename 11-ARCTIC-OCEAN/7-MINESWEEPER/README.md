# 🧨 Minesweeper Challenge

## Description

Your task is to implement a function that simulates the logic of a Minesweeper board.

The function should take a 2D array as input, where:

- `'X'` represents a mine,
- `'0'` represents an empty cell.

The function will return a new 2D array where each `'0'` is replaced by a string representing the number of adjacent mines (`'X'`) around it.

Adjacent cells include:

- Horizontally: left and right,
- Vertically: top and bottom,
- Diagonally: all four corners.

All values in the returned array must be strings.

---

## Function Signature

```ts
function minesweeper(array: string[][]): string[][];
```

Example
Input

```js
const array = [
  ["X", "0", "0"],
  ["0", "0", "X"],
  ["X", "0", "0"],
];
```

Output

```js
[
  ["X", "2", "1"],
  ["2", "3", "X"],
  ["X", "2", "1"],
];
```

Notes

    The input and output arrays will always be rectangular (equal-length rows).

    The output must not modify the original array.

    All numbers must be strings.
