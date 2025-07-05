let change = incomingBill - productPrice;
function changeBill() {
  let finalChange = change;
  if (finalChange >= bills[4].lari) {
    bills[4].quantity -= Math.floor(finalChange / bills[4].lari);
    finalChange -= Math.floor(finalChange / bills[4].lari) * bills[4].lari;
  }

  if (finalChange >= bills[3].lari) {
    bills[3].quantity -= Math.floor(finalChange / bills[3].lari);
    finalChange -= Math.floor(finalChange / bills[3].lari) * bills[3].lari;
  }
  if (finalChange >= bills[2].lari) {
    bills[2].quantity -= Math.floor(finalChange / bills[2].lari);
    finalChange -= Math.floor(finalChange / bills[2].lari) * bills[2].lari;
  }
  if (finalChange >= bills[1].lari) {
    bills[1].quantity -= Math.floor(finalChange / bills[1].lari);
    finalChange -= Math.floor(finalChange / bills[1].lari) * bills[1].lari;
  }
  if (finalChange >= bills[0].lari) {
    bills[0].quantity -= Math.floor(finalChange / bills[0].lari);
    finalChange -= Math.floor(finalChange / bills[0].lari) * bills[0].lari;
  }

  return finalChange;
}

