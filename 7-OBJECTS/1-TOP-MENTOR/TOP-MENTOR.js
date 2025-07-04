function findTopStudentsMentor(mentors) {
  let maxScore = 0;
  let topStudentsMentorId = 0;

  for (let i = 0; i < mentors.length; i++) {
    for (let j = 0; j < mentors[i].students.length; j++) {
      let sum = 0;
      for (let k = 0; k < mentors[i].students[j].allScores.length; k++) {
        sum += mentors[i].students[j].allScores[k];
      }
      if (sum > maxScore) {
        maxScore = sum;
        topStudentsMentorId = mentors[i].id;
      }
    }
  }

  return topStudentsMentorId;
}
