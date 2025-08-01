# Duplicate Numbers & Average

### Description

Given an array of numbers, the goal is to identify all **duplicate numbers** (i.e., numbers that appear more than once) and return their **average** along with the list of duplicates.

---

### Function Signature

```javascript
function duplicateNumsAvg(array) {}
```

Parameters

    array (Array<number>): An array of integers, possibly containing duplicates.

Returns

    An object with the following structure:

        duplicates: An array of all duplicate numbers (each listed once).

        average: The average (mean) value of the duplicate numbers.

Example

```javascript
duplicateNumsAvg([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]);
```

Returns:

```javascript
{ duplicates: [72, 81, 99], average: 84 }
```
