// jquery_on_02.html

(function($) {
  // =====================================
  // mouseenter and mouseover 비교

  var enter = $('.mouseenter');
  var over = $('.mouseover');
  var num1 = 0, 
      num2 = 0;
   
var enterOut = enter.children('.out');


var overOut = over.children('.out');


enter.on('mouseenter',function() {
  num1 += 1;
  enterOut.text(num1);
});
over.on('mouseover',function() {
  num2 += 1;
  overOut.text(num2);
});

//  ======================================
// change
var sel = $('#sel');
sel.on('change', function(e){
  e.preventDefault();

  // var nar = $(this).val();

  // 선택된(select요소 내부의 option)요소의 경우는 별도의 선택 되었을 때(:selected)의 경우를 지정해야 한다.
  var nar = $(this).children('option:selected').text();


  $('.change').find('p').children('span').text(nar);
});

// scroll ====================================
var st = $(window).scrollTop();
// console.log(st);
var pt = $('.position').offset().top; // --> scrollTop(0)기준
// console.log(pt);

$(window).on('scroll',function(){
  st = $(window).scrollTop();
  // console.log(st);

  // console.log('스크롤변경: ', st);
  if(st >= pt){
    $('.fix').css({position:'fixed', top:0});
  }else{
    $('.fix').removeAttr('style');
  }


  $('body').css({backgroundColor:"#ccc"});
});


//  offset이해
var porOffset = $('.por').offset().top;
var pofOffset = $('.pof').offset().top;

console.log(porOffset, 'vs', pofOffset);
$('.por').children('span').text(porOffset);
$('.pof').children('span').text(pofOffset);

$(window).on('scroll', function() {
  porOffset = $('.por').offset().top;
  pofOffset = $('.pof').offset().top;

  console.log(porOffset, ' * ', pofOffset);
  $('.por').children('span').text(porOffset);
  $('.pof').children('span').text(pofOffset);
});






// scroll이벤트 수행시 다음과같은 메소드를 같이 알아야 한다!
// scrollTop : 현재 스크롤 바의 상단부분이 얼마만큼 떨어져 있는지를 파악
// offset().top --> scrollTop(0)기준  | offset().left



})(jQuery);
