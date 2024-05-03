let signupView = {
    show:() => {
    
        $("body").empty();
    $("<div class='form-container'>" +
    "<div class='form-group'>" +
    "<label for='usernamesignup'>Insert your Username</label>" +
    "<input id='usernamesignup' type='text'>" +
    "</div>" +
    "<div class='form-group'>" +
    "<label for='passwordsignup'>Insert your Password</label>" +
    "<input id='passwordsignup' type='password'>" +
    "</div>" +
    "<div class='form-group'>" +
    "<label for='confirmPW'>Confirm Password</label>" +
    "<input id='confirmPW' type='password'>" +
    "</div>" +
    "<div class='form-group'>" +
    "<label for='emailsignup'>Insert your E-mail</label>" +
    "<input id='emailsignup' type='email'>" +
    "</div>" +
    "<div class='form-group'>" +
    "</div>" +
    "<button id='submitsign'>Sign</button>" +
    "</div>"  +
    '<div id="back">' +
            '   <img src="./images/back.png" alt="Sign Up Image">'+
            '</div>'  
    ).appendTo("body");

    $("#back").on("click", ()=>{
        window.location.hash = "home"
    
    } )
     
    }
    
    
    
    }
    export default signupView