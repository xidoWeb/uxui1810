(function($){
  // 기능1: header기능이 스크롤처리해서 상단에 올라오면 position:fixed 처리
  var win    = $(window);
  var headBox = $('#headBox');
  var headOffset = headBox.offset().top;
  
    // 스크롤처리시 
  win.on('scroll', function(e){
    // 스크롤이 얼만큼 움직였는지 파악
    var scrollOffset = $(this).scrollTop();

    // 스크롤양과, headOffset의 크기값을 비교하여 처리
    var vs = headOffset <= scrollOffset;
    (vs) ?  headBox.css({position:'fixed', top:0, bottom:'auto'})  :  headBox.removeAttr('style')  ;
  });


  // 기능1의 2번째 처리: header메뉴에 마우스 올리거나 focus되었을때, 하위 메뉴가 나타나게 만들기.
  // 기능1의 2번째 처리시 부차적 문제: header메뉴에 마우스 올리거나 focus되었을때, 하위 메뉴는 어떻게 나타나야 하는가?
  
})(jQuery);