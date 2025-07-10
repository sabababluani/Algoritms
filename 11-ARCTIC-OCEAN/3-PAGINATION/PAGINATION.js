function paginate(users, page, limit) {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return users.slice(startIndex, endIndex);
}
