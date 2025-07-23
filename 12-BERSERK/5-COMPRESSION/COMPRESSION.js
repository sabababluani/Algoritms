function compress(string) {
  if (string.length === 0) return null;

  let counter = 1;
  let compressedWord = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      counter++;
    } else {
      compressedWord += string[i] + counter;
      counter = 1;
    }
  }

  return compressedWord;
}
