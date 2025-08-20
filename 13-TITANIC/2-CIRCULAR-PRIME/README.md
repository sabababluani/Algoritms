# Circular Primes

### Description

A **circular prime** is a number that remains prime under all rotations of its digits.

For example, for the number `197`, the digit rotations are:

- 197
- 971
- 719

Since **all** of these are prime numbers, `197` is considered a **circular prime**.

---

### Task

Create a function:

```javascript
function circularPrimeCount(limit) {}
```

This function should return the total number of circular prime numbers less than the given number (limit).
Parameters

    limit (number): A positive integer — the upper limit (non-inclusive) to search for circular primes.

Returns

    number: The count of circular prime numbers less than the given limit.

Example

```javascript
circularPrimeCount(100);
```

Returns:

```javascript
13;
```

(The 13 circular primes under 100 are: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, 97)
