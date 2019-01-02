// jquery_on_04.js

(function($) {

  var num = 0;
  var winH = $(window).height();
  // console.log(winH);
  $(window).scrollTop(0);
  

// ================================

  $(window).on('mousewheel DOMMouseScroll', function(e){
    // firefox를 제외한(mousewheel기능을 가진) 브라우저는 wheelDelta값을 가지고 있다.
    //console.log(e.originalEvent.wheelDelta); // 120, -120 수치를 가짐

    //firefox 브라우저에서는 detail 수치값을 가지고 있다.
    // console.log(e.originalEvent.detail);

    var evt = e.originalEvent;
    var delta = '';

    if(evt.detail !== 0){
      delta = evt.detail * -40;
    }else{
      delta = evt.wheelDelta;
    }

  });

})(jQuery);
