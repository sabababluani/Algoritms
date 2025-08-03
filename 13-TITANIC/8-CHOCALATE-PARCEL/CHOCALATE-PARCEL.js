function chocolatesParcel(nSmall, nBig, goal) {
  const maxBigUsed = Math.min(Math.floor(goal / 5), nBig);
  const remainingWeight = goal - maxBigUsed * 5;
  if (remainingWeight <= nSmall * 2 && remainingWeight % 2 === 0) {
    return remainingWeight / 2;
  } else {
    return false;
  }
}
