function checkUserCanEnter(
  userPaid,
  userIsAdmin,
  courseIsOnline,
  courseHasRecording
) {
  const userCanEnter =
    ((userPaid || userIsAdmin) && courseIsOnline) || courseHasRecording;
  return userCanEnter;
}
