function numberRotation(number) {
  let string = number.toString();
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(Number(string));
    string = string.slice(1) + string[0];
  }

  return array;
}
