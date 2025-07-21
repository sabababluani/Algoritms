function lcm(a, b, c) {
  for (let i = 1; i <= 1000; i++) {
    if (i % a === 0 && i % b === 0 && i % c === 0) {
      return i;
    }
  }
}
