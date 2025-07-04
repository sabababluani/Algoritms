function logRaceProgress(checkpoints, finish) {
  for (let i = 0; i < checkpoints.length; i++) {
    console.log(
      `Congratulations! You reached the ${checkpoints[i]} km checkpoint`
    );
  }

  console.log(`Congratulations! You crossed the finish line at ${finish}`);
}
