$(document).ready(function(){
  
  let slideOldImg = 0;
  let sldieNewImg = 0;
  let slideWidth = $("#largeImg img").width();

  $(".thumbs a").click(function(){
    sldieNewImg = $(this).index();
    slideMove = -(slideWidth*sldieNewImg);  //1200*0, 1200*1, 1200*2 .....

    $("#gallery #largeImg").animate({left : slideMove});
    $(".thumbs a").eq(slideOldImg).removeClass("active");
		$(".thumbs a").eq(sldieNewImg).addClass("active");
    slideOldImg = sldieNewImg;    
  });

});