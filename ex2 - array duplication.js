// We are managing a data structure of students
// Each student now has: firstName, lastName, batch, age

const STUDENTS_DATA = [
  { firstName: "A", lastName: "ligma", batch: "A1", age: 20 },
  { firstName: "B", lastName: "therock", batch: "A1", age: 22 },
  { firstName: "C", lastName: "itc", batch: "A2", age: 21 },
  { firstName: "D", lastName: "smc", batch: "A2", age: 19 }, // Same first name, different student
];

/**
 * Update 1 student age, given firstName + lastName + batch
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} batch
 * @param {number} newAge
 */
function updateStudentAge(firstName, lastName, batch, newAge) {
  const student = STUDENTS_DATA.find(
    (s) =>
      s.firstName === firstName &&
      s.lastName === lastName &&
      s.batch === batch
  );

  if (student) {
    student.age = newAge;
  }
}

// --------------------------------------------------------
// TESTS
// --------------------------------------------------------

// 1 - Update An Nguyen from batch A1 to age 30
updateStudentAge("A", "ligma", "A1", 30);

// 2 - Print updated data
console.log(JSON.stringify(STUDENTS_DATA, null, 2));
