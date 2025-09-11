$(document).ready(function(){

  $(window).scroll(function(){
    let scrollPositon = $(this).scrollTop();
    $("#quickBanner").stop().animate({top:scrollPositon+350},400);
  });

});