$(document).ready(function(){

  //(1)사용할 변수 설정
  let gOldIdx = 0  //기존이미지(처음부터 보이는 이미지)
      gNewIdx = 0  //새이미지(클릭했을때 선택된 이미지)
      gImgCount = $(".largeImg li").length //개수구하기(1,2,3.....)
      $thumbsBtn = $(".thumbs li")
      $largeImg = $(".largeImg li")
      $imgText =  $(".imgText li")
      $prevBtn = $("#gallery .left_btn")
      $nextBtn = $("#gallery .right_btn");

  //(2)썸네일,큰이미지,텍스트 변경하는 함수생성
  //function 함수명(){ .... }

  function galleryImg(gNewIdx){
    //지금 현재 보이고 있는 이미지의 index와 새로 보려고 하는 index가 다를때만 실행함
    if(gOldIdx != gNewIdx){ 
      $thumbsBtn.eq(gOldIdx).css({"opacity":0.7});  // 기존의 썸네일 흐리게		
      $thumbsBtn.eq(gNewIdx).css({"opacity":1});  //선택된 썸네일 선명하게	
      $largeImg.eq(gOldIdx).stop().fadeOut(300);  //기존 이미지 사라짐
      $largeImg.eq(gNewIdx).stop().fadeIn(300);  //선택된 이미지 나타남
      $imgText.eq(gOldIdx).stop().fadeOut(300);  //기존 텍스트 사라짐
      $imgText.eq(gNewIdx).stop().fadeIn(300);  //선택된 텍스트 나타남
    };
    gOldIdx = gNewIdx;  //동작 후에 새index는 기존index에 저장이 되어서 사라져야 함
  };

  //썸네일버튼
  $thumbsBtn.click(function(){
    gNewIdx = $(this).index();
    galleryImg(gNewIdx);
  });

  //이전버튼
  $prevBtn.click(function(){
    gNewIdx--;
    if(gNewIdx < 0){ //1씩 감소하다가 0이하가 되면 맨뒤부터 다시 시작
      gNewIdx = gImgCount-1; //총개수 10개에서 1을 빼야 마지막 index번호 9가 됨
    }
    galleryImg(gNewIdx);
  });


  //다음버튼
  $nextBtn.click(function(){
    gNewIdx++;
    if(gNewIdx > gImgCount-1){ //1씩 증가하다가 9가 초과되면 처음부터 다시 시작
      gNewIdx = 0;
    }
    galleryImg(gNewIdx);
  });

});