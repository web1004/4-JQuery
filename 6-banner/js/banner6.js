$(document).ready(function(){

  //slide함수가 .up과 .down 클래스를 가진 요소에 대해 각각 실행함
  slide('.up', 'up'); //.up클래스가 있는 리스트는 위로(up)
	slide('.down', 'down');  //.down클래스가 있는 리스트는 아래로(down)

  function slide(targetEl, direction){ //(목표요소, 특정방향)
    const target = $(targetEl);
    const slideHeight = target.find('li').eq(0).height() + 20;

    target.animate({
      //up일 경우는 리스트를 위로, down일 경우는 리스트를 아래로
      top:direction === 'up' ? `-${slideHeight}px` : `${slideHeight}px`
    }, 4000, 'linear',function(){
      if(direction === 'up'){
        $(this).find('li').eq(0).appendTo(this); //위로 이동 후 첫번째 li를 마지막으로 이동
      }else{
        $(this).find('li').last().prependTo(this); //아래로 이동 후 마지막 li를 맨 앞으로 이동
      };
      $(this).css({top:0});  //초기화(초기위치)
      slide(targetEl, direction); //함수를 호출하여 무반반복실행
    });
  };

});

