# Excel Column Title (Custom Implementation)

## Description

This project implements a function that converts a given positive integer into its corresponding Excel column title.

Excel columns are labeled alphabetically as follows:

- 1 → A
- 2 → B
- ...
- 26 → Z
- 27 → AA
- 28 → AB
- ... and so on.

This labeling is similar to a base-26 numbering system, but starts from 1 instead of 0.

---

## Function Signature

```javascript
function columnNumber(num) {}
```

    Parameter:

        num (Number): A positive integer representing the column number.

    Returns:

        A string representing the Excel-style column name.
