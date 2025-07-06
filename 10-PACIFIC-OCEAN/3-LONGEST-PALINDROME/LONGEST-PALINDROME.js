function longestPalindrome(s) {
  let store = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let string = s.slice(i, j + 1);
      let reverse = string.split("").reverse().join("");
      if (string === reverse && string.length > store.length) {
        store = string;
      }
    }
  }
  return store;
}
