$(document).ready(function(){

  $("dl dt").click(function(){
    $(this).siblings("dt").removeClass("selected");
    $(this).toggleClass("selected");
    $(this).siblings("dd").stop().hide("slow");
    $(this).next().stop().show("slow");

    let dataBackImage = $(this).attr("data-background");
    $(".image img").attr({"src":dataBackImage}).hide().fadeIn();
    let dataText = $(this).attr("data-text");
    $(".text p").text(dataText);
  });

});