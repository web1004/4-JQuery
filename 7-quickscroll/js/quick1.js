$(document).ready(function(){

  //선택자의 경로를 변수에 저장함(변수명은 $,_맨앞에 사용할수 있음)
  let $btnSidebarIcon = $(".btn-sidebar span:nth-child(1)");
  let $btnSidebarText = $(".btn-sidebar span:nth-child(2)");

  chk = true;
  $(".btn-sidebar").click(function(){
    $(".sidebar-content").toggleClass("active");

    //toggleClass("변경전클래스명 변경후클래스명")
    $btnSidebarIcon.toggleClass("xi-angle-right-thin xi-angle-left-thin");

    //텍스트 변경(open을 close로, close를 open으로)
    if(chk){
      $btnSidebarText.text("close");
      chk = false;
    }else{
      $btnSidebarText.text("open");
      chk = true;
    };
  });

});