# Chocolates Parcel

## Task Description

Your task is to create a function that determines how to build a chocolate parcel to match a specific weight using two types of chocolates:

- **Small chocolate** – each piece weighs **2 grams**
- **Big chocolate** – each piece weighs **5 grams**

---

## Objective

Write a function `chocolatesParcel(nSmall, nBig, goal)` that:

- Takes three parameters:

  - `nSmall`: number of small chocolates available
  - `nBig`: number of big chocolates available
  - `goal`: the target weight of the parcel

- Uses **as many big chocolates as possible first**, then fills in the remaining weight using small chocolates.

- Returns the number of **small chocolates needed** to achieve the target parcel weight.

- Returns `false` if it’s **not possible** to reach the desired weight with the available chocolates.

---

## Function Signature

```js
function chocolatesParcel(nSmall, nBig, goal) {
  // your logic here
}
```

Example Input

```javascript
const nSmall = 4; // Available small chocolates (2g each)
const nBig = 1; // Available big chocolates (5g each)
const goal = 13; // Required parcel weight
```

Expected Output

```javascript
3;
```

✅ Explanation:
Use 1 big chocolate (5g) → remaining = 8g
Then use 4 small chocolates (only 4 × 2g = 8g available) → ✅
❌ If Not Possible Example

```javascript
chocolatesParcel(1, 1, 10); // returns false
```

❌ Explanation:
1 big (5g) + 1 small (2g) = 7g → Not enough to reach 10g
