var addSubjectInput = document.querySelector('.add-subject');
var addStudentNameInput = document.querySelector('.add-student-name');
var addGradeInput = document.querySelector('.add-grade');

var subject = addSubjectInput.value;
var student = addStudentNameInput.value;
var grade = addGradeInput.value;

function collectInputData() {
    // return subject + student + grade;
    var result = {
        subject: subject,
        student: student,
        grade: grade
    }
    return result;
}

function getValidationData() {
    if (student == "") {
        if (grade <=4 && grade>=11)
    }
}