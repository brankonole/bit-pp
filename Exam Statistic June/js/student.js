function Student(name, surname) {
    this.name = name;
    this.surname = surname;
}

Student.prototype.getStudentName = function() {
    return this.name + ' ' +this.surname;
}

var student01 = new Student("Pero","Peric");
console.log(student01);
