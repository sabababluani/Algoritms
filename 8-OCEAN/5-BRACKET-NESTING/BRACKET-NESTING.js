function checkNest(string) {
  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (pairs[char]) {
      stack.push(char);
    } else {
      const lastOpen = stack.pop();
      if (pairs[lastOpen] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
