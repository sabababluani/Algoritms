function stringReplace(string, search, replace) {
  let result = "";
  let i = 0;

  while (i < string.length) {
    if (string.substr(i, search.length) === search) {
      result += replace;
      i += search.length;
    } else {
      result += string[i];
      i++;
    }
  }

  return result;
}
