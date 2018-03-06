function Exam(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
}
Exam.prototype.GetExamInfo = function () {
    return this.subject.getSubjectName() + ", " + this.student.getStudentName();
}
Exam.prototype.hasPassed = function () {
    if (this.grade > 5  ) {
        return "Student is passed";
    }
    else {
        return "Student isn't passed";
    }
}
