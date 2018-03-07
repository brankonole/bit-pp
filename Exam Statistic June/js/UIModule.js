var UIModule = (function () {
    var subjectInput = document.querySelector('.add-subject');
    var studentNameInput = document.querySelector('.add-student-name');
    var addGradeInput = document.querySelector('.add-grade');

    var passedList = document.querySelector('.passed-list');
    var failedList = document.querySelector('.failed-list');

    var examFailedPercentage = document.querySelector('.exam-failed-percentage');
    var examPassedPercentage = document.querySelector('.exam-passed-percentage');
    var examFailedCount = document.querySelector('.exam-failed-count');
    var examPassedCount = document.querySelector('.exam-passed-count');

    var errorBlock = document.querySelector('.js-error-message');

    var isValid = false;
    var grades = [];

    var messages = {
        OK: 'OK',
        NAME_AND_SURNAME_REQUIRED: 'Please provide your name and surname',
        NAME_AND_SURNAME_WRONG: 'Name and surname should be written correctly',
        GRADE_REQUIRED: 'Fill grade input',
        GRADE_RANGE: 'Grade must be between 5 to 10'
    }

    function getFormData() {
        var subject = subjectInput.value;
        var nameAndSurname = studentNameInput.value.split(" ");
        var name = nameAndSurname[0];
        var surname = nameAndSurname[1];
        var grade = addGradeInput.value;

        return {
            name,
            surname,
            grade,
            subject
        }
    }

    function validateData(data) {
        var fln = data.name && data.name.charCodeAt(0);
        var fls = data.surname && data.surname.charCodeAt(0);
        
        if (!data.name || !data.surname) {
            return messages.NAME_AND_SURNAME_REQUIRED;
        } else if (fln < 65 || fln > 90 && fls < 65 || fls > 90) {
            return messages.NAME_AND_SURNAME_WRONG;
        } else if (data.grade == "") {
            return messages.GRADE_REQUIRED;
        } else if (data.grade < 5 || data.grade > 10) {
            return messages.GRADE_RANGE;
        } else {
            return messages.OK;
        }
    }

    function addItemToList(item) {
        var list = item.hasPassed() ? passedList : failedList;

        list.innerHTML += '<div class="item clearfix" id="failed-0">\
                <div class="item-description">' + item.getExamInfo() + '</div >\
                    <div class="right clearfix">\
                        <div class="item-value">' + item.grade + '</div>\
                        <div class="item-delete">\
                            <button class="item-delete-btn">x</button>\
                        </div>\
                    </div>\
                </div>'
    }

    function updateStatistics(grade) {
        grades.push(grade);

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

    function setError(message){
        errorBlock.textContent = message;
    }

    function resetError() {
        errorBlock.textContent = '';
    }

    function resetFieldsInput() {
        subjectInput.value = 'web';
        studentNameInput.value = '';
        addGradeInput.value = '';
    }

    return {
        getFormData,
        validateData,
        addItemToList,
        updateStatistics,
        setError,
        messages,
        resetFieldsInput,
        resetError
    }
})();