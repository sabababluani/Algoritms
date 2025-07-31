function circularPrimeCount(limit) {
  const isPrime = (n) => {
    if (n < 2) return false;

    if (n === 2) return true;

    if (n % 2 === 0) return false;

    const sqrt = Math.floor(Math.sqrt(n));

    for (let i = 3; i <= sqrt; i += 2) {
      if (n % i === 0) return false;
    }

    return true;
  };

  const getRotations = (num) => {
    const str = num.toString();

    const rotations = [];

    for (let i = 0; i < str.length; i++) {
      const rotation = str.slice(i) + str.slice(0, i);

      rotations.push(parseInt(rotation, 10));
    }

    return rotations;
  };

  let count = 0;

  for (let i = 2; i < limit; i++) {
    const rotations = getRotations(i);

    if (rotations.every(isPrime)) {
      count++;
    }
  }

  return count;
}
