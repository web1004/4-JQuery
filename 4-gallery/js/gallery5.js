$(document).ready(function(){
  
  // 라이트박스 열기
  $(".gallery a").click(function(e){
    e.preventDefault();  //a태그의 기본기능해제

    let zommSrc = $(this).attr("href");
    $(".lightbox-overlay").addClass("active");  //모달창 보이게 함
    $(".lightbox-overlay").find("img").attr({"src":zommSrc});
    $(".lightbox-overlay").find("span").text($(this).attr("data-caption"));
  });

  // 라이트박스 닫기
  $('.lightbox-overlay').click(function(){
    $(this).removeClass("active");
  });

});