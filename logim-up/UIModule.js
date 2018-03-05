var UIModule = (function() {
    var UISelectors = {
        usernameSelector : "#username",
        passwordSelector: '#password',
        errorSelector: "#error-selector",
        buttonSelector: "#login-button" 
    }

    //dohvatiti podatke
var usernameInput = document.querySelector(UISelectros.usernameSelector);
var passwordInput = document.querySelector(UISelectros.passwordSelector);
var errorBlock = document.querySelector(UISelectors.errorSelector);
var status = {
    OK : "OK",
    MISSING_DATA : 'check username and pass',
    Wrong_DATA : 'check username and pass'
}
function getFormData() {
    var getFormData = {};
    formData.username.usernameInput.value;
    formData.password.usernameInput.value;


    return formData;
}

//validacija podataka
function validateData(usename, password) {
    if(username == "" || password == "") {
        return status.MISSING_DATA;
    }
    return status.OK;
}

//prikaz gresaka
function setError(message) {
    errorBlock.textContent = message;
}

//brisanje gresaka
function clearError(message) {
    errorBlock.textContent = "";
}

return {
    getFormData: getFormData,
    validateData: validateData,
    setError: setError,
    clearError: clearError,
    status: status
}
})();