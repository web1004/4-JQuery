$(document).ready(function(){
	
  //각 목록을 클릭했을때.....
  $(".menu").click(function(){ 
    $(this).next().fadeIn();
    $("html").css({"overflow-y":"hidden"});
    //return false;  a기능차단으로 넣지만 지금은 연결된 상태가 아니므로 넣지 않아도 됨 
  });

  //close버튼과 검정배경영역을 클릭할때.....
  $(".close, .modal").click(function(){
    $(".modal").fadeOut(); 
    $("html").css({"overflow-y":"scroll"}); 
  });

});