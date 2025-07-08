# Longest Link

# Task:

Create a function called longestLink that takes an array of strings. Each string represents a link in the format "a-b" (two numbers connected by a hyphen).

Example input:

```js
const array = [
  "1-2",
  "2-3",
  "3-5",
  "2-7",
  "7-8",
  "8-9",
  "9-12",
  "12-13",
  "13-18",
];
```

📌 Purpose:
Find and return the length (number of elements) of the longest possible sequence where the second number of one item matches the first number of the next.

📥 Input:

    An array of strings formatted as "a-b"

📤 Output:

    The number of elements in the longest chain (integer)

📌 Example:

```js
longestLink([
  "1-2",
  "2-3",
  "3-5",
  "2-7",
  "7-8",
  "8-9",
  "9-12",
  "12-13",
  "13-18",
]);
// Returns: 6

// The longest valid chain is:
// '2-7' → '7-8' → '8-9' → '9-12' → '12-13' → '13-18'
```
