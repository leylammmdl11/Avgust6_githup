const student = {
  name: "Leyla",
  grades: [90, 87, 83, 100],
  getAverage() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  }
};
console.log(student.getAverage());
