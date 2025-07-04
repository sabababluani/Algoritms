function calculateNumberStats(numbers) {
  const stats = [0, 0, 0];

  let negativeSum = 0;
  let positiveSum = 0;
  let negativeCount = 0;
  let positiveCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negativeSum += numbers[i];
      negativeCount++;
      stats[0] = negativeSum / negativeCount;
    }

    if (numbers[i] > 0) {
      positiveSum += numbers[i];
      positiveCount++;
      stats[1] = positiveSum / positiveCount;
    }

    if (numbers[i] === 0) {
      stats[2]++;
    }
  }

  return stats;
}
