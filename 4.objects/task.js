'use strict'

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark)
  }
}

Student.prototype.addMarks = function (...marks) {
  this.marks = []; 
  for(let mark of marks) {
    this.marks.push(mark);
  }     
}

Student.prototype.getAverage = function () {
  let sum = 0;
  let avg = 0;
  for(let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }
  avg = sum / this.marks.length;
  this.average = avg;
  return this.average;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

