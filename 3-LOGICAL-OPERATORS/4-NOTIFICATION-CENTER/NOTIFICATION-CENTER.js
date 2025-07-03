function checkSendNotification(
  senderIsFriend,
  senderMuted,
  groupMessage,
  groupMuted,
  userMentioned
) {
  const sendNotification =
    (senderIsFriend && !senderMuted) ||
    (groupMessage && (!groupMuted || userMentioned));
  return sendNotification;
}
