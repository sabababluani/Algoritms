# Notification Center Logic

## Task Description

You are a developer at WhatsApp. Your task is to determine when a user should receive a **notification** for an incoming message.

For each received message, you are given the following variables:

```js
const senderIsFriend = false;
const senderMuted = false;

const groupMessage = false;
const groupMuted = false;
const userMentioned = false;
```

## Notification Rules

A **notification should be sent** if:

- The **sender is a friend** AND the **sender is not muted**  
  **OR**
- The **message is from a group**, AND (**the group is not muted** **OR** the **user was mentioned** in the message)

## Your Task

Evaluate the conditions and assign the result to the following boolean variable:

```js
let sendNotification;
```

## Example

Given the values:

```js
const senderIsFriend = false;
const senderMuted = false;

const groupMessage = false;
const groupMuted = false;
const userMentioned = false;
```

- The sender is not a friend, so the first condition is false.
- The message is not a group message, so the second condition is also false.

So the result will be:

```js
let sendNotification = false;
```
