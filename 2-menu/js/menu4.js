$(document).ready(function(){

  $(".gnb").hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  }, function(){
    $(this).find(".sub").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

});