function listOfVoters(people) {
  const voters = [];

  people.forEach((person) => {
    voters.push({
      isAdult: person.age >= 18,
      fullName: person.firstName + " " + person.lastName,
      location: person.address.city + ", " + person.address.country,
    });
  });

  return voters;
}
