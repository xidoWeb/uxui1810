// horizontal_scroll.js
(function($) {
  // #viewBox에서 마우스 스크롤시 화면이 이동처리하는 기능
  // 1. 마우스 버튼(sambtn)을 클릭시 오른쪽 내용이 나타나게...
  // 2. 마우스 휠기능으로 대체

  // 
  var viewBox = $('#viewBox');
  var close = viewBox.children('.close');
  var samplebtn = viewBox.children('.sambtn');
  var viewOuter = $('.view_outer');
  var viewOuterUl = viewOuter.children('ul');
  var voLi = viewOuterUl.find('li');
  var viewLiWidth = viewOuterUl.children('li').eq(0).width();
  
  var per = 0; 
  var i = 0;
// viewBox.scrollLeft();

  samplebtn.on('click', function(){
    i +=1 ;
    per -= viewLiWidth;
    if(i < voLi.length){
      viewOuterUl.animate({marginLeft:per});
    }
  });



// 스크롤바를 보이지 않게 수정
  var viewCon = viewOuterUl.wrap('<div class="scroll_box">');
  $('.scroll_box').css({width:'100%', height:'100%',paddingBottom:'3rem', overflowX:'auto'} );
  viewOuter.css({overflow:'hidden'});


  viewOuter.on('scroll', function(){
     var sl = $(this).scrollLeft();
    console.log(sl);
  });

})(jQuery);