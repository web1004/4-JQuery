$(document).ready(function(){

  let $bgImg = $(".changeImg ul li"),
      $text = $(".changeImg ul li .des"),
      $box = $(".changeImg ul li .desBox"),
      $lbtn = $(".sideBtn .lbtn"),
      $rbtn = $(".sideBtn .rbtn"),
      $indicator = $(".fadeIndicator a"),
      $control = $(".fadeIndicator .play-stop"),
      $playBtn = $(".play-stop .play"),
      $stopBtn = $(".play-stop .stop"),
      oldIdx=0,
      newIdx=0,
      sliderCount = $bgImg.length;

  //첫번째 오른쪽 박스와 텍스트는 처음부터 등장
  first();  
  function first(){
    $box.eq(0).addClass("boxVisible");
    $text.eq(0).addClass("textVisible");
  }

  //비주얼이미지,박스,텍스트 전환효과
  function changeSlider(newIdx){
    if(oldIdx != newIdx){
      $bgImg.eq(oldIdx).removeClass("bgVisible");
      $bgImg.eq(newIdx).addClass("bgVisible");
      $box.eq(oldIdx).removeClass("boxVisible");
      $box.eq(newIdx).addClass("boxVisible");
      $text.eq(oldIdx).removeClass("textVisible");
      $text.eq(newIdx).addClass("textVisible");
      $indicator.eq(oldIdx).removeClass("active"); 
      $indicator.eq(newIdx).addClass("active");
    };
    oldIdx = newIdx;
  };

  //자동함수 생성
  function autoSlider(){
    newIdx++;
    if(newIdx > sliderCount-1){ 
      newIdx=0;
    }
    changeSlider(newIdx);
  };
  timerSlider = setInterval(autoSlider,5000);

  //좌우버튼
  $lbtn.click(function(){
    newIdx--;
    if(newIdx < 0){ 
      newIdx=sliderCount-1;
    }
    changeSlider(newIdx);
  });
  $rbtn.click(function(){
    newIdx++;
    if(newIdx > sliderCount-1){ 
      newIdx=0;
    }
    changeSlider(newIdx);
  });

  //Indicator(하단버튼)
  $indicator.click(function(){
    newIdx = $(this).index();
    changeSlider(newIdx);
  });

  //play-stop
  $playBtn.hide();
  check = true;

  $control.click(function(){
    if(check){
      clearInterval(timerSlider);
      $playBtn.show();
      $stopBtn.hide();
      check = false;
    }else{
      timerSlider = setInterval(autoSlider,5000);
      $playBtn.hide();
      $stopBtn.show();
      check = true;
    };
  });

  //마우스오버시 멈춤(playstop버튼이 있을때는 기능이 중복됨)
  $(".fadeSlider").mouseenter(function(){
    clearInterval(timerSlider);
  })
  .mouseleave(function(){
    timerSlider = setInterval(autoSlider,5000);
  });

});