$(document).ready(function(){

  //메인메뉴 호버시 서브메뉴 풀다운
  $(".gnb").hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  }, function(){
    $(this).find(".sub").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

  //각각의 주메뉴 호버시 해당하는 서브박스의 전체배경색과 왼쪽이미지 나오게 함
  $(".main").hover(function(){
    $(this).find(".sub").css({"background-color": "#dbe4ea"});
    let subBoxImage = $(this).attr("data-image");
    $(".sub_bgbox_img").css({"background-image":`url(${subBoxImage})`});
  }, function(){
    $(this).find(".sub").css({"background-color": "#fff"});
    $(".sub_bgbox_img").css({"background-image":""});
  });

});