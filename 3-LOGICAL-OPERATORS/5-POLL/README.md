# Poll Result Logic

## Task Description

A poll was conducted at **Novatori** asking:

> Should Novatori’s office move outside the city?

The responses from students are stored in the following variables:

```js
const student1 = true;
const student2 = false;
const student3 = false;
const student4 = true;
const student5 = true;
```

- `true` means the student voted **yes** (in favor of moving).
- `false` means the student voted **no** (against moving).

## Your Tasks

1. Count how many students voted **yes**, and store the result in a variable:

```js
let yesCount;
```

2. Determine what the **majority** decided (i.e., whether more students voted `true` than `false`), and store the result as a boolean in:

```js
let decision;
```

## Example

For the given inputs:

```js
const student1 = true;
const student2 = false;
const student3 = false;
const student4 = true;
const student5 = true;
```

- `true` votes: 3
- `false` votes: 2
- Majority voted **yes**

So the result should be:

```js
let yesCount = 3;
let decision = true;
```
