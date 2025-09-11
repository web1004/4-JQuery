$(document).ready(function(){

  let cloneElement = $(".logo-slide").clone(true);
  $(cloneElement).appendTo(".logo"); //복제한 요소를 부모의 맨뒤로 이동

});

/* 
clone(Boolean값)메서드 : 선택한 요소를 복제
true일 경우는 하위요소까지 모두 복제하고, false일경우는 선택한 요소만 복제함
*/