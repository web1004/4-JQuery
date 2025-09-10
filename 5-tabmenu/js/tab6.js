$(document).ready(function(){

  $(".tab li").click(function(){
    let tabNum = $(this).index();
    let tabMove = 70*tabNum; //탭이동박스의 세로높이 70px씩 증가함
    
    $(".tab-header .tab-highlight").animate({top:tabMove});
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let tabResult = $(this).attr("data-alt");
    $(".tab-contents div").removeClass("active");
    $("#"+tabResult).addClass("active");
  });

});