$(document).ready(function(){

  let bannerWidth = $('.ban ul li').width()+10; 
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
    //보이는것은 4개가 보이고 있고 움직이는것은 1개씩 움직이기 때문에 index5번까지 움직이면 끝에 10번이 보임
    if(bannerNum<6){
      $(".ban ul").stop().animate({left:"-="+bannerWidth+"px"},500);
      bannerNum++;
    };
    changeArrow();
  });

  //양쪽 마지막,첫번째 이미지일때 화살표모양이 바뀌는 함수 생성
  //선언식함수생성은 호이스팅의 영향을 받기때문에 위에서 함수를 먼저 호출해도 가능함
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