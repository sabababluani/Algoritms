# Change Dispenser Machine

This project simulates a change dispenser machine, such as one used in vending machines.

##  Description

A customer buys a carbonated drink from a vending machine.  
To make the purchase, they insert a bill into the machine:

```ts
const incomingBill = 10;

```

The price of the selected product is:

```
const productPrice = 5;
```

The machine has a limited quantity of bills available for returning change. These are defined in an array of objects:

```
const bills = [
  { lari: 0.50, quantity: 590 },
  { lari: 1, quantity: 10 },
  { lari: 2, quantity: 20 },
  { lari: 5, quantity: 30 },
  { lari: 10, quantity: 35 }
];
```

This means the machine currently has:

    590 coins of 0.50 Lari

    10 coins of 1 Lari

    20 coins of 2 Lari

    30 bills of 5 Lari

    35 bills of 10 Lari
    

🧮 Example

Suppose the customer inserts a 5 Lari bill and purchases a product worth 1.50 Lari.
The machine should return 3.50 Lari using the fewest and largest denominations possible:

    1 × 2 Lari

    1 × 1 Lari

    1 × 0.50 Lari

🎯 Goal

Your task is to:

    Calculate the change amount (difference between inserted money and product price).

    Read from the bills array and determine the optimal way to return change using the largest possible denominations.

    Deduct the used bills from the bills array.

✅ Expected Output

You should return an array representing the change given to the user:

```
[
  { lari: 2, quantity: 1 },
  { lari: 1, quantity: 1 },
  { lari: 0.5, quantity: 1 }
]
```
