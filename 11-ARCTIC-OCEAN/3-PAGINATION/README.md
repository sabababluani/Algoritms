# Pagination

Pagination is a technique used to display a limited number of items from a large dataset on the screen at once.
Problem Description

You are given a list of users stored in a variable:

```js
const users = [];
```

And also user-selected options:

```js
const page = 1; // The user is on the first page
const limit = 10; // The user wants to see 10 records per page
```

In this case, you need to display the first 10 users from the users array.
Example 2

```js
const page = 3;
const limit = 15;
```

In this case, the function should skip the first 30 users and display records from the 31st to the 45th (inclusive).
Explanation

    The user wants to see 15 users per page.

    On the first page, show users 1–15.

    On the second page, show users 16–30.

    Since the user requested the third page, show users 31–45.

Your Task

Create the following function:

```js
function paginate(users, page, limit) {}
```

This function should return the list of users that should be displayed on the current page.

Example data:

```js
let users = [
  {
    id: 1,
    firstName: "Terry",
    lastName: "Medhurst",
    age: 50,
    email: "atuny0@sohu.com",
    phone: "+63 791 675 8914",
    username: "atuny0",
  },

  {
    id: 2,
    firstName: "Sheldon",
    lastName: "Quigley",
    age: 28,
    email: "hbingley1@plala.or.jp",
    phone: "+7 813 117 7139",
    username: "hbingley1",
  },

  {
    id: 3,
    firstName: "Terrill",
    lastName: "Hills",
    age: 38,
    email: "rshawe2@51.la",
    phone: "+63 739 292 7942",
    username: "rshawe2",
  },

  {
    id: 4,
    firstName: "Miles",
    lastName: "Cummerata",
    age: 49,
    email: "yraigatt3@nature.com",
    phone: "+86 461 145 4186",
    username: "yraigatt3",
  },

  {
    id: 5,
    firstName: "Mavis",
    lastName: "Schultz",
    age: 38,
    email: "kmeus4@upenn.edu",
    phone: "+372 285 771 1911",
    username: "kmeus4",
  },

  {
    id: 6,
    firstName: "Alison",
    lastName: "Reichert",
    age: 21,
    email: "jtreleven5@nhs.uk",
    phone: "+351 527 735 3642",
    username: "jtreleven5",
  },

  {
    id: 7,
    firstName: "Oleta",
    lastName: "Abbott",
    age: 31,
    email: "dpettegre6@columbia.edu",
    phone: "+62 640 802 7111",
    username: "dpettegre6",
  },

  {
    id: 8,
    firstName: "Ewell",
    lastName: "Mueller",
    age: 29,
    email: "ggude7@chron.com",
    phone: "+86 946 297 2275",
    username: "ggude7",
  },

  {
    id: 9,
    firstName: "Demetrius",
    lastName: "Corkery",
    age: 22,
    email: "nloiterton8@aol.com",
    phone: "+86 356 590 9727",
    username: "nloiterton8",
  },

  {
    id: 10,
    firstName: "Eleanora",
    lastName: "Price",
    age: 37,
    email: "umcgourty9@jalbum.net",
    phone: "+60 184 408 0824",
    username: "umcgourty9",
  },

  {
    id: 11,
    firstName: "Marcel",
    lastName: "Jones",
    age: 39,
    email: "acharlota@liveinternet.ru",
    phone: "+967 253 210 0344",
    username: "acharlota",
  },

  {
    id: 12,
    firstName: "Assunta",
    lastName: "Rath",
    age: 42,
    email: "rhallawellb@dropbox.com",
    phone: "+380 962 542 6549",
    username: "rhallawellb",
  },

  {
    id: 13,
    firstName: "Trace",
    lastName: "Douglas",
    age: 26,
    email: "lgribbinc@posterous.com",
    phone: "+1 609 937 3468",
    username: "lgribbinc",
  },
];
```
