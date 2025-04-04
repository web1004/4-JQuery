$(document).ready(function(){

  $(".gnb a").click(function(e){
    e.preventDefault(); 
    let linkLocation = $(this).attr("href");
    $("html, body").animate({ 
      scrollTop:$(linkLocation).offset().top
    },500);
  });

});

/* 
offset()메서드 : 요소를 top/left의 위치를 조정해서 위치를 이동시킴

offset().top;
offset().left;
*/