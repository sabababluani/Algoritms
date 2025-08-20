function splitBunches(bunches) {
  let newArray = [];
  for (let i = 0; i < bunches.length; i++) {
    const { name, quantity } = bunches[i];

    for (let j = 0; j < quantity; j++) {
      newArray.push({ name, quantity: 1 });
    }
  }

  return newArray;
}
