$(document).ready(function(){

  let totalNum = $('.item_list li').length;

  //각 목록을 클릭했을때 해당내용 나옴
  $(".item_list li").click(function(){
    pageNum =$(this).index();
    $(".page-num span:nth-child(1)").text(pageNum+1); //현재 페이지번호
    $(".modal-content li").eq(pageNum).stop().fadeIn(); //클릭한 해당목록의 내용
    $(".modal").stop().fadeIn(); //검정배경
    $(".modal").scrollTop(0); //새로 창을 열때는 항상 맨위로 이동하여 보이게 함
  });

  //이전다음버튼
  $(".pre").click(function(){
    $(".modal").scrollTop(0);
    if(pageNum > 0){
      $(".modal-content li").eq(pageNum).hide(); 
      pageNum--;
      $(".page-num span:nth-child(1)").text(pageNum+1); 
      $(".modal-content li").eq(pageNum).stop().fadeIn();
    };
  });
  $(".next").click(function(){
    $(".modal").scrollTop(0);
    if(pageNum < totalNum-1){
      $(".modal-content li").eq(pageNum).hide(); 
      pageNum++;
      $(".page-num span:nth-child(1)").text(pageNum+1); 
      $(".modal-content li").eq(pageNum).stop().fadeIn();
    };
  });

  //닫기버튼
  //모달창에 컨텐츠가 포함이 되어 있기때문에 모달부분을 클릭할때도 닫히게 하면 컨텐츠를 클릭해도 담힘
  // $(".close, .modal").click(function(){
  $(".close").click(function(){
    $(".modal").stop().fadeOut();
		$(".modal-content li").stop().fadeOut();
  });

});