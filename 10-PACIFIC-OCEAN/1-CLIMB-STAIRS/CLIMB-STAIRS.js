function climbStairs(num) {
  if (num <= 1) return 1;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= num; i++) {
    let temp = first + second;
    first = second;
    second = temp;
  }

  return second;
}
