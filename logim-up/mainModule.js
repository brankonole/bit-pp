var mainModule = (function (UIModule, dataModule) {

    function addLoginButtonListener() {

        document.querySelector(UIModule.UISelectors.buttonSelector).addEventListener('click', function () {

            //procitati podatke iz formulara
            var formData = UIModule.getFormData();

            //validacija
            var validationResult = UIModule.validateData(formData.username, formData.password)

            if (validationResult == UIModule.status.MISSING_DATA) {
                UIModule.setError(UIModule.status.MISSING_DATA);
                return;
            }

            //provereiti da li korisnik postoji
            var checkUsernameAndPassword = dataModule.checckUsernameAndPassword(formData.username, formData.password)
            if (checkUsernameAndPassword == false) {
                UIModule.setError(UIModule.status.WRONG_DATA);
                return;
            }
            UIModule.setError(UIModule.status.OK);

            //


        });
    }
    return {
        init: function() {
            console.log('lets go...');
            addLoginButtonListener();
            
        }
    }
})(UIModule, dataModule);

mainModule.init();