$(document).ready(function(){

  let $fadeContainer = $(".fadeShow"),
      $img = $fadeContainer.find(".changeImg ul li"),
      $text = $fadeContainer.find(".changeImg ul li .des"),
      $leftBtn = $fadeContainer.find(".sideBtn .leftBtn"),
      $rightBtn = $fadeContainer.find(".sideBtn .rightBtn"),
      oldIndex=0,
      newIndex=0,
      count = $img.length;

  //이미지,텍스트 전환효과 함수
  function changeVisual(newIndex){
    if(oldIndex != newIndex){
      $img.eq(oldIndex).removeClass("imgVisible");
      $img.eq(newIndex).addClass("imgVisible");
      $text.eq(oldIndex).removeClass("textVisible");
      $text.eq(newIndex).addClass("textVisible");
    };
    oldIndex = newIndex;
  };

  //자동함수 생성
  function changeAuto(){
    newIndex++;
    if(newIndex>count-1){ 
      newIndex=0;
    }
    changeVisual(newIndex);
  };
  timerAuto = setInterval(changeAuto,5000);

  //좌우버튼
  $leftBtn.click(function(){
    newIndex--;
    if(newIndex<0){ 
      newIndex=count-1;
    }
    changeVisual(newIndex);
  });

  $rightBtn.click(function(){
    newIndex++;
    if(newIndex>count-1){ 
      newIndex=0;
    }
    changeVisual(newIndex);
  });

  //마우스오버시 멈춤
  $(".fadeShow").mouseenter(function(){
    clearInterval(timerAuto);
  })
  .mouseleave(function(){
    timerAuto = setInterval(changeAuto,5000);
  });

});