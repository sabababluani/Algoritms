# Employee Data Transformation

## Task Description

You are given an array of employee objects. Each object contains the following properties:

- `firstName`: Employee's first name (string)
- `lastName`: Employee's last name (string)
- `birthDate`: Employee's date of birth (string or date)
- `monthlySalary`: Employee's monthly salary (number)
- `department`: Employee's department (string)

---

## Objective

Write a function `transformEmployeeData(employees)` that transforms this array using the `map` method and returns a new array with objects containing:

- `fullName`: A string in the format `"Last, First"` with both names capitalized  
  _(Example: `"Doe, John"`)_
- `annualSalary`: A number representing the annual salary (`monthlySalary * 12`)
- `department`: A string representing the department in **UPPERCASE**

---

## Function Signature

```js
function transformEmployeeData(employees) {
  // your code here
}
```

Example Input

```javascript
const employees = [
  {
    firstName: "john",
    lastName: "doe",
    birthDate: "1990-01-01",
    monthlySalary: 3000,
    department: "engineering",
  },
  {
    firstName: "jane",
    lastName: "smith",
    birthDate: "1985-05-12",
    monthlySalary: 4000,
    department: "marketing",
  },
];
```

Expected Output

```javascript
[
  {
    fullName: "Doe, John",
    annualSalary: 36000,
    department: "ENGINEERING",
  },
  {
    fullName: "Smith, Jane",
    annualSalary: 48000,
    department: "MARKETING",
  },
];
```
