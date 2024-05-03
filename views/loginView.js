import loginService from "../services/login-service.js"; // Adjust the path accordingly

let loginView = {
    show: () => {
        $("body").empty();
        $("<div class='form-container'>" +
            "<h1>Sign In</h1>" +
            "<div class='form-group'>" +
            "<label for='usernamesignup'>Insert your Username</label>" +
            "<input type='text' id='usernamesignup'>" +
            "</div>" +
            "<div class='form-group'>" +
            "<label for='passwordsignup'>Insert your Password</label>" +
            "<input type='password' id='passwordsignup'>" +
            "</div>" +
            "<button id='submitsign'>Sign</button>" +
            "</div>" +
            '<div id="back">' +
            '<img src="./images/back.png" alt="Sign Up Image">' +
            '</div>'
        ).appendTo("body");

        $("#back").on("click", () => {
            window.location.hash = "#home";
        });

        $("#submitsign").on("click", () => {
            let username = $("#usernamesignup").val();
            let password = $("#passwordsignup").val();

            if (loginService.authenticate(username, password)) {
                // If authentication is successful, navigate to the main page
                window.location.hash = "#mainpage";
            } else {
                // If authentication fails, display an error message
                console.log("Authentication failed. Please check your credentials.");
                return false;
            }
        });
    }
};

export default loginView;