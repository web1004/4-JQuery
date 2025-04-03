$(document).ready(function(){

  /* 탭메뉴 클릭_____________________________*/
  $(".tab li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active"); 

    let galleryResult = $(this).attr("data-alt");
    $(".panel li").removeClass("active");
    $("#"+galleryResult).addClass("active").hide().fadeIn();
  });

  //해당 탭메뉴를 클릭할때 해당 첫 썸네일을 클릭시킴....(마지막에 누른채로 보이지 않고 항상 처음처럼 보이게 함)
  $(".tab li:first-child").click(function(){  
    $(".gallery1 .thumbs li:first").click();
  });
  $(".tab li:nth-child(2)").click(function(){  
    $(".gallery2 .thumbs li:first").click();
  });
  $(".tab li:last-child").click(function(){  
    $(".gallery3 .thumbs li:first").click();
  });

  /*탭메뉴별 이미지갤러리_____________________*/
  //tab1-gallery
  let gOldIdxA = 0;
  let gNewIdxA = 0;

  function galleryImgA(gNewIdxA){
    if(gOldIdxA != gNewIdxA){  
      $(".gallery1 .thumbs li").eq(gOldIdxA).css({"opacity":0.5}); 	
      $(".gallery1 .thumbs li").eq(gNewIdxA).css({"opacity":1});  	
      $(".gallery1 .largeImg li").eq(gOldIdxA).stop().fadeOut(300);  
      $(".gallery1 .largeImg li").eq(gNewIdxA).stop().fadeIn(300);  
    };
    gOldIdxA = gNewIdxA;  
  };

  $(".gallery1 .thumbs li").click(function(){
    gNewIdxA = $(this).index();
    galleryImgA(gNewIdxA); 
  });

  //tab2-gallery
  let gOldIdxB = 0;
  let gNewIdxB = 0;

  function galleryImgB(gNewIdxB){
    if(gOldIdxB != gNewIdxB){  
      $(".gallery2 .thumbs li").eq(gOldIdxB).css({"opacity":0.5}); 	
      $(".gallery2 .thumbs li").eq(gNewIdxB).css({"opacity":1});  	
      $(".gallery2 .largeImg li").eq(gOldIdxB).stop().fadeOut(300);  
      $(".gallery2 .largeImg li").eq(gNewIdxB).stop().fadeIn(300);  
    };
    gOldIdxB = gNewIdxB;  
  };

  $(".gallery2 .thumbs li").click(function(){
    gNewIdxB = $(this).index();
    galleryImgB(gNewIdxB); 
  });

  //tab3-gallery
  let gOldIdxC = 0;
  let gNewIdxC = 0;

  function galleryImgC(gNewIdxC){
    if(gOldIdxC != gNewIdxC){  
      $(".gallery3 .thumbs li").eq(gOldIdxC).css({"opacity":0.5}); 	
      $(".gallery3 .thumbs li").eq(gNewIdxC).css({"opacity":1});  	
      $(".gallery3 .largeImg li").eq(gOldIdxC).stop().fadeOut(300);  
      $(".gallery3 .largeImg li").eq(gNewIdxC).stop().fadeIn(300);  
    };
    gOldIdxC = gNewIdxC;  
  };

  $(".gallery3 .thumbs li").click(function(){
    gNewIdxC = $(this).index();
    galleryImgC(gNewIdxC); 
  });

});