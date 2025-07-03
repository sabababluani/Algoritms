function checkUserCanDelete(userIsAdmin, userIsModerator, userIsCommentAuthor) {
  const userCanDelete = userIsAdmin || userIsModerator || userIsCommentAuthor;
  return userCanDelete;
}
