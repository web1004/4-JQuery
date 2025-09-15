$(document).ready(function(){

  let $img = $(".changeimg ul li"),
      $text = $(".changeimg ul li .des"),
      $lbtn = $(".side_btn .lbtn"),
      $rbtn = $(".side_btn .rbtn"),
      oldIndex=0,
      newIndex=0,
      count = $img.length;

  //이미지와 텍스트효과 함수
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
  $lbtn.click(function(){
    newIndex--;
    if(newIndex<0){ 
      newIndex=count-1;
    }
    changeVisual(newIndex);
  });
  $rbtn.click(function(){
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