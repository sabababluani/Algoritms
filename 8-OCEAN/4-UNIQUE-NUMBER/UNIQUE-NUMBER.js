function unique(array) {
  for (let i = 0; i < array.length; i++) {
    let unique = true;
    for (let j = 0; j <= array.length; j++) {
      if (i != j && array[i] === array[j]) {
        unique = false;
      }
    }
    if (unique) {
      return array[i];
    }
  }
}
