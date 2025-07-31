function countCoinCombinations(targetAmount, coins) {
  const ways = [];
  for (let i = 0; i <= targetAmount; i++) {
    ways[i] = 0;
  }
  ways[0] = 1;
  for (let coin of coins) {
    for (let amount = coin; amount <= targetAmount; amount++) {
      ways[amount] += ways[amount - coin];
    }
  }
  return ways[targetAmount];
}
