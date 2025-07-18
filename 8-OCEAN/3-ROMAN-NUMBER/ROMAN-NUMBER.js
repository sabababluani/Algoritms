function RomanToInt(s) {
  const romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let currentValue = romanValue[s[i]];
    let nextValue = romanValue[s[i + 1]];
    if (nextValue > currentValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }
  return total;
}
