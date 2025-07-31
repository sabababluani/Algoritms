function countLetters(word) {
  const array = [0, 0];

  const xmovnebi = "აეიოუ";

  for (let i = 0; i < word.length; i++) {
    if (xmovnebi.includes(word[i])) array[0]++;
  }

  array[1] = word.length - array[0];
  return array;
}
