function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alphabet.length; i++) {
    if (!string.toLocaleLowerCase().includes(alphabet[i])) {
      return false;
    }
  }

  return true;
}

