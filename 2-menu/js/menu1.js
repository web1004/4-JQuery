$(document).ready(function () {

  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
    //find() : 자식을 찾는 메서드 -> .main .sub{}
  }, function(){
    $(this).find(".sub").stop().slideUp();
  });

});

/* 
stop()메서드 : 애니메이션의 중복 겹침을 막기 위해서 사용하는 메서드
앞의 애니메이션의 움직임을 실행후 바로 멈추게 함
애니메이션 앞쪽에 사용하면 됨

stop() : 진행중인 애니메이션만 멈추게 함-생략하면 stop(false,false)
stop(true,true) : 대기중인 애니메이션과 진행중인 애니메이션 모두 멈추게 함
*/