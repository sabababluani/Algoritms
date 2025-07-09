# Dictionary

##Task

Your task is to write a function that takes an array of strings as input and reconstructs a word based on those instructions.
Function Signature

```js
function dictionary(word) {}
```

# Input

An array of strings where each string represents a rule in the format "X>Y", meaning that the character X comes before Y in the final word.
Example:

```js
let word = ["I>N", "A>I", "P>A", "S>P"];
```

This means:

    "I>N" → I comes before N

    "A>I" → A comes before I

    "P>A" → P comes before A

    "S>P" → S comes before P

From these rules, we can determine the correct order of characters in the word is:

S → P → A → I → N

✅ The final word is: SPAIN
✅ Output

Your function should return the correctly ordered word as a string.

# Summary

    Parse the input rules

    Determine the correct character order

    Reconstruct and return the resulting word
