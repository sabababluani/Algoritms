# splitBunches

### Description

The `splitBunches` function takes an array of objects where each object represents a type of item (e.g., fruit) and a quantity. The function returns a new array where each item is split into individual units based on its quantity.

---

### Function Signature

```javascript
function splitBunches(bunches) {}
```

Parameters

    bunches (Array): An array of objects, where each object has:

        name (string): The name of the item.

        quantity (number): The number of units of that item.

Returns

    A new array where each object appears quantity times, each with quantity: 1.

Example

```javascript
splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 },
]);
```

Returns:

```javascript
[
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 },
];
```
