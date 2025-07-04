function sumOfDiagonals(array2d) {
  let sumOfDiagonals = 0;

  for (let i = 0; i < array2d.length; i++) {
    sumOfDiagonals += array2d[i][array2d.length - i - 1] + array2d[i][i];
  }

  return sumOfDiagonals;
}
