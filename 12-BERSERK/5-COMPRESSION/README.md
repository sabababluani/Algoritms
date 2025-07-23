# Simple String Compression

This project demonstrates a basic string compression algorithm that reduces the size of repeated characters by replacing sequences of identical characters with a single character followed by the number of its repetitions.

## What is Compression?

Compression is the process of transforming data in a way that reduces its size while preserving the original information.

This project implements a **very simple compression algorithm**, suitable for practice or educational purposes.

## Function Signature

```js
function compress(string) {}

Description

The compress function takes a string as input and returns a new compressed version of that string.

It replaces each sequence of repeated characters with the character followed by the number of times it appears consecutively.
Examples
```

```js
compress('aaa');         // "a3"
compress('aabb');        // "a2b2"
compress('aaabbbccc');   // "a3b3c3"
compress('a');           // "a1"
```
Notes

    All characters in the string are treated as compressible.

    Even single characters are represented with a count of 1.

    For simplicity, we do not skip compression of short sequences like "a" or "aa" (unlike real-world compression algorithms).

Use Cases

This function can be useful for:

    Demonstrating basic string manipulation

    Learning how compression works

    Practicing loop and condition logic in JavaScript