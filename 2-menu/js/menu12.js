$(document).ready(function () {

  $(".lnbMenu li:not(.on)").mouseenter(function(){

    let barWidth = $(this).find(">a").width();
    let mleft = $(this).offset().left;  
    $("#horizontal-underline").animate({
      left: mleft + "px", 
      width: barWidth
    },300);

  });

  $(".lnbMenu").mouseleave(function(){
    let barWidth = $(".on").find(">a").width();
    let mleft = $(".on").offset().left;  
    $("#horizontal-underline").animate({
      left: mleft + "px", 
      width: barWidth
    },300);
  });

});