$(document).ready(function () {
    
// rozwijanie menu i pogrubienie

$("#lista a").click(function(){
    $(this).parent().siblings().children("ul").slideUp();
    $(this).parent().siblings().children("ul").scrollTop(0);
    $(this).parent().find("ul").slideToggle("slow");
});

$(".tytuly li a").click(function(){
    $(".tytuly li a").removeClass("titleClicked");    
    $(this).toggleClass("titleClicked");
    $("#frame").attr("src", "podstrony/pusta.html");
});

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

// monogram w pętli
setInterval(function(){loop()},600);
function loop(){
    $("#monogram").fadeToggle(4000);
}

});

  

  
