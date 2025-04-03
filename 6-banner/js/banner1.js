$(document).ready(function(){

  let newsOld = 0;
  let newsNew = 0;
  newsCount=$(".news_list li").length;

  //이전보기
  $(".nleft").click(function(){
    //0보다 큰 경우만 실행
    if(newsNew > 0){
      newsNew--;
      $(".news_list li").eq(newsOld).hide();
			$(".news_list li").eq(newsNew).show();
			newsOld=newsNew;
    };
  });

  //다음보기
  $(".nright").click(function(){
    //이미지 전체개수보다 적을때까지만 실행
    if(newsNew < newsCount-1){
      newsNew++;
      $(".news_list li").eq(newsOld).hide();
			$(".news_list li").eq(newsNew).show();
			newsOld=newsNew;
    };
  });

});