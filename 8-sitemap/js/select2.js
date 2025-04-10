$(document).ready(function(){

  $(".s1").click(function(){
    $(".m1").stop().slideToggle();
    $(this).toggleClass("active");
    $(this).find("span i").toggleClass("fa-chevron-up fa-chevron-down")
  });

  $(".s2").click(function(){
    $(".m2").stop().slideToggle();
    $(this).toggleClass("active");
    $(this).find("span i").toggleClass("fa-chevron-up fa-chevron-down")
  });

});