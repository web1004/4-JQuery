$(document).ready(function () {

  $(".gnb").hover(function(){
    $(this).find(".sub").stop().slideDown(500,"easeOutBounce");
  }, function(){
    $(this).find(".sub").stop().slideUp();
  });

});