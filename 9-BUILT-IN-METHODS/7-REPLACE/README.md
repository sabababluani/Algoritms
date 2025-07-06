# String Replace (Custom Implementation)

## Description

This project implements a custom version of the native JavaScript `String.prototype.replace()` method.

The goal is to create a function called `stringReplace` that replaces the **first occurrence** of a given substring within a string with another substring.

---

## Function Signature

```javascript
function stringReplace(string, search, replace) {}
```

    Parameters:

        string (String): The original string where the replacement will occur.

        search (String): The substring that needs to be replaced.

        replace (String): The substring that will replace the search.

    Returns:

        A new string where the first occurrence of search in string is replaced with replace.
