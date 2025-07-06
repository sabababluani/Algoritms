function arrayJoin(array, separator) {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    let item = array[i] == null ? "" : String(array[i]);

    result += item;

    if (i !== array.length - 1) {
      result += separator;
    }
  }

  return result;
}
