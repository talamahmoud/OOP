function Student(name, age, grade) {
  this.name = name;
  this.age = age;

  if (grade === "A" || grade === "F") {
    this._grade = grade;
  } else {
    throw new Error("Invalid initial grade! Must be 'A' or 'F'.");
  }
}

Student.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name}, I’m ${this.age} years old, and I’m in grade ${this._grade}.`);
};

Student.prototype.getGrade = function () {
  return this._grade;
};

Student.prototype.setGrade = function (newGrade) {
  if (newGrade === "A" || newGrade === "F") {
    this._grade = newGrade;
  } else {
    throw new Error("Invalid grade! Grade can only be 'A' or 'F'.");
  }
};

// Example
const student1 = new Student("Tala", 22, "A");
student1.introduce();
console.log(student1.getGrade());
student1.setGrade("F");
console.log(student1.getGrade());
