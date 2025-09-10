$(document).ready(function(){

  //탭메뉴
  $(".tab li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let galleryResult = $(this).attr("data-alt");
    $(".panel li").removeClass("active");
    $("#"+galleryResult).addClass("active").hide().fadeIn();
  });
  
  //추가:해당 탭메뉴를 클릭할때 해당 첫 썸네일을 클릭시킴....(마지막에 누른채로 보이지 않고 항상 처음처럼 보이게 함)
  $(".tab li:first-child").click(function(){
    $(".gallery1 .thumbs li:first").click();
  });
  $(".tab li:nth-child(2)").click(function(){  
    $(".gallery2 .thumbs li:first").click();
  });
  $(".tab li:last-child").click(function(){  
    $(".gallery3 .thumbs li:first").click();
  });

  //탭메뉴별 이미지갤러리
  //동일한 제이쿼리효과를 여려군데 넣을때는 클래스,변수,함수 이름은 중복되지 않아야 한다.(충돌 발생)
  //tba1-gallery
  let oldImgA = 0; 
  let newImgA = 0;  

  $(".gallery1 .thumbs li").click(function(){
    newImgA = $(this).index(); 
    $(this).css({"opacity":1});
    $(this).siblings().css({"opacity":0.6});
    $(".gallery1 .largeImg li").eq(oldImgA).stop().fadeOut(1000); 
    $(".gallery1 .largeImg li").eq(newImgA).stop().fadeIn(1000); 
    oldImgA = newImgA;  
  });

  //tba2-gallery
  let oldImgB = 0; 
  let newImgB = 0;  

  $(".gallery2 .thumbs li").click(function(){
    newImgB = $(this).index(); 
    $(this).css({"opacity":1});
    $(this).siblings().css({"opacity":0.6});
    $(".gallery2 .largeImg li").eq(oldImgB).stop().fadeOut(1000); 
    $(".gallery2 .largeImg li").eq(newImgB).stop().fadeIn(1000); 
    oldImgB = newImgB;  
  });

  //tba3-gallery
  let oldImgC = 0; 
  let newImgC = 0;  

  $(".gallery3 .thumbs li").click(function(){
    newImgC = $(this).index(); 
    $(this).css({"opacity":1});
    $(this).siblings().css({"opacity":0.6});
    $(".gallery3 .largeImg li").eq(oldImgC).stop().fadeOut(1000); 
    $(".gallery3 .largeImg li").eq(newImgC).stop().fadeIn(1000); 
    oldImgC = newImgC;  
  });

});