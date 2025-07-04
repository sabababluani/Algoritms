function isPrimeNumber(n) {
  let isPrime = true;

  if (n <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  return isPrime;
}
