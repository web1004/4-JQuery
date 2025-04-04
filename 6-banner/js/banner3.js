$(document).ready(function(){

  let bannerWidth= $(".ban ul li").width()+10; //배너간 오른쪽여백이 있는 경우 여백만큼(10px) 더해줌

  //목록 마지막 이미지를 목록 안의 가장 앞으로 먼저 배치
  $(".ban ul li:last").prependTo(".ban ul");
  //첫번째 이미지가 보여야 하므로 앞으로 온 맨뒤 이미지를 왼쪽으로 한칸 밀어두기
  $(".ban ul").css({"left":-bannerWidth+"px"});

  //자동으로 슬라이드 함수생성
  function bannerAuto(){
    $(".ban ul").stop().animate({left:"-="+bannerWidth+"px"},500,function(){
      $(".ban ul li:first-child").appendTo(".ban ul"); //마지막 이미지가 맨앞로 이동
      $(this).css({left:-bannerWidth+"px"}); //다음 움직임을 위해 초기화(최종목적지)
    });
  };
  //setInterval(함수명,재생시간); ==>재생시간 간격으로 함수자동실행
  //clearInterval(변수명); ==>자동함수 멈추게함
  bannerTimer = setInterval(bannerAuto,4000);

  //이전보기
  $(".ban_btn .ban_left").click(function(){
    $(".ban ul").stop().animate({left:"+="+bannerWidth+"px"},500,function(){
      $(".ban ul li:last-child").prependTo(".ban ul"); //마지막 이미지가 맨앞로 이동
      $(this).css({left:-bannerWidth+"px"}); //다음 움직임을 위해 초기화(최종목적지)
    });
  });

  //다음보기
  $(".ban_btn .ban_right").click(function(){
    $(".ban ul").stop().animate({left:"-="+bannerWidth+"px"},500,function(){
      $(".ban ul li:first-child").appendTo(".ban ul"); //마지막 이미지가 맨앞로 이동
      $(this).css({left:-bannerWidth+"px"}); //다음 움직임을 위해 초기화(최종목적지)
    });
  });

  //마우스오버시 멈춤(좌우버튼을 누를때는 자동함수가 실행이 안되게 함)
  $(".banner").hover(function(){ //버튼을 포함한 전체영역에 마우스를 올리면....
    clearInterval(bannerTimer);
  },function(){
    bannerTimer = setInterval(bannerAuto,4000);
  });

});