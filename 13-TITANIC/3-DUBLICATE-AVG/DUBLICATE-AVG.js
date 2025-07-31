function duplicateNumsAvg(array) {
  const newArr = [];
  let average;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        newArr.push(array[i]);

        break;
      }
    }
  }

  let sum = 0;

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }

  average = sum / newArr.length;

  return average;
}
