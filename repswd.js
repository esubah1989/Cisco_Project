function resetPass() {

    firebase.auth().useDeviceLanguage();
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    var phoneNumber = getPhoneNumberFromUserInput();
    var appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
        }).catch(function (error) {

        // Error; SMS not sent
        grecaptcha.reset(window.recaptchaWidgetId);

        // Or, if you haven't stored the widget ID:
        window.recaptchaVerifier.render().then(function(widgetId) {
            grecaptcha.reset(widgetId);
        }        // ...
    });

    var code = getCodeFromUserInput();
    confirmationResult.confirm(code).then(function (result) {
        // User signed in successfully.
        var user = result.user;
        // ...
    }).catch(function (error) {
        // User couldn't sign in (bad verification code?)
        // ...
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            alert("Thank you for authenticating.");
            location = 'StartTest.html';
            // User is signed in.
        } else {
            alert("There was an error");
            // No user is signed in.
        }
    });
}