$(document).ready(function(){

  $(".title").click(function(){
    $(this).siblings(".title").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".desc").stop().slideUp();
    $(this).next().stop().slideToggle();

    let dataImage = $(this).attr("data-image");
    $(".image img").attr({"src":dataImage}).hide().fadeIn();
  });

});