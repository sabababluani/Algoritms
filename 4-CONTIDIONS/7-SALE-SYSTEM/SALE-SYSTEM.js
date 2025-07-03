function checkDiscountPayment(
  userIsAdmin,
  userIsFrequentClient,
  userIsStudent,
  adminSale,
  frequentClientSale,
  studentSale,
  cartTotal,
  userBalance
) {
  let discount = 0;

  if (userIsAdmin) {
    discount = adminSale;
  } else if (userIsFrequentClient) {
    discount = frequentClientSale;
  } else if (userIsStudent) {
    discount = studentSale;
  }

  const totalAfterDiscount = cartTotal * (1 - discount / 100);

  const paymentComplete = userBalance >= totalAfterDiscount;

  return paymentComplete;
}
