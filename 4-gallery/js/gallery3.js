$(document).ready(function(){

  let slideOldImg = 0;
  let slideNewImg = 0;
  let slideWidth = $("#largeImg img").width();  //이미지의 사이즈인 1200을 변수에 저장

  $(".thumbs a").click(function(){
    slideNewImg = $(this).index();
    slideMove = -(slideWidth*slideNewImg); //1200*0,1200*1,1200*2...

    $("#gallery #largeImg").animate({left : slideMove});
    $(".thumbs a").eq(slideOldImg).removeClass("active");
		$(".thumbs a").eq(slideNewImg).addClass("active");
    slideOldImg = slideNewImg;
  });

});