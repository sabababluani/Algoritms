# Atomic Bomb Launch Logic

## Task Description

Bad guys have created a launch system for an atomic bomb. As a result, they possess a **master key** that can launch the bomb **without needing the approval** of the President, Prime Minister, or General of the Armies.

You are given the following variables:

```js
const presidentKey = false;
const primeMinisterKey = false;
const generalOfArmiesKey = false;
const masterKey = false;
```

## Launch Conditions

The atomic bomb will launch if **either** of the following conditions is true:

1. **All three** — the **President**, **Prime Minister**, and **General of the Armies** — approve it (i.e., their keys are all `true`).
2. The **master key** is used (i.e., `masterKey === true`).

## Your Task

Evaluate the conditions and assign the result to the following boolean variable:

```js
let bombWillLaunch;
```

## Example

If all variables are:

```js
const presidentKey = false;
const primeMinisterKey = false;
const generalOfArmiesKey = false;
const masterKey = false;
```

Then none of the conditions are satisfied, and the bomb should **not** launch:

```js
let bombWillLaunch = false;
```
