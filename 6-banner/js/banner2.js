$(document).ready(function(){

  let bannerWidth= $(".ban ul li").width()+10; 
  let bannerNum = 0; 

  //이전보기
  $(".ban_btn .ban_left").click(function(){
    if(bannerNum>0){
      $(".ban ul").stop().animate({left:"+="+bannerWidth+"px"},500);
      bannerNum--;
    };
    changeArrow();
  });

  //다음보기
  $(".ban_btn .ban_right").click(function(){
    if(bannerNum<6){
      $(".ban ul").stop().animate({left:"-="+bannerWidth+"px"},500);
      bannerNum++;
    };
    changeArrow();
  });

  //양쪽 마지막,첫번째 이미지일때 화살표모양 바꾸는 함수
  function changeArrow(){
    if(bannerNum==0){
      $(".ban_btn .ban_left").html("<i class='fa-solid fa-backward-step'></i>");
    }else{
      $(".ban_btn .ban_left").html("<i class='fa-solid fa-caret-left'></i>");
    };
    if(bannerNum==6){
      $(".ban_btn .ban_right").html("<i class='fa-solid fa-forward-step'></i>");
    }else{
      $(".ban_btn .ban_right").html("<i class='fa-solid fa-caret-right'></i>");
    };
  };

});