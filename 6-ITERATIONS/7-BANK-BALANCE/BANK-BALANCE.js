function calculateBalance(transactionList) {
  let balance = 0;

  for (let i = 0; i < transactionList.length; i++) {
    balance += transactionList[i];
  }

  return balance;
}
