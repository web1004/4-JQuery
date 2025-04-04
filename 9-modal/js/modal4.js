$(document).ready(function(){
	
  //각 목록을 클릭했을때.....
  $(".item_list>li").click(function(){

    g_pop=$(this).index();

    $(".g_page span:nth-child(1)").text(g_pop+1);  //오른쪽 상단 페이지번호
    $("html").css({"overflow-y":"hidden"}); //기존 html 스크롤 숨기기
    $(".modal-content>li").eq(g_pop).fadeIn();  //각 목록의 내용
    $(".modal").stop().fadeIn(); //검정배경

  });

  //이전다음버튼....
  $(".pre").click(function(){
    if(g_pop>0){
      $(".modal-content>li").eq(g_pop).stop().fadeOut(); 
      g_pop--;
      $(".g_page span:nth-child(1)").text(g_pop+1);
			$(".modal-content>li").eq(g_pop).stop().fadeIn();
    };
  });

  $(".next").click(function(){
    if(g_pop<14){
      $(".modal-content>li").eq(g_pop).stop().fadeOut(); 
      g_pop++;
      $(".g_page span:nth-child(1)").text(g_pop+1);
			$(".modal-content>li").eq(g_pop).stop().show();
    };
  });

   //닫기버튼.....
  $(".close").click(function(){
    $("html").css({"overflow-y":"scroll"}); 
    $(".modal").stop().fadeOut();
		$(".modal-content>li").stop().hide();
  });

});