$(document).ready(function(){

  $(window).scroll(function(){
    let scrollPostion = $(this).scrollTop();
    $("#quickBanner").stop().animate({top:scrollPostion+350},400);
  });


});