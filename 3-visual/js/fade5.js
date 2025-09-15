$(document).ready(function(){

  let $img = $(".changeimg ul li"),
      $text = $(".changeimg ul li .des"),
      $box = $(".changeimg ul li .des-box"),
      $lbtn = $(".side_btn .lbtn"),
      $rbtn = $(".side_btn .rbtn"),
      oldImg=0,
      newImg=0,
      oldText=0,
      newText=0,
      oldBox=0,
      newBox=0,
      count = $img.length;

  first();
  function first() {
    $box.eq(0).addClass('boxVisible');
    $text.eq(0).addClass('textVisible');
  }

  //이미지 전환효과 함수
  function changeImg(newImg){
    if(oldImg != newImg){
      $img.eq(oldImg).removeClass("imgVisible");
      $img.eq(newImg).addClass("imgVisible");
    };
    oldImg = newImg;
  };

  //박스 전환효과 함수
  function changeBox(newBox){
    if(oldBox != newBox){
      $box.eq(oldBox).removeClass("boxVisible");
      $box.eq(newBox).addClass("boxVisible");
    };
    oldBox = newBox;
  };

  //텍스트 전환효과 함수
  function changeText(newText){
    if(oldText != newText){
      $text.eq(oldText).removeClass("textVisible");
      $text.eq(newText).addClass("textVisible");
    };
    oldText = newText;
  };

  //자동함수 생성
  function autoImg(){
    newImg++;
    if(newImg>count-1){ 
      newImg=0;
    }
    changeImg(newImg);
  }; 
    function autoBox(){
    newBox++;
    if(newBox>count-1){ 
      newBox=0;
    }
    changeBox(newBox);
  };
  function autoText(){
    newText++;
    if(newText>count-1){ 
      newText=0;
    }
    changeText(newText);
  };

  timerImg = setInterval(autoImg,4000); 
  timerBox = setInterval(autoBox,4000);
  timerText = setInterval(autoText,4000);


  //좌우버튼
  $lbtn.click(function(){
    newImg--;
    if(newImg<0){ 
      newImg=count-1;
    }
    changeImg(newImg);

    newText--;
    if(newText<0){ 
      newText=count-1;
    }
    changeText(newText);
  });
  $rbtn.click(function(){
    newImg++;
    if(newImg>count-1){ 
      newImg=0;
    }
    changeImg(newImg);

    newText++;
    if(newText>count-1){ 
      newText=0;
    }
    changeText(newText);
  });

  //마우스오버시 멈춤
  $(".fadeShow").mouseenter(function(){
    clearInterval(timerImg);
    clearInterval(timerText);
  })
  .mouseleave(function(){
    timerImg = setInterval(autoImg,4000); 
    timerText = setInterval(autoText,4000);
  });

});