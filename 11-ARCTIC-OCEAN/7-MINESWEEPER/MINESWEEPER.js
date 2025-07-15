function minesweeper(array) {
  let count = 0;

  for (let i = 0, len = array.length; i < len; i++) {
    const currentRow = array[i];

    const topRow = array[i - 1];

    const bottomRow = array[i + 1];

    for (let j = 0, innerLen = currentRow.length; j < innerLen; j++) {
      if (currentRow[j] === "0") {
        if (j !== 0 && currentRow[j - 1] === "X") count++;

        if (j !== innerLen - 1 && currentRow[j + 1] === "X") count++;

        if (i !== 0 && topRow[j] === "X") count++;

        if (i !== len - 1 && bottomRow[j] === "X") count++;

        if (i !== 0 && j !== 0 && topRow[j - 1] === "X") count++;

        if (i !== 0 && j !== innerLen - 1 && topRow[j + 1] === "X") count++;

        if (i !== len - 1 && j !== 0 && bottomRow[j - 1] === "X") count++;

        if (i !== len - 1 && j !== innerLen - 1 && bottomRow[j + 1] === "X")
          count++;

        currentRow.splice(j, 1, count.toString());

        count = 0;
      }
    }
  }

  return array;
}
