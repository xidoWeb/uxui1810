// jquery_example_02.js
(function($) {



  

  var conBox = $('#contBox');
  var scrollMove = conBox.find('.scroll_move_box');
  var scrollMoveLi = scrollMove.children('li');

  var sideMove = $('.side_move');

  var st;
  // 스크롤이동시 일정위치(?)가 되면 scrollMoveLi에 class="active"를 부여
  // 일정위치: 기능(scrollMove)이 보여지기전 (화면의 3/2 만큼)에 실행
  var winH = $(window).height();
  var smTop = scrollMove.offset().top;
  var smLocation = smTop - (winH / 4 * 3);
  var smCenter = smTop - (winH / 2);
  var smOffLeft = scrollMove.offset().left;
  console.log(smOffLeft);

  var sideMOffset = sideMove.offset().top;
  var sideMLocation = sideMOffset - winH;

  var ScrollCheck = function(){
    st = $(window).scrollTop();

    if(st <= smLocation){
      scrollMove.removeClass('fixed');
      scrollMoveLi.removeClass('active');
    }else{
      scrollMove.addClass('fixed');
      scrollMove.css({left:smOffLeft+'px'});
      scrollMoveLi.addClass('active');
    }

    if(st >= sideMLocation){
      scrollMove.slideUp();
    }else{
      scrollMove.slideDown();

    }
  };
  ScrollCheck();

  $(window).on('scroll',ScrollCheck);

//  ----------------------------------------------

  // var sideMove = $('.side_move');
  var sideMoveChildren = sideMove.children('div');
  // var sideMOffset = sideMove.offset().top;
  // var winH = $(window).height();
  var mySideOffset = sideMOffset - (winH / 3 * 2);

  // 스크롤의 위치가 sideMove에서 화면의 크기 2/3 지점에서 순차적으로 내용이 나타나게 만들기
  var SideMoveScroll = function(){
    st = $(window).scrollTop();
    if(st >= mySideOffset){
      sideMoveChildren.addClass('active');

/*
      for(var i=0; i<sideMoveChildren.length; i++){
        setTimeout(function(){
          sideMoveChildren.eq(i).addClass('active');
        },800); // setTimeout
      }// for
*/


    }else{
      sideMoveChildren.removeClass('active');
    }
  };
  SideMoveScroll();

  $(window).on({'scroll': SideMoveScroll});


})(jQuery);
