let homeView = {

    show: () => {

        $("body").empty();
        $(" <div class =loginBody>" + 
        "<div class=container id = title >Leave them kids alone!</div>" +
        "<div class=controls> " +
           " <div id=login>"+
            "<img src=./images/button.png alt=Login Image>" +
                '<h1 class="container" id="logintext"> Login</h1>' +
            '</div>' +
            '<div id="signup">' +
             '   <img src="./images/button.png" alt="Sign Up Image">' +
                '<h1 class="container" id="logintext"> Sign Up</h1>' +
            '</div>' +
       ' </div>' +
        '</div>').appendTo("body")
        $("#login").on("click", () => {
            window.location.hash = "login"
        })
        $("#signup").on("click", () => {
            window.location.hash = "signup"
        })
        
    
    }}






export default homeView;