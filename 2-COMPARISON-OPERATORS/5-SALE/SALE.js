function checkCanBuy(total, salePercentage, targetDiscount) {
  const canBuy = (total * salePercentage) / 100 >= targetDiscount;
  return canBuy;
}
