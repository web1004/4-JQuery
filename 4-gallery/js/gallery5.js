$(document).ready(function(){

  //라이트박스 열기
  $(".gallery a").click(function(e){
    e.preventDefault();  //요소의 기본기능해제(return false 와 동일한 기능)

    let zoomSrc = $(this).attr("href");
    let zommText = $(this).attr("data-caption");
    $(".lightbox-overlay").addClass("active");  //모달창 보이게 함
    $(".lightbox-overlay").find("img").attr({"src":zoomSrc});
    $(".lightbox-overlay").find("span").text(zommText);
  });

  //라이트박스 닫기
  $(".lightbox-overlay").click(function(){
    $(this).removeClass("active");
  });

});