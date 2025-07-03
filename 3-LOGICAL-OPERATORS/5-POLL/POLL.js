function checkVotingDecision(student1, student2, student3, student4, student5) {
  const yesCount = student1 + student2 + student3 + student4 + student5;
  const decision = yesCount > 2;
  return decision;
}
