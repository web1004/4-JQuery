$(document).ready(function(){

  //클릭한 탑메뉴 현재위치활성화
  $(".gnb a").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });

  //스크롤시 헤더,탑버튼 변경
  $(window).scroll(function(){
    let pos = $(this).scrollTop();

    if(pos>50){
      $("body").addClass("active");
    }else{
      $("body").removeClass("active");
    };
  });

});