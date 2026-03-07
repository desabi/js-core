// Grade calculator
function getLetterGrade(score) {
  let grade;
  let feedback;

  if (score >= 90) {
    grade = "A";
    feedback = "Excellent work!";
  } else if (score >= 80) {
    grade = "B";
    feedback = "Good job!";
  } else if (score >= 70) {
    grade = "C";
    feedback = "You passed.";
  } else if (score >= 60) {
    grade = "D";
    feedback = "Needs improvement.";
  } else {
    grade = "F";
    feedback = "Please see your instructor.";
  }

  console.log(`Grade: ${grade} — ${feedback}`);
}

getLetterGrade(95); // Grade: A — Excellent work!
getLetterGrade(73); // Grade: C — You passed.
getLetterGrade(41); // Grade: F — Please see your instructor.