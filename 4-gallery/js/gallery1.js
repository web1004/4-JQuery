$(document).ready(function(){

  $(".thumbs img").click(function(){
    // 썸네일 이미지에 active 클래스 넣고 빼기
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    // 큰이미지 src 속성 변경하기
    let imageSrc = $(this).attr("src");
    //$("#largeImg img").attr({"src":imageSrc});
    $("#largeImg img").attr({"src":imageSrc}).hide().fadeIn();

  });

});