$(document).ready(function(){
  
  // 최초에 3개 보이기
  $('.port-list ul li').slice(0, 3).show();  //0,1,2까지 보임

  // 버튼 클릭하면 3개씩 더 보이기
  $('.load-more').click(function () {
    $('.port-list ul li:hidden').slice(0, 3).fadeIn();
    //더이상 보여질 이미지가 없으면 버튼은 사라지게 하기
    if($('.port-list ul li:hidden').length == 0) {
      $(this).hide()
    }
  });

});

/* 
$('선택요소').slice(시작번호,종료번호) ->요소의 시작인덱스번호와 종료인덱스전까지선택(종료인덱스번호가 없으면 끝까지 자동으로 선택됨)
$('선택요소:hidden') -> 해당요소를 보이지않게 하는 선택자로 CSS에서 dusplay:none인 요소를 선택하는 선택자
*/
