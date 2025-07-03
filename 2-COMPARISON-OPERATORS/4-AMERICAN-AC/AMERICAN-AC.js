function checkAcOn(userTempInC, carTempInF) {
  const acOn = userTempInC * (9 / 5) + 32 < carTempInF;
  return acOn;
}
