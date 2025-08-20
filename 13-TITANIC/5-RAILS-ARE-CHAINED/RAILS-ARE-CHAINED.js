function railesAreChained(rails) {
  let raceComplete = false;
  let nextJ = 0;
  for (let i = 0; i < rails.length; i++) {
    if (rails[5][8] !== "#") {
      return "there is no rails to go";
    }
    for (let j = nextJ; j < rails[i].length; j++) {
      if (rails[i][j] === "#" && rails[i][j + 1] === "#") {
        continue;
      } else if (
        rails[i + 1] &&
        rails[i][j] === "#" &&
        rails[i + 1][j] === "#"
      ) {
        nextJ = j;
        break;
      } else if (rails[i][j + 1] !== "#" && rails[i + 1] && rails[i + 1][j]) {
        return "there is no rails to go";
      }
      if (j === 8 && i == 5) {
        raceComplete = true;
      }
    }
  }
  if (raceComplete) {
    return "valid rails";
  } else {
    return "there is no rails to go";
  }
}
