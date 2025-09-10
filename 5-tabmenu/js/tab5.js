$(document).ready(function(){

  $(".tab li").click(function(){
    let tabNum = $(this).index();
    let tabMove = 160*tabNum; //160*0, 160*1, 160*2 .....탭이동박스의 가로폭 160px씩 증가함
    
    $(".tab-header .tab-highlight").animate({left:tabMove});
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let tabResult = $(this).attr("data-alt");
    $(".tab-contents div").removeClass("active");
    $("#"+tabResult).addClass("active");
  });

});