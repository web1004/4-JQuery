$(document).ready(function(){

  let bannerWidth= $(".ban ul li").width()+10;
  let bannerNum = 0; 

  //이전보기
  $(".ban_btn .ban_left").click(function(){
    if(bannerNum>0){
      $(".ban ul").stop().animate({left:"+="+bannerWidth+"px"},500);
      bannerNum--;

      //이미지가 처음 또는 마지막일때 좌우버튼 이미지 바꾸기
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


  //다음보기
  $(".ban_btn .ban_right").click(function(){
    if(bannerNum<6){  //전체개수의 절반정도 설정하면 마지막이미지가 나오는 index번호
      $(".ban ul").stop().animate({left:"-="+bannerWidth+"px"},500);
      bannerNum++;
    };

    //이미지가 처음 또는 마지막일때 좌우버튼 이미지 바꾸기
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
  });
});