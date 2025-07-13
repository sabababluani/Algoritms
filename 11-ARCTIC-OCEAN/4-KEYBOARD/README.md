# Keyboard Row Checker

## Task Description

Your task is to create a function:

```javascript
function keyboardRow(word) {}
```

This function receives a single string as an argument and determines whether the word can be typed using only one row of letters on a standard QWERTY keyboard.
Keyboard Rows

The QWERTY keyboard has three rows of letters:

    First row: qwertyuiop

    Second row: asdfghjkl

    Third row: zxcvbnm

Function Behavior

The function should check if all characters in the given word belong to the same row of the keyboard.
Example:

```js
keyboardRow("type") // false (uses letters from multiple rows)
keyboardRow("dad")  // true (all letters are from the second row)
keyboardRow("zoo")  // false (letters from third and first rows)
keyboardRow("pop")  // true (all letters from the first row)
```

    Note: The function should be case-insensitive.

Goal

    Improve understanding of string manipulation.

    Practice character matching using sets or arrays.

    Learn how to simulate keyboard-based constraints.