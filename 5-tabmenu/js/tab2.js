$(document).ready(function(){

  $(".title").click(function(){
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");   
    $(this).siblings().stop().slideUp();
    $(this).next().stop().slideToggle();
  });

});

//next(), prev() : 형제요소를 찾을때 사용함