// jquery_on_01.js

/*
  var h1 = document.getElementsByTagName('h1')[0];
  h1.style.backgroundColor = '#f50';
  h1.style.height = 100;
  h1.style.color = '#fff';
*/


(function($) {
  var h1 =  $('h1');
  h1.animate({backgroundColor:'#fa0', height:30, padding:'1rem'},500,'easeInOutBounce');

  var btnUl = $('.btn_area');
  var btnLi = btnUl.children('li');
  // console.log(btnLi.length);
  var span = $('.result>span');

//  --------------------------------------
  btnLi.on('click',function(e) {
      e.preventDefault();
      span.text('일단 클릭했습니다.');
  });

//  ---------------------------------------
  btnLi.on('dblclick', function(e){
    // pre + event + default
    e.preventDefault();
    var mythis =  $(this).index();
    span.text('선택된 li는'+ (mythis + 1) +'번째 입니다.');
  });

// ----------------------------------------

 var mouse = $('.mouse');
 mouse.on('mousedown',function(e) {
  console.log(e.which);
  var num = e.which;
/*
  if(num == 1){
    $(this).children('span').text('마우스 왼버튼을 눌렀습니다.');
  }else if(num == 2){
    $(this).children('span').text('마우스 가운데버튼 눌렀습니다.');
  }else if(num == 3){
    $(this).children('span').text('마우스 오른버튼 눌렀습니다.');
  }else{
    $(this).children('span').text('그런버튼 안키웁니다.!!!');
  }
*/

  switch(num){
    case 1:
      $(this).children('span').text('마우스 왼버튼을 눌렀습니다.');
      break;

    case 2:
      $(this).children('span').text('마우스 가운데버튼 눌렀습니다.');
      break;

    case 3:
      $(this).children('span').text('마우스 오른버튼 눌렀습니다.');
      break;

    default:
      $(this).children('span').text('그런버튼 안키웁니다.!!!');
  }

 });

 mouse.on('mouseup',function(e) {
  $(this).children('span').text('마우스를 띄었습니다.');
 });

//  =========================
 var fc = $('.focus');
 var fcList = fc.children('li');

 fcList.children().on('focus',function(){
    $(this).css({backgroundColor:'#07a', color:'#fff', fontWeight:'bold'});
 });

 fcList.children().on('blur',function() {
    $(this).removeAttr('style');
 });

fcList.children().on('mouseenter',function() {
   $(this).css({backgroundColor:'#999'});
});
fcList.children().on('mouseleave',function() {
   $(this).css({backgroundColor:'#fa0'});
});

})(jQuery);




