var dataModule = (function () {
    function Subject(name) {
        this.name = name;
    }

    Subject.prototype.getSubjectName = function () {
        return this.name;
    }

    function Student(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Student.prototype.getStudentData = function () {
        return this.name + ' ' + this.surname;
    }

    function Exam(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }
    
    Exam.prototype.getExamInfo = function () {
        return this.subject.getSubjectName() + " - " + this.student.getStudentData();
    }
    
    Exam.prototype.hasPassed = function () {
        if (this.grade > 5) {
            return true;
        } else {
            return false;
        }
    }

    return {
        subject: function(name) {
            return new Subject(name);
        },
        student: function(name, surname) {
            return new Student(name, surname);
        },
        exam: function(subject, student, grade) {
            return new Exam(subject, student, grade);
        }
    }
})();