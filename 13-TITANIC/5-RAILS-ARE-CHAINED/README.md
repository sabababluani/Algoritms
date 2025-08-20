# Rails are Chained

### Description

You are given a 2D array (`rails`), where each element is either:

- `"#"`: A valid rail segment
- `"@"`: An obstacle or empty space

The goal is to determine if there is a **continuous and non-reversing path** of `"#"` characters starting at the **top-left** (`[0][0]`) and reaching the **bottom-right** (last row, last column).

---

### Rules

1. The train **always starts** at `rails[0][0]`.
2. It can move **only to adjacent `"#"`** tiles in **up, down, left, or right** directions.
3. The path **must not revisit** already visited rails (`"#"`).
4. The path must **reach the bottom-right tile** (`rails[rows - 1][cols - 1]`).
5. If the path exists, return:  
   ➤ `"valid rails"`  
   Otherwise, return:  
   ➤ `"there is no rails to go"`

---

### Function Signature

```javascript
function railesAreChained(rails) {}
```

Parameters

    rails (Array<Array<string>>): A 2D array of characters, containing either:

        "#" for a valid rail

        "@" for an invalid path

Returns

    string:

        "valid rails" if there is a valid, connected, non-repeating path from [0][0] to the bottom-right.

        "there is no rails to go" if no such path exists.

Example

```javascript
const rails = [
  ["#", "@", "#", "#", "#", "@", "#", "@", "@"],
  ["#", "@", "#", "@", "#", "#", "#", "@", "@"],
  ["#", "@", "#", "@", "#", "@", "#", "@", "@"],
  ["#", "#", "#", "@", "#", "@", "#", "@", "@"],
  ["#", "@", "#", "@", "#", "@", "#", "@", "@"],
  ["#", "#", "#", "#", "#", "@", "#", "#", "#"],
];

railesAreChained(rails);
```

Returns:

```javascript
"valid rails";
```
