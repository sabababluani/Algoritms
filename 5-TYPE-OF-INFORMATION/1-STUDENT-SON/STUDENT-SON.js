function checkGigoProgress(gigosTestResults) {
  const progress =
    gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0];

  const progressCounter = progress / (gigosTestResults.length - 1);

  if (progressCounter >= 5) {
    console.log("You have a good son, ma'am, don't worry.");
  } else if (progressCounter >= 2) {
    console.log("I don't know, he's talented but lazy.");
  } else {
    console.log("Oh Bob, Bobbb.");
  }

  return progressCounter;
}
