function compress(str) {
  let result = "";
  let lastLetter = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    const currLetter = str[i];
    if (lastLetter !== currLetter) {
      result += lastLetter + count;
      count = 1;
    } else {
      count++;
    }

    lastLetter = currLetter;
  }

  result += lastLetter + count;

  return result;
}
