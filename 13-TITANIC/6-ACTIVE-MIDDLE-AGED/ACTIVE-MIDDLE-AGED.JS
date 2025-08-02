function activeMiddleAged(users) {
  const newArr = [];

  let lastId = 1;

  for (let i = lastId; i < users.length; i++) {
    const obj = users.find((e) => {
      const reason = e.age > 30 && e.active && e.id > lastId;

      if (reason) {
        lastId = e.id;
      }

      return reason;
    });

    if (obj) {
      newArr.push(obj);
    } else {
      break;
    }
  }

  return newArr;
}