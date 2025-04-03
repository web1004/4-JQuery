$(document).ready(function(){

  $(".btn li").click(function(){
    // $(this).addClass("active");
    // $(this).siblings().removeClass("active"); 
    $(this).addClass("active").siblings().removeClass("active");
    //siblings()메서드 : 선택한 요소의 나머지를 말함

    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    //$("#"+result).addClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
    //#tab1, #tab2....
  });

});