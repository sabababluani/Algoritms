function sum(oddStart, oddEnd, evenStart, evenEnd) {
  let sum = 0;

  for (let i = oddStart; i < oddEnd; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  for (let i = evenStart; i < evenEnd; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}
