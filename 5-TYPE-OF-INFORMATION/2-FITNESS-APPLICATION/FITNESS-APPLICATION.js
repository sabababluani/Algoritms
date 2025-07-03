function checkWeightGoal(userWeights, goal) {
  if (userWeights[userWeights.length - 1] <= goal) {
    console.log("Congratulations, goal achieved!");
    return true;
  } else {
    const weightleft = userWeights[userWeights.length - 1] - goal;
    console.log(`You have ${weightleft} kilograms left to lose.`);
    return false;
  }
}
