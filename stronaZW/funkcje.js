$(document).ready(function () {
    
// rozwijanie menu i pogrubienie
$("#lista a").click(function(){
    $(this).parent().siblings().children("ul").slideUp();
    $(this).parent().siblings().children("ul").scrollTop(0);
    $(this).parent().find("ul").slideToggle("slow");
});

// ukrycie sekcji w widoku telefonu
$(".tytuly li a, #oAutorze").click(function(){
    if (window.matchMedia('(max-width: 767px)').matches) {
        $(".tytuly li a").removeClass("titleClicked");    
        $(this).toggleClass("titleClicked");
        $("#frame").attr("src", "podstrony/pusta.html");
        $(".menu").hide();
        $("footer").hide();
        $(".main").show();
    } else {
        $(".tytuly li a").removeClass("titleClicked");    
        $(this).toggleClass("titleClicked");
        $("#frame").attr("src", "podstrony/pusta.html");
    }
    
});


//cofniecie pogrubienia przy zwinieciu menu
$(".rodzaj").click(function(){
    if ($(this).hasClass("titleClicked")) {
        $(this).removeClass("titleClicked");
        $("#frame").attr("src", "podstrony/pusta.html");
        }
    else {
        $(".rodzaj").removeClass("titleClicked");
        $(this).addClass("titleClicked");
    }
});

//pojawienie sie strzałki powrotu
$(".tytuly li a, #oAutorze").click(function(){
    if (window.matchMedia('(max-width: 767px)').matches) {
    $("#powrot").fadeIn(1500);
    }
})


});

  

  
