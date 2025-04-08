$(document).ready(function(){

  let oldImg = 0;  //기존이미지
  let newImg = 0;  //새이미지

  $(".thumbs img").click(function(){
    newImg = $(this).index();  //0,1,2,3.....

    // 썸네일 이미지에 active 클래스 넣고 빼기
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    //큰이미지 오버랩되면서 이미지 교체하기
    $("#largeImg img").eq(oldImg).stop().fadeOut(1000);  //기존이미지 사라짐
    $("#largeImg img").eq(newImg).stop().fadeIn(1000);   //새이미지 나타남
    oldImg = newImg;  //새로 나온 이미지가 등장하고나서 기존이미지로 바뀌어서 다시 fadeOut...

  });

});