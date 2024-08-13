const students = [
  {
    id: 1,
    name: "Alice",
    courses: ["Math", "Science", "History"],
  },
  {
    id: 2,
    name: "Bob",
    courses: ["History", "English", "Math", "Art"],
  },
  {
    id: 3,
    name: "Charlie",
    courses: ["Science", "English", "Music"],
  },
  {
    id: 4,
    name: "David",
    courses: ["Math", "History", "Art", "PE"],
  },
  {
    id: 5,
    name: "Eva",
    courses: ["Science", "Math", "Music"],
  },
  {
    id: 6,
    name: "Frank",
    courses: ["English", "Art"],
  },
  {
    id: 7,
    name: "Grace",
    courses: ["Math", "Science", "English", "Music"],
  },
  {
    id: 8,
    name: "Helen",
    courses: ["History", "Art", "PE"],
  },
  {
    id: 9,
    name: "Ivy",
    courses: ["Science", "English", "Art"],
  },
  {
    id: 10,
    name: "Jack",
    courses: ["Math", "History", "Music"],
  },
];
/**********
  Question 1:
  You have a function getStudentName(student) that:
  - receives a student object
  - returns the name of the student
  Don't forget to uncomment the console.log
  ===
  ANSWER: Alice
  **********/

function getStudentName(student) {
  return student.name;
}
console.log(getStudentName(students[0]));

/**********
    Question 2:
    You have a function that:
    - recieves a student object
    - recieves a course index (number)
    - returns the course at the specified index in the student's courses array
      ===
      ANSWER: Music
    **********/

function getCourse(student, courseIndex) {
  return student.courses[courseIndex]; //go to students array, then i want to access courses key so student.courses, now courses is array so shoose an index[].
}
console.log(getCourse(students[4], 2));

/**********
    Question 3:
    addCourseToStudent(student, course):
    - recieves a student object
    - recieves a course name (string)
    - adds the course to the student's courses array
    - returns the student object
      ===
      ANSWER: 
      {
        id: 8,
        name: 'Helen',
        courses: [ 'History', 'Art', 'PE', 'Physics' ]
      }
      **********/

function addCourseToStudent(student, course) {
  student.courses.push(course);
  return student;
}

console.log(addCourseToStudent(students[7], "Physics"));

/**********
  Question 4:
  countCourses(student):
  - recieves a student object
  - returns the number of courses the student is enrolled in
	===
	ANSWER: 4
  **********/
function countCourses(student) {
  return `student enrolled in : ${student.courses.length} courses`;
}
console.log(countCourses(students[1]));
/**********
  Question 6:
  removeCourseFromStudent(course, student):
  - recieves a student object
  - recieves a course name (string)
  - removes the course from the student's courses array
  - returns the student object
  ===
  ANSWER:
  { id: 7, name: 'Grace', courses: [ 'Math', 'English', 'Music' ] }
  **********/

function removeCourseFromStudent(student, course) {
  const courseIndex = student.courses.indexOf(course); //find index of science to splice it.
  if (courseIndex !== -1) {
    // Check if the course exists.(index is there)
    student.courses.splice(courseIndex, 1); // i splice this index. (delete it)
  }
  return student; // return the remaining array.
}
console.log(removeCourseFromStudent(students[6], "Science"));

/**********
  Question 7:
  findStudentById(studentId, students):
  - recieves an array of student objects
  - recieves a student id (number)
  - returns the student object with the matching id
  ===
  ANSWER: { id: 10, name: 'Jack', courses: [ 'Math', 'History', 'Music' ] }
  **********/
function findStudentById(studentId, students) {
  return students.find((studentObject) => studentObject.id == studentId); // Use find to locate the student
}

// Example usage
console.log(findStudentById(10, students));
