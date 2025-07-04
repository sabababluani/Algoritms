function checkPhoneLogin(userPhones, loginPhone) {
  let userLoggedIn = false;

  for (let i = 0; i < userPhones.length; i++) {
    if (userPhones[i] == loginPhone) {
      userLoggedIn = true;
      break; 
    }
  }

  console.log(userLoggedIn);
  return userLoggedIn;
}
