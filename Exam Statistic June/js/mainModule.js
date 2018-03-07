var mainModule = (function (dm, uim) {
    function addHandler() {
        document.querySelector('.add-btn').addEventListener('click', function () {
            var data = uim.getFormData();
            var validationMessage = uim.validateData(data);

            if (validationMessage == uim.messages.OK) {
                var subject = dm.subject(data.subject);
                var student = dm.student(data.name, data.surname);
                var exam = dm.exam(subject, student, data.grade);

                uim.addItemToList(exam);
                uim.updateStatistics(data.grade);
                uim.resetFieldsInput();
                uim.resetError();
            } else {
                uim.setError(validationMessage);
            }
        });
    }

    return {
        init: function() {
            addHandler();
        }
    }
})(dataModule, UIModule);

mainModule.init();