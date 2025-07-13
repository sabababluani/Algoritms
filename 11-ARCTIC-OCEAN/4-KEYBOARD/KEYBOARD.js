function keyboardRow(word) {
  const lowerWord = word.toLowerCase();
  const firstRow = "qwertyuiop";
  const secondRow = "asdfghjkl";
  const thirdRow = "zxcvbnm";

  let firstBool = true;
  let secondBool = true;
  let thirdBool = true;

  for (let i = 0; i < lowerWord.length; i++) {
    if (!firstRow.includes(lowerWord[i])) {
      firstBool = false;
    }
    if (!secondRow.includes(lowerWord[i])) {
      secondBool = false;
    }
    if (!thirdRow.includes(lowerWord[i])) {
      thirdBool = false;
    }
  }

  return firstBool || thirdBool || secondBool;
}

