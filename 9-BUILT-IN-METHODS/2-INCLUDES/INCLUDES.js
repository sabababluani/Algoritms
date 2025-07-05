function stringIncludes(string, substring) {
  if (string.length < substring.length) return false;

  let num = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === substring[num]) {
      num++;
    }
  }

  if (substring[num - 1] === substring[substring.length - 1]) {
    return true;
  }

  return false;
}
