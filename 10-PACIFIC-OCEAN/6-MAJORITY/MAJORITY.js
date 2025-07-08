function majority(array) {
  let index = array[0];
  let count = 1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] === index) {
      count++;
    } else {
      count--;
      if (count === 0) {
        index = array[i];
        count = 1;
      }
    }
  }
  return index;
}
