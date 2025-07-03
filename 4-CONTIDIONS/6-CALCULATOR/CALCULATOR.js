function calculate(operand1, operand2, operator) {
  let result;

  if (operator == "*") {
    result = operand1 * operand2;
  } else if (operator == "+") {
    result = operand2 + operand1;
  } else if (operator == "-") {
    result = operand1 - operand2;
  } else {
    result = operand1 / operand2;
  }

  return result;
}
