function trackRobot(movements) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < movements.length; i++) {
    const move = movements[i];

    if (i % 4 === 0) y += move;
    else if (i % 4 === 1) x += move;
    else if (i % 4 === 2) y -= move;
    else if (i % 4 === 3) x -= move;
  }

  return [x, y];
}
