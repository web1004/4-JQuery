$(document).ready(function(){

  //선택자의 경로를 변수에 저장함(변수명은 $,_맨앞에 사용할수 있음)
  let $btnSidebarIcon = $(".btn-sidebar span:nth-child(1)");
  let $btnSidebarText = $(".btn-sidebar span:nth-child(2)");

  chk = true;
  $(".btn-sidebar").click(function(){
    $(".sidebar-content").toggleClass("active");
    //$(".btn-sidebar span:nth-child(1)").toggleClass();
    $btnSidebarIcon.toggleClass("xi-angle-right-thin xi-angle-left-thin");
    //toggleClass("변경전클래스명 변경후클래스명")  => 클래스명을 변경시킴

    //텍스트 변경(open을 close로, close를 open으로)

    if(chk){  //현재 보이는 버튼을 클릭할때
      $btnSidebarText.text("close");
      chk =false;  //위의 true 문장을 한번 실행하면 flase로 변경되고 그값을 다시 변수에 저장함
    }else{
      $btnSidebarText.text("open");
      chk = true;
    };
  });

});