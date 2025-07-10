function dictionary(array) {
  let word = `${array[0][0]}${array[0][2]}`;

  while (array.length + 1 != word.length) {
    for (let i = 1; i < array.length; i++) {
      if (array[i][2] == word[0]) {
        word = array[i][0] + word;
      } else if (array[i][0] == word[word.length - 1]) {
        word = word + array[i][2];
      }
    }
  }

  return word;
}
