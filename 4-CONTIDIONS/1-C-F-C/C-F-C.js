function convertTemperature(temperature, scale) {
  let converted;

  if (scale == "c") {
    converted = (temperature * 9) / 5 + 32;
  } else {
    converted = ((temperature - 32) * 5) / 9;
  }

  return converted;
}
