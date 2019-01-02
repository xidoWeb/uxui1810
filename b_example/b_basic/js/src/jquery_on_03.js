// jquery_on_03.js

(function($) {




  var btn1 = $('.btn').children('button').eq(0);
  var btn2 = $('.btn').children('button').eq(1);
  var viewBox = $('.view_box');


  btn1.on('click',function(e) {
    e.preventDefault();
    viewBox.css({transform:'translate(0)',
                transition:'all 300ms ease'});
  });

  btn2.on('click',function(e) {
    e.preventDefault();
    viewBox.css({transform:'translate(-50%)',
                transition:'all 300ms ease'});
  });


  // swipe기능 이해하기1
  // touchstart 터치가 시작되는 지점을 체크하는 것

  var start = '';
  var end = '';

    $(window).on('touchstart',function(e){
      // console.log(e.touches[0]);
    start = e.touches[0].pageX;
    console.log('터치시작:',start)
  });

  $(window).on('touchend',function(e){
    end = e.changedTouches[0].pageX;
    console.log('터치끝: ', end);
    console.log('결과: ', end - start );
    
    var result =  end - start;
    if(result < 0){
      viewBox.css({transform:'translate(-50%)',
                transition:'all 300ms ease'});
    }else if(result > 0){
      viewBox.css({transform:'translate(0)',
                transition:'all 300ms ease'});
    }
  });

  // $(window).on('touchmove',function(e) {
  //   console.log(e.originalEvent.touches[0].pageX);

  // });


  // clientX, clientY  ->  브라우저 기준 좌표
  // offsetX, offsetY  ->  이벤트 대상요소의 상대적 좌표
  // pageX, pageY      ->  문서 전체를 기준 좌표
  // screenX, screenY  ->  모니터 화면기준의 좌표위치



})(jQuery);