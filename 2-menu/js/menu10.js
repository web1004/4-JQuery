$(document).ready(function () {

  $(".gnb li").click(function(){

    let barWidth = $(this).find(">a").width();  //선택한 메뉴의 가로크기를 가져옴
    let barHeight = $(this).find(">a").height(); //선택한 메뉴의 세로높이를 가져옴     
    let mtop = $(this).offset().top;  //선택한 요소의 top 위치값
    let mleft = $(this).offset().left;  //선택한 요소의 left 위치값
    
    //이동하는 가로선의 너비와 움직이는 위치값
    $("#horizontal-underline").animate({
      left: mleft + "px", 
      top: mtop + barHeight +"px",  //중심점은 왼쪽위가 기준이므로 가져온 top 위치값에 글자의 세로높이를 더해줌(글자아래 선이 위치함)
      width: barWidth
    },300);

  });

});

/* 
$("요소선택").offset().top;   -> 선택한 요소의 top 위치값
$("요소선택").offset().left;  -> 선택한 요소의 left 위치값
*/
