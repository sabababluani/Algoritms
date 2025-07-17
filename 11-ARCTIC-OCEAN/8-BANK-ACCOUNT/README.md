# 🏦 BankAccount Class (JavaScript)

This project implements a `BankAccount` class in JavaScript that simulates a basic banking system with support for both debit and credit accounts.

---

## 📌 Features

- Encapsulated class fields for security
- Deposit and withdraw functionality
- Supports credit and debit account types
- Credit limit checks for withdrawals
- Methods for retrieving account information

---

## 🧱 Class Structure

### Class Name
`BankAccount`

### Fields (Private)
- `#holderName`: The name of the account holder
- `#accountType`: Either `'credit'` or `'debit'`
- `#balance`: The current balance in the account
- `#creditLimit`: The credit limit (if applicable)

> All fields are private and should not be accessed directly from outside the class.

---

## 🧮 Constructor

```js
new BankAccount(holderName, accountType, balance, creditLimit)
```

    holderName – string – Name of the account holder

    accountType – string – Either 'credit' or 'debit'

    balance – number – Initial balance

    creditLimit – number – Credit limit (0 for debit accounts)

⚠️ If the accountType is invalid, the account will default to 'debit'.
🔧 Methods
Method	Description
deposit(amount)	Adds the given amount to the balance
withdraw(amount)	Deducts the given amount from the balance. For credit accounts, the balance can go negative up to the credit limit
getBalance()	Returns the current balance
getHolderName()	Returns the holder's name
getAccountType()	Returns the account type
getCreditLimit()	Returns the credit limit
getAvailableFunds()	Returns the total amount the user can withdraw (balance + credit limit if credit)
✅ Example Usage

```js
const mishasAccount = new BankAccount('Misha Failodze', 'credit', 500, 1000);


mishasAccount.deposit(300);       // Adds 300 to balance
mishasAccount.withdraw(1000);     // Withdraws 1000 if allowed
console.log(mishasAccount.getBalance()); // Current balance
console.log(mishasAccount.getAvailableFunds()); // Available funds (balance + credit limit)
```

This creates a credit account for Misha with a starting balance of 500 and a credit limit of 1000.
💡 Additional Notes

    If the account type is invalid (not 'credit' or 'debit'), the account defaults to a debit account.

    Credit accounts allow the balance to go negative, up to the defined credit limit.

    All sensitive fields are encapsulated using JavaScript private fields (#).