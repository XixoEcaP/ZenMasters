const mainpage1view = {
    show: () => {
        $("body").empty();
        $('<header><h1>ZEN MASTER</h1><img src="./images/meditationGirl.png" class="meditationDrawGirl"><img src="./images/meditationBoy.png" class="meditationDrawBoy"> '+
        '<img id = "logout" src="./images/logoutRmvButton.png" class="buttonlogout">'+
        '<img src="./images/change-password-icon (1).png" class="changepassButton"></header>' +
        '<main><div id="sidebar"><h2 id="categories">CATEGORIES</h2><ul><div class="category1"><li onclick="toggleCategoryLinks(\'category1\')" id="introduction">Introduction</li><ul class="category-links" id="category1-links">'  +
        '<li><a href="#mainpage1">Types of Meditation</a></li>' +
        '<li><a href="#mainpage2">How To Meditate</a></li>' +
        '</ul>' +
        '</div><div class="category2">'+
        '<li id="guidedMeditation"onclick="toggleCategoryLinks(\'category2\')" style="font-weight: bold;">Guided Meditation</li>'+
        '<ul class="category-links" id="category2-links">'+       
        '<li><a href="#mainpage3">5 minutes</a></li>' +
        '<li><a href="#mainpage4">10 minutes</a></li>'+
        '<li><a href="#mainpage5">15 minutes</a></li>'+
        '</ul>'+
        '</div>'+
        '<div class="category3">'+ 
        '<li id="lovingMedi"onclick="toggleCategoryLinks(\'category3\')" style="font-weight: bold;">Mindfulness Meditation</li>'  +
        '<ul class="category-links" id="category3-links">' +    
        '<li><a href="#mainpage7">Self Love</a></li>'+
        '<li><a href="#mainpage8">Reprogramming Your Mind</a></li>'+
        '<li><a href="#mainpage9">Loving Kindness</a></li> ' +
        '</ul>' +
        '</div>' +
        '<div class="category4">' +
        '<li id="zenMastersTittle"onclick="toggleCategoryLinks(\'category4\')" style="font-weight: bold;">Zen Masters</li>' +
        '<ul class="category-links" id="category4-links">' +
        '<li><a href="#mainpage10">Ultimate Meditation</a></li>' +
        '<li><a href="#mainpage11">"After" Meditation</a></li>' +
        '<li><a href="#mainpage12">"Lembre-se de se lembrar</a></li>' +
        '</ul>' +
        '</div>' +
        '</ul>' + 
        '</div>' +
        '<div id="video-player-container">' +
        '<iframe width="1000" height="700" src="https://www.youtube.com/embed/H37BDUyCEe0" frameborder="0" allowfullscreen></iframe>' +
        '</div>' +
        '<div id="background-video-container">' +
        '<video autoplay muted loop id="background-video">' +
        '<source src="../video/nightSky.mp4" type="video/mp4">' +
        'Your browser does not support the video tag.' +
        '</video>' +
        '</div>' +
        '</main>').appendTo("body");
        $("#logout").on("click", () =>{
            window.location.hash = "home";
        })
    }
    
}

export default mainpage1view;
