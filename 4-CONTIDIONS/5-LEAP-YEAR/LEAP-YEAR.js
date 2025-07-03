function checkLeapYear(year) {
  let isLeapYear;

  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }

  return isLeapYear;
}
