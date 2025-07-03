function checkPayment(userBalance, cartTotal) {
  if (userBalance >= cartTotal) {
    console.log("Payment successful");
    return true;
  } else {
    console.log("Insufficient funds");
    return false;
  }
}
