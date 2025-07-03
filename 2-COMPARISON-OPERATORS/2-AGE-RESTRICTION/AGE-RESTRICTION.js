function checkUserCanLogin(currentYear, userBirthYear, minAge) {
  const userCanLogin = currentYear - userBirthYear >= minAge;
  return userCanLogin;
}
