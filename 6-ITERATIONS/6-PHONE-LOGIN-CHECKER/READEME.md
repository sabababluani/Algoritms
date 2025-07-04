# Phone Login Checker

## Description

This JavaScript program checks whether a user attempting to log in with a phone number is already registered on the website.

The list of registered users is stored in an array of phone numbers. When a user enters their phone number, the program checks if it exists in the array and returns a `boolean` result.

## Given

```javascript
const userPhones = ["5XXXXXXXX", "5XXXXXXXX"];
const loginPhone = "5XXXXXXXX";
```

Goal

Check if the phone number entered by the user (loginPhone) is in the list of registered users (userPhones).

Store the result in a boolean variable:

```
let userLoggedIn;
```
