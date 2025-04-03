$(document).ready(function(){
  
  //이미지 총개수
  let totalNum = $('.content div').length;  
  let currentNum = 1;

  //처음에 출력되는 페이지번호 텍스트
  $('.page-num span:first').text(currentNum);
  $('.page-num span:last').text(totalNum);

  //이전버튼(오른쪽방향으로 이동)
  $('.prev').click(function(){
    currentNum--;
    if(currentNum < 1){
      currentNum = totalNum;
    }
    $('.content div:last').prependTo('.content');  //마지막 이미지를 맨앞으로 보냄
    $('.page-num span:first').text(currentNum);
  });

  //다음버튼(왼쪽방향으로 이동)
  $('.next').click(function(){
    currentNum++;
    if(currentNum > totalNum) {
      currentNum = 1;
    }
    $('.content div:first').appendTo('.content');  //첫번째 이미지를 맨뒤로 보냄
    $('.page-num span:first').text(currentNum);
  });

});