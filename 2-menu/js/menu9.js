$(document).ready(function () {

  //처음위치
  $("#sidebar").css({"left":"-150px"});
  $(".sub_box").css({"left":"-150px"}); 

  //햄버거메뉴 클릭시 나오는 사이드바.....
  qchk=true;
  $(".trigger").click(function(){
    $(this).toggleClass("active");

    if(qchk){
      $(this).stop().animate({left:"150px"},500); 
      $("#sidebar").stop().animate({left:"0px"},500);
      qchk=false;
    }else{
      $(this).stop().animate({left:"0px"},500); 
      $("#sidebar").stop().animate({left:"-150px"},500);
      qchk=true;
    };
  });

  //사이드바가 등장 후 주메뉴 오버시 나오는 서브박스.....
  $(".main").hover(function(){ 
    $(this).find(".sub").stop().show("slow");
    $(".sub_box").stop().animate({left:"150px"},300);
    $(".trigger").stop().animate({left:"300px"},300); 
  },function(){
    $(this).find(".sub").stop().hide("fast");   
  });

  //서브메뉴가 있는 메뉴영역을 나가면 햄버거메뉴와 서브배경박스 다시 들어가게.....
  $(".main").mouseleave(function(){
    $(".sub_box").stop().animate({left:"-150px"},300);
    $(".trigger").stop().animate({left:"150px"},300);
  });

});