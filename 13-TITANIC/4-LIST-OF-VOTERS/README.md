# List of Voters

### Description

In a voting system, only adults (individuals aged **18 or older**) are eligible to vote.

Your task is to write a function that filters out the adults from a list of people and returns a new array where each adult is represented in the following format:

```javascript
{ isAdult: true, fullName: 'Alice Smith', location: 'New York, USA' }
```

Function Signature

function listOfVoters(people) {}

Parameters

    people (Array<object>): An array of objects where each object contains:

        firstName (string)

        lastName (string)

        age (number)

        location (string)

Returns

    Array<object>: A new array of objects containing only adults (18+), where each object has:

        isAdult: true

        fullName: Concatenation of firstName and lastName

        location: Copied from the original object

Requirements

    You must use the forEach method to iterate over the array.

Example

```javascript
const people = [
  { firstName: "Alice", lastName: "Smith", age: 25, location: "New York, USA" },
  { firstName: "Bob", lastName: "Johnson", age: 17, location: "London, UK" },
  {
    firstName: "Carol",
    lastName: "Davis",
    age: 32,
    location: "Toronto, Canada",
  },
];

listOfVoters(people);
```

Returns:

```javascript
[
  { isAdult: true, fullName: "Alice Smith", location: "New York, USA" },
  { isAdult: true, fullName: "Carol Davis", location: "Toronto, Canada" },
];
```
