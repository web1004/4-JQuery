$(document).ready(function(){

  //각 목록을 클릭했을때 내용이 나옴
  $(".menu").click(function(){ 
    $(this).next().fadeIn();
    //기존의 문서의 새로길이가 길었을때는 스크롤바가 이중으로 나올수 있음
    //$("html").css({"overflow-y":"hidden"})
  });

  //close버튼과 검정배경영역을 클릭할때 닫힘
  $(".close, .modal").click(function(){
    $(".modal").fadeOut(); 
    //$("html").css({"overflow-y":"auto"})
  });

});