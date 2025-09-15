$(document).ready(function(){

  let $img = $(".changeimg ul li"),
      $text = $(".changeimg ul li .des"),
      $box = $(".changeimg ul li .des-box"),
      $lbtn = $(".side_btn .lbtn"),
      $rbtn = $(".side_btn .rbtn"),
      $indicator = $(".fade-indicator a"),
      control = $(".fade-indicator .play-stop"),
      playBtn = $(".play-stop .play"),
      stopBtn = $(".play-stop .stop"),
      oldIdx=0,
      newIdx=0,
      count = $img.length;

  first();
  function first() {
    $box.eq(0).addClass('boxVisible');
    $text.eq(0).addClass('textVisible');
  }

  //이미지 전환효과 함수
  function changeSlider(newIdx){
    if(oldIdx != newIdx){
      $img.eq(oldIdx).removeClass("imgVisible");
      $img.eq(newIdx).addClass("imgVisible");
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
    if(newIdx>count-1){ 
      newIdx=0;
    }
    changeSlider(newIdx);
  }; 
  timerSlider = setInterval(autoSlider,5000);


  //좌우버튼
  $lbtn.click(function(){
    newIdx--;
    if(newIdx<0){ 
      newIdx=count-1;
    }
    changeSlider(newIdx);
  });
  $rbtn.click(function(){
    newIdx++;
    if(newIdx>count-1){ 
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
  playBtn.hide();
  check = true;

  control.click(function(){
    if(check){
      clearInterval(timerSlider);
      playBtn.show();
      stopBtn.hide();
      check = false;
    }else{
      timerSlider = setInterval(autoSlider,5000);
      playBtn.hide();
      stopBtn.show();
      check = true;
    };
  });

  //마우스오버시 멈춤
  // $(".fadeShow").mouseenter(function(){
  //   clearInterval(timerSlider);
  // })
  // .mouseleave(function(){
  //   timerSlider = setInterval(autoSlider,5000);
  // });

});