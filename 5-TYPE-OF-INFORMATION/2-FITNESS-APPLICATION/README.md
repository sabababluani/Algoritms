# Fitness Application – Weight Tracking

## Task Description

A user enters their weight weekly in the app. You are given the following variables:

```js
const userWeights = [90, 91, 95, 92, 90, 88]; // list of weights entered by the user
const goal = 60; // target weight the user wants to reach
```

## Your Task

- Calculate how many kilograms the user still needs to lose to reach their goal.
- If the user has **already reached or gone below** the goal weight, print:

```
Congratulations, goal achieved!
```

- Otherwise, print:

```
You have x kilograms left to lose.
```

Where `x` is the positive difference between the user's **latest recorded weight** and the goal.

## Example

Given:

```js
const userWeights = [90, 91, 95, 92, 90, 88];
const goal = 60;
```

- The latest weight is `88`.
- The user still needs to lose `88 - 60 = 28` kilograms.

Output:

```
You have 28 kilograms left to lose.
```
