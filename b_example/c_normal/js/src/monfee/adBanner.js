// adBanner.js

(function($) {
  var banner = $('#adBanner');
  var viewOuter = banner.find('.view_outer');
  var viewBanner = viewOuter.find('ul');
  var viewBannerList = viewBanner.children('li');

  // adBanner영역의 구성을 변경
  // - 기존의 갯수에서 마지막 하나를 복제하여 앞에 배치
  //   (css문서에서 nth-child로 배경이미지를 처리하면 안된다. 즉, 각각 이름을 부여해서 처리)
  var viewBannerLast = viewBannerList.eq(-1).clone(true);
  // viewBannerList.eq(0).before(viewBannerLast);
  viewBanner.prepend(viewBannerLast);

  // 내용 변경 후 갯수 다시 파악
  viewBannerList = viewBanner.children('li');

  // - 감싸는 영역의 크기를 갯수 * 100% 크기만큼으로 변경
  // - 첫번째 보이는 요소는 첫배너로 처리하기위해 전체를 왼쪽으로 이동/ li내용의 크기값 재 수정
  
  var len = viewBannerList.length;
  // console.log(len);
  viewBanner.css({ width: len * 100 + '%', marginLeft: -100 + '%', 
                position:'relative', top:0, left:0, transition:'left 500ms ease'});
  viewBannerList.css({ width: 100 / len + '%'});
  
  // -----------------------------------------------------------------------
  // 좌,우 버튼을 클릭하든, 인디케이트를 클릭하든 공통의 기능을 하는 변수가 하나 필요하다!
  var showI =  0;
  var SlideBanner = function(i){
    viewBanner.css({left: i * -100 + '%'});
  };
  SlideBanner(showI);

  // 좌,우 버튼 클릭시
  var btnArea = banner.find('.arrow_btn');
  var nextBtn = btnArea.children('.next_btn');
  var prevBtn = btnArea.children('.prev_btn');

    // nextBtn클릭시 변수 showI에 1씩 더하는 기능 부여
    // 최대 숫자는 전체 갯수-2 까지만 가능
    nextBtn.on('click',function(e) {
      e.preventDefault();
      if (showI >= len-2){ showI = len-2;  }else{  showI += 1;  }
      SlideBanner(showI);
    });

    // prevBtn클릭시 변수 showI에 1씩 빼는 기능 부여
    // 최소 숫자 -1까지만 가능
    prevBtn.on('click', function (e) {
      e.preventDefault();
      if(showI <= -1){ showI = -1; }else{ showI -= 1; }
      SlideBanner(showI);
    });


  // 인디케이터



})(jQuery);