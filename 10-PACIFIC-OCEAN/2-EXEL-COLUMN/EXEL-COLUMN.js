function columnNumber(num) {
  let result = "";
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  while (num > 0) {
    num--;

    let remain = num % 26;
    result = alphabet[remain] + result;
    num = Math.floor(num / 26);
  }

  return result;
}
