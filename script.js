// Create a class named Student that takes in name, age, and major as constructor parameters.
// Create an instance of student saved to a variable and console.log the variable


class Student {
  constructor(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
  }
}

let studentOne = new Student("Kevinn", 24, "Web Development");
let studentTwo = new Student("Christine", 23, "Political Science");


console.log(studentOne);
console.log(studentTwo);