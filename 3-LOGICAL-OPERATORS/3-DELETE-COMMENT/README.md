# Comment Deletion Permission

## Task Description

A user wants to delete a comment. You are given the following information:

```js
const userIsAdmin = true;
const userIsModerator = false;
const userIsCommentAuthor = false;
```

## Deletion Rules

A user is allowed to delete the comment **if**:

- They are an **admin**,  
  **or**
- They are a **moderator**,  
  **or**
- They are the **author** of the comment.

If **none** of these conditions are met, the user **is not allowed** to delete the comment.

## Your Task

Evaluate the conditions and assign the result to the following boolean variable:

```js
let userCanDelete;
```

## Example

Given the values:

```js
const userIsAdmin = true;
const userIsModerator = false;
const userIsCommentAuthor = false;
```

Since the user **is an admin**, they are allowed to delete the comment:

```js
let userCanDelete = true;
```
