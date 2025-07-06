function stringSplit(string, separator) {
  let result = [];
  let temp = "";

  for (let i = 0; i < string.length; i++) {
    if (string.slice(i, +i + separator.length) === separator) {
      result.push(temp);

      temp = "";

      i += separator.length - 1;
    } else {
      temp += string[i];
    }
  }
  result.push(temp);

  return result;
}
