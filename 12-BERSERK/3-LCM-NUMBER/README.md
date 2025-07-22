# 🔢 Least Common Multiple (LCM) of Three Numbers

Your task is to create a function that takes **three numbers** as input and returns their **Least Common Multiple (LCM)** — the smallest number that all three input numbers divide without a remainder.

## 📌 Problem Description

Given three integers `a`, `b`, and `c`, return the LCM of the three numbers.

### 🔁 Function Signature

```javascript
function lcm(a: number, b: number, c: number): number
```

💡 Example

```javascript
const a = 5;
const b = 12;
const c = 9;

lcm(a, b, c); // ➞ 180
```

Explanation:

    LCM of 5 and 12 is 60

    LCM of 60 and 9 is 180

    Final result: 180

🧠 Tip

To compute LCM, you can use the formula:

```javascript
LCM(a, b) = (a \* b) / GCD(a, b)
```

Where GCD is the Greatest Common Divisor (use Euclidean algorithm).

For three numbers:

```javascript
LCM(a, b, c) = LCM(LCM(a, b), c)
```
