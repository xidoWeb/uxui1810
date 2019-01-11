(function($){
  // 기능1: header기능이 스크롤처리해서 상단에 올라오면 position:fixed 처리
  var win        = $(window);
  var headBox    = $('#headBox');
  var headOffset = headBox.offset().top;
  var headCon    = headBox.find('.container');
  var gnb        = headBox.find('#gnb');
  // var headDd     = headBox.find('dd');
  var winH = win.height();
  var scrollOffset = 0;

    // 스크롤처리시 
  win.on('scroll', function(e){
    // 스크롤이 얼만큼 움직였는지 파악
    scrollOffset = $(this).scrollTop();

    // 스크롤양과, headOffset의 크기값을 비교하여 처리
    var vs = headOffset <= scrollOffset;
    // (vs) ?  headBox.css({position:'fixed', top:0, bottom:'auto'})  :  headBox.removeAttr('style');
    if(vs) {  headBox.css({position:'fixed', top:0, bottom:'auto'}); } else { headBox.removeAttr('style');}

    //1-2의 문제 해결: 화면의 높이를 기준으로 절반아래로 header가 있으면 위로 하위메뉴가 나오게 처리
    var heightVs = scrollOffset >= winH/2; 
    console.log(heightVs);
    if(!heightVs){
      // heightVs의 값이false인경우
      headCon.addClass('up');
    }else{
      // heightVs의 값이 true인경우
      headCon.removeClass('up');
    }

  });


  // 기능1의 2번째 처리: header메뉴에 마우스 올리거나 focus되었을때, 하위 메뉴가 나타나게 만들기.
  var addView = function(e){
                e.preventDefault();
                headCon.addClass('view');
              };

  var removeView = function(e){
                e.preventDefault();
                headCon.removeClass('view');
              };


  gnb.on({'mouseenter': addView , 'mouseleave': removeView });


  // 기능1의 2번째 처리시 부차적 문제: header위치가 하단에 있는경우와 상단에 있는경우에 따라, 
  // 하위 메뉴는 상황에따라 보이는형태가 달라야 하지 않을까?
  // 전체를 기준으로 봐야하는데? 이 전체는 어느 크기일까? ( $(window).height();  )



})(jQuery);