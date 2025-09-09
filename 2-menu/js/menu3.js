$(document).ready(function(){

  $(".gnb").hover(function(){
    $(this).find(".sub").stop().slideDown(500,"easeOutBounce");
    //탄력함수를 사용하려면 jquery-ui-1.10.4.custom.min.js 파일을 연결해야함
  }, function(){
    $(this).find(".sub").stop().slideUp();
  });

});