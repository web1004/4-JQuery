$(document).ready(function(){

  $(".tab li").click(function(){

    //선택되지 않은 모든 이미지는 회색이미지로.... 
    for(let i=0;i<6;i++){
      $(".tab li").eq(i).find("img").attr({"src":`image/tab${i}.png`});
    }

    $(".i1").removeClass("active");  //css에서 적용된 1번째 현재위치활성화 해지
    let imgNum = $(this).index();
    //$(this).find("img").attr({"src":"image/tabon" + imgNum + ".png"}); //image/tabon1.png
    $(this).find("img").attr({"src":`image/tabon${imgNum}.png`});

    let tabResult = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    $("#"+tabResult).addClass("active");
  });

});