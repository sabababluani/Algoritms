# Pangram Sentence Checker

A **pangram** is a sentence that contains **every letter of the alphabet at least once**

One of the most famous examples of a pangram is:

> The quick brown fox jumps over the lazy dog

This project implements a simple JavaScript function to check if a given string is a pangram.

## Function Signature

```js
function isPangram(string) {}
```

Description

The isPangram function takes a string as input and returns:

    true — if the string is a pangram (i.e., it includes every letter from a to z at least once)

    false — if it is not

The check is case-insensitive.
Example Usage

```js
isPangram("The quick brown fox jumps over the lazy dog"); // true
isPangram("Hello"); // false
```

Notes

    Only the 26 letters of the English alphabet are considered.

    Punctuation, numbers, and whitespace are ignored.

    Letter case (uppercase or lowercase) does not affect the result.
