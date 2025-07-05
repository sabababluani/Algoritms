function stringStartsWith(string, search) {
  for (let i = 0; i < search.length; i++) {
    if (string[i] !== search[i]) return false;
  }
  
  return true;
}
