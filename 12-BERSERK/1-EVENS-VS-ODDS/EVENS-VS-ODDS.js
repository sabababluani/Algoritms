function availableCouple(array, num) {
  let count = 0;

  for (let i = 0; i < array.length - 1; i++) {
    const left = array[i];
    const right = array[i + 1];

    if (num % 2 === 0) {
      if (left % 2 === 0 || right % 2 === 0) {
        count++;
      }
    } else {
      if (left % 2 !== 0 || right % 2 !== 0) {
        count++;
      }
    }
  }

  return count;
}
