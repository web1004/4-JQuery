$(document).ready(function(){

  $(".navi-item li a").mouseenter(function(){
    let imageSwap = $(this).attr("data-src");
    $(".image-holder img").attr({"src":imageSwap});
  });

});