function Searcher(users) {
  const filtered = [];

  for (const obj of users) {
    const user = Object.values(obj);

    if (filters.search) {
      let active = user[user.length - 1];

      user.splice(user.length - 1, 1);

      if (
        user.some((val) =>
          String(val).toLowerCase().includes(filters.search.toLowerCase())
        )
      ) {
        if (filters.active || filters.active === false) {
          if (active === filters.active) {
            user.push(active);

            filtered.push(obj);
          }
        } else {
          filtered.push(obj);
        }
      }
    } else {
      if (obj.active === filters.active) {
        filtered.push(obj);
      }
    }
  }

  return filtered;
}

const filtered = Searcher(users);
