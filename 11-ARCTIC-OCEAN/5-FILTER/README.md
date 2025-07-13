# Filter Users List

## Task Description

You are given a list of users.

From this list, you need to display **only the entries that match the user's selected filters**.

## Example:

```javascript
const filters = {
  search: "gio",
  active: true,
};
```

Your task is to filter the users list based on the following conditions:

1. search Property (Free Text Search)

   The value in the search field is a free text input.

   This value should be searched in any field of the user object (e.g., name, email, etc.).

   The search should be case-insensitive.

2. active Property

   This indicates whether to include only active users (true) or only inactive users (false).

Your Goal

Compute a new list that includes only users who match all the filters.

Store the result in the following variable:

const filtered;

Example Usage

If you are given this list of users:

```javascript
const users = [
  { name: "Giorgi", email: "giorgi@example.com", active: true },
  { name: "Nino", email: "nino@example.com", active: false },
  { name: "Gio", email: "gio123@gmail.com", active: true },
];
```

and this filter:

```javascript
const filters = {
  search: "gio",
  active: true,
};
```

Your result (filtered) should be:

```javascript
[
  { name: "Giorgi", email: "giorgi@example.com", active: true },
  { name: "Gio", email: "gio123@gmail.com", active: true },
];
```

Objective

    Practice working with arrays and filtering logic.

    Learn how to implement multiple conditions when filtering.

    Understand case-insensitive and substring matching.
