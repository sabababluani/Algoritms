# Active Middle Aged Users

## Description

This task requires you to implement a function that filters users based on two conditions:

1. The user must be **active**.
2. The user must be **older than 30**.

The result should be a **new array** containing only those users who satisfy both conditions.

---

## Function Signature

```javascript
function activeMiddleAged(users) {}
```

Parameters

    users (Array): An array of user objects. Each user object contains the following properties:

        name (string): The name of the user.

        age (number): The age of the user.

        isActive (boolean): Indicates whether the user is active or not.

Return

    Returns a new array containing only the users who are active (isActive === true) and older than 30 (age > 30).

Requirements

    Use the Array.prototype.find() method to check individual users.

    Note: Although find() is used to find a single element, the goal here is to demonstrate its usage in some way during the filtering process. You may creatively use find() inside a loop or helper function if necessary.

Example

```javascript
const users = [
  { name: "Alice", age: 35, isActive: true },
  { name: "Bob", age: 28, isActive: true },
  { name: "Charlie", age: 32, isActive: false },
  { name: "Diana", age: 40, isActive: true },
];

const result = activeMiddleAged(users);

console.log(result);
// Output:
// [
// { name: "Alice", age: 35, isActive: true },
// { name: "Diana", age: 40, isActive: true }
// ]
```
