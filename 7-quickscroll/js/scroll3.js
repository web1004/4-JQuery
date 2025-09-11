$(document).ready(function(){

  /* 탑버튼&오른쪽 퀵메뉴 */
  $(".top_btn").hide();  //탑버튼 숨기기
  $("#scroll_btn").hide();  //퀵메뉴 숨기기

  $(window).scroll(function(){
    //스크롤위치 표시
    let scrPosition = $(this).scrollTop();
    $("#txt1").text(scrPosition);

    //스크롤이 300이상일때  TOP버튼,오른쪽 퀵메뉴 보이게 하고 스크롤을 올리면 다시 숨김
    if(scrPosition>=300){
      $(".top_btn").fadeIn();  
      $("#scroll_btn").fadeIn();  
    }else{
      $(".top_btn").fadeOut(); 
      $("#scroll_btn").fadeOut(); 
    };

    //scroll 300~799
    if(scrPosition>=300 && scrPosition<800){
      $("#scroll_btn ul li.scb1").addClass("active");
      $("#scroll_btn ul li.scb1 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul li.scb1").removeClass("active");
      $("#scroll_btn ul li.scb1 a .scroll_hover").removeClass("active");
    };

    //scroll 800~1599
    if(scrPosition>=800 && scrPosition<1600){
      $("#scroll_btn ul li.scb2").addClass("active");
      $("#scroll_btn ul li.scb2 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul li.scb2").removeClass("active");
      $("#scroll_btn ul li.scb2 a .scroll_hover").removeClass("active");
    };

    //scroll 1600~2999
    if(scrPosition>=1600 && scrPosition<3000){
      $("#scroll_btn ul li.scb3").addClass("active");
      $("#scroll_btn ul li.scb3 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul li.scb3").removeClass("active");
      $("#scroll_btn ul li.scb3 a .scroll_hover").removeClass("active");
    };

  });

  //오른쪽 퀵메뉴가 보일때 클릭시 각 콘텐츠의 위치로 이동
  $("#scroll_btn ul .scb1").click(function(){
    $("body,html").animate({scrollTop:"250px"},700);
  });
  $("#scroll_btn ul .scb2").click(function(){
    $("body,html").animate({scrollTop:"1000px"},700);
  });
  $("#scroll_btn ul .scb3").click(function(){
    $("body,html").animate({scrollTop:"1800px"},700);
  });

  //TOP버튼
  $(".top_btn").click(function(){
    $("html,body").animate({scrollTop:"0"});
  });

});