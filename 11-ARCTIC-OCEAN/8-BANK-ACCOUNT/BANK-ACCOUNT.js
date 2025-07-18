class BankAccount {
  #holderName;
  #accountType;
  #balance = 0;
  #creditLimit = 0;

  constructor(name, type, balance, cLimit) {
    if (type !== "credit" && type !== "debit") this.#accountType = "debit";
    else this.#accountType = type;

    if (type == "debit") this.#creditLimit = 0;
    else this.#creditLimit = cLimit;

    this.#holderName = name;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (
      (this.#accountType !== "credit" && this.#balance - amount < 0) ||
      this.#balance - amount < -this.#creditLimit
    ) {
      return console.error("what the f is this bro are u kidding me");
    }

    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }

  getHolderName() {
    return this.#holderName;
  }

  getAccountType() {
    return this.#accountType;
  }

  getCreditLimit() {
    return this.#creditLimit;
  }

  getAvailableFunds() {
    return this.#balance + this.#creditLimit;
  }
}
