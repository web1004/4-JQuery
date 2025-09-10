$(document).ready(function(){

  $(".title").click(function(){
    $(this).siblings(".title").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".content").stop().slideUp();
    $(this).next().stop().slideToggle();
  });

});

//next(), prev() : 형제요소를 찾을때 사용함