$(document).ready(function(){
	
  //각 목록을 클릭했을때.....
  $(".item_list>li").click(function(){

    pageNum =$(this).index();

    $(".page-num span:nth-child(1)").text(pageNum+1);  //오른쪽 상단 페이지번호
    $("html").css({"overflow-y":"hidden"}); //기존 html 스크롤 숨기기
    $(".modal-content>li").eq(pageNum).stop().fadeIn();  //각 목록의 내용
    $(".modal").stop().fadeIn(); //검정배경

  });

  //이전다음버튼....
  $(".pre").click(function(){
    if(pageNum>0){
      $(".modal-content>li").eq(pageNum).stop().hide(); 
      pageNum--;
      $(".page-num span:nth-child(1)").text(pageNum+1);
			$(".modal-content>li").eq(pageNum).stop().fadeIn();
    };
  });

  $(".next").click(function(){
    if(pageNum<9){
      $(".modal-content>li").eq(pageNum).stop().hide(); 
      pageNum++;
      $(".page-num span:nth-child(1)").text(pageNum+1);
			$(".modal-content>li").eq(pageNum).stop().fadeIn();
    };
  });

   //닫기버튼.....
  $(".close, .modal").click(function(){
    $("html").css({"overflow-y":"scroll"}); 
    $(".modal").stop().fadeOut();
		$(".modal-content>li").stop().fadeOut();
  });

});