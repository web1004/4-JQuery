$(document).ready(function () {

  $(".main").click(function(){

    //현재 선택한 주메뉴에 해당하는 서브메뉴 토글, 화살표 토글
    $(this).find(".sub").stop().slideToggle(200);
    $(this).find(">a").stop().toggleClass("uparrow");

  });

});