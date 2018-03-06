var addSubjectInput = document.querySelector('.add-subject');
var addStudentNameInput = document.querySelector('.add-student-name');
var addGradeInput = document.querySelector('.add-grade');
var addBtn = document.querySelector('.add-btn');

var subject = addSubjectInput.value;
var student = addStudentNameInput.value;
var grade = addGradeInput.value;

var isValid = false;
var grades = [];

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
    var itemDiv = document.createElement('div');
    var itemDivDesc = document.createElement('div');
    var itemDivRight = document.createElement('div');
    var itemValue = document.createElement('div');
    var itemDelete = document.createElement('div');
    var btnDelete = document.createElement('button');
    var btnX = document.createTextNode('X');
    itemDiv.classList.add('item', 'clearfix');
    itemDivDesc.classList.add('item-description');
    itemDivRight.classList.add('right', 'clearfix');
    itemValue.classList.add('item-value');
    itemDelete.classList.add('item-delete');
    btnDelete.classList.add('item-delete-btn');
    btnDelete.appendChild(btnX);
    // itemDiv.setAttribute('id','passed-0')

    if (isValid) {
        if (document.querySelector('.add-grade').value == 5) {
            var nameOfTheStudent = document.querySelector('.add-student-name').value;
            var gradeOfTheStudent = document.querySelector('.add-grade').value;
    
            console.log(nameOfTheStudent, gradeOfTheStudent);
    
            var nameAndSurname = document.createTextNode(nameOfTheStudent.toString());
            var grade = document.createTextNode(gradeOfTheStudent.toString());
    
            itemDivDesc.appendChild(nameAndSurname);
            itemValue.appendChild(grade);
    
    
            itemDelete.appendChild(btnDelete);
            itemDiv.appendChild(itemDivDesc);
            itemDivRight.appendChild(itemValue);
            itemDivRight.appendChild(itemDelete);
            itemDiv.appendChild(itemDivRight);
    
            failedList.appendChild(itemDiv);
        }
        else {
            var nameOfTheStudent = document.querySelector('.add-student-name').value;
            var gradeOfTheStudent = document.querySelector('.add-grade').value;
    
            console.log(nameOfTheStudent, gradeOfTheStudent);
    
            var nameAndSurname = document.createTextNode(nameOfTheStudent.toString());
            var grade = document.createTextNode(gradeOfTheStudent.toString());
    
            itemDivDesc.appendChild(nameAndSurname);
            itemValue.appendChild(grade);
    
    
            itemDelete.appendChild(btnDelete);
            itemDiv.appendChild(itemDivDesc);
            itemDivRight.appendChild(itemValue);
            itemDivRight.appendChild(itemDelete);
            itemDiv.appendChild(itemDivRight);
    
            passedList.appendChild(itemDiv);
        }
    }
}

function statistics () {
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

    examFailedPercentage.innerHTML = (failedStudents/allGrades)*100 + '%';
    examPassedPercentage.innerHTML = (passedStudents/allGrades)*100 + '%';
    
}

addBtn.addEventListener('click', function () {

    getValidationData();
    addStudentToList();
    statistics();

    if (isValid) {
        addStudentNameInput.value = "";
        addGradeInput.value = "";
    }

    isValid = false
});