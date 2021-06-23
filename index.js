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


$(".portfolio").mouseover(function(){
  $(this).find(".podpis").stop();
  $(this).find(".podpis").slideDown("slow");
});
$(".portfolio").mouseleave(function(){
  
  $(this).find(".podpis").stop();
  $(this).find(".podpis").slideUp("slow");
});


});
