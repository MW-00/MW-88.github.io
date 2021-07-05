$(function () {

  
$("#webSkillsButton").click(function(){
  $(".skills").hide(0);
  $("#webSkills").fadeIn(800);
});

$("#artSkillsButton").click(function(){
  $(".skills").hide(0);
  $("#artSkills").fadeIn(800);
});

$("#architectureSkillsButton").click(function(){
  $(".skills").hide(0);
  $("#architectureSkills").fadeIn(800);
});



$(".lista").mouseover(function(){
  $(this).find(".symbol").addClass("symbolFilled");
});
$(".lista").mouseleave(function(){
  $(this).find(".symbol").removeClass("symbolFilled");
});



// podpisy stron w portfolio
if (window.matchMedia('(max-width: 767px)').matches) {
  $(".podpis").show();

  } else {

    $(".portfolio").mouseover(function(){
      $(this).find(".podpis").stop();
      $(this).find(".podpis").slideDown("slow");
    });
    $(".portfolio").mouseleave(function(){
      $(this).find(".podpis").stop();
      $(this).find(".podpis").slideUp("slow");
    });
  }
});


// przycisk powrotu na górę 
upButton = document.getElementById("upButton");
var windowScroll = function() {
  if (window.scrollY >= 400) {
    upButton.className = "opacity1"
  } else {
    upButton.className = "opacity0"
  }
};
window.addEventListener("scroll", windowScroll);

