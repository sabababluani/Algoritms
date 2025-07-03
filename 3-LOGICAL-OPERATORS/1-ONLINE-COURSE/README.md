# Online Course Access Logic

## Task Description

An online course platform needs logic to determine if a user can access a course.

You are given the following variables:

```js
const userPaid = true;
const userIsAdmin = false;

const courseIsOnline = false; // If the course is currently live, this becomes true
const courseHasRecording = true; // If the course has a video recording, this becomes true
```

## Access Conditions

A user should be allowed to access the course **if**:

- They have **paid** for it **or** they are an **admin**,  
  **AND**
- The course is **either currently live** or **has a video recording**.

If the course is **not live** **and** has **no recording**, the user **should not be allowed access**, regardless of payment or admin status.

## Your Task

Evaluate the access conditions and store the result in the following boolean variable:

```js
let userCanEnter;
```

## Example

Based on the given input:

```js
const userPaid = true;
const userIsAdmin = false;
const courseIsOnline = false;
const courseHasRecording = true;
```

- The user is **allowed** because they paid, and the course **has a recording**.

So the result should be:

```js
let userCanEnter = true;
```
