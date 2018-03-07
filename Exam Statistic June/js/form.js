var addSubjectInput = document.querySelector('.add-subject');
var addStudentNameInput = document.querySelector('.add-student-name');
var addGradeInput = document.querySelector('.add-grade');
var addBtn = document.querySelector('.add-btn');

var subject = addSubjectInput.value;
var student = addStudentNameInput.value;
var grade = addGradeInput.value;

var isValid = false;
var grades = [];

function getValidationData() {
    var arrNameAndSurname = document.querySelector('.add-student-name').value.split(" ");
    var arrName = arrNameAndSurname[0];
    var arrSurname = arrNameAndSurname[1];

    if (document.querySelector('.add-student-name').value == "") {
        addStudentNameInput.classList.add('error');
        addStudentNameInput.placeholder = 'Please provide your name and surname';
    } else if (arrName.charCodeAt(0) <= 65 || arrName.charCodeAt(0) >= 90 && arrSurname.charCodeAt(0) <= 65 || arrSurname.charCodeAt(0) >= 90) {
        addStudentNameInput.classList.add('error');
        addStudentNameInput.value = '';
        addStudentNameInput.placeholder = 'Name and surname should be written correctly';
    } else if (document.querySelector('.add-grade').value == "") {
        addGradeInput.classList.add('error');
        addGradeInput.placeholder = "Fill input";
    } else if (addGradeInput.value < 5 || addGradeInput.value > 10) {
        addGradeInput.classList.add('error');
    } else {
        var grade = addGradeInput.value;

        addStudentNameInput.classList.remove('error');
        addGradeInput.classList.remove('error');
        grades.push(grade);
        isValid = true;
    }
}

function addStudentToList() {
    var passedList = document.querySelector('.passed-list');
    var failedList = document.querySelector('.failed-list');

    if (isValid) {
        if (document.querySelector('.add-grade').value == 5) {
            failedList.innerHTML += '<div class="item clearfix" id="failed-0">\
                <div class="item-description">' + addStudentNameInput.value + '</div >\
                    <div class="right clearfix">\
                        <div class="item-value">' + addGradeInput.value + '</div>\
                        <div class="item-delete">\
                            <button class="item-delete-btn">x</i>\
                            </button>\
                        </div>\
                    </div>\
                </div>'
        }
        else { 
            passedList.innerHTML += '<div class="item clearfix" id="failed-0">\
            <div class="item-description">' + addStudentNameInput.value + '</div >\
                <div class="right clearfix">\
                    <div class="item-value">' + addGradeInput.value + '</div>\
                    <div class="item-delete">\
                        <button class="item-delete-btn">x</i>\
                        </button>\
                    </div>\
                </div>\
            </div>'
        }
    }
}

function statistics() {
    var examFailedPercentage = document.querySelector('.exam-failed-percentage');
    var examPassedPercentage = document.querySelector('.exam-passed-percentage');
    var examFailedCount = document.querySelector('.exam-failed-count');
    var examPassedCount = document.querySelector('.exam-passed-count');
    var allGrades = grades.length;
    var failedStudents = 0;
    var passedStudents = 0;

    for (var i = 0; i < grades.length; i++) {
        if (grades[i] == 5) {
            failedStudents++;
        } else {
            passedStudents++;
        }
    }

    examFailedCount.innerHTML = failedStudents;
    examPassedCount.innerHTML = passedStudents;

    examFailedPercentage.innerHTML = ((failedStudents / allGrades) * 100).toFixed(0) + '%';
    examPassedPercentage.innerHTML = ((passedStudents / allGrades) * 100).toFixed(0) + '%';

}

addBtn.addEventListener('click', function () {
    getValidationData();
    addStudentToList();
    statistics();

    if (isValid) {
        addStudentNameInput.value = "";
        addStudentNameInput.placeholder = "Name Surname";
        addGradeInput.value = "";
    }

    isValid = false
});