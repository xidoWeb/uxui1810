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

  // samplebtn.on('click', function(){
  //   i +=1 ;
  //   per = 1 * -100 + '%; //1
  //   per -= viewLiWidth;  //2
  //   if(i < voLi.length){
  //     viewOuterUl.animate({marginLeft:per});
  //   }
  // });



// 스크롤바를 보이지 않게 수정
  var viewCon = viewOuterUl.wrap('<div class="scroll_box">');
  viewOuter.css({overflow:'hidden'});
  $('.scroll_box').css({width:'100%', height:viewOuter.innerHeight(), paddingBottom:'3rem', overflow:'hidden', overflowX:'auto'} );


  // viewOuter.on('scroll', function(){
  //    var sl = $(this).scrollLeft();
  //   console.log(sl);
  // });

// 마우스 스크롤처리

 var go = true;
viewOuter.on('mousewheel DOMMouseScroll', function(e){
  e.preventDefault();
  // console.log(e); 

  if(go){
    go = false;
    var E = e.originalEvent;
    var delta; 

    if(E.wheelDelta){
      delta = E.wheelDelta;
    }else{
      delta = E.detail * -40;
    }
    console.log(delta);

    if(delta < 0 && i < voLi.length-1){
      // 마우스를 아래로 휠을 움직였을경우
      i +=1;
    }else if(delta > 0 && i > 0){
      // 마우스를 위로 휠을 움직였을경우
      i -=1;
    }
   // console.log(i);
   /* // marginleft기능으로 값을 이동처리
   per = i * -100 + '%';  // 1 * -100 => -100
   viewOuterUl.stop().animate({marginLeft:per},function(){
       go = true;
   }); 
   */
  
    // 가로스크롤 기능으로 이동처리
    per = i * viewLiWidth;
    $('.scroll_box').animate({scrollLeft:per}, function(){
      go = true;
    });
    console.log(-per);  
  }
});

close.on('click',function(){
  viewBox.remove();
});
// viewBox.hide();
// -----------------------------------------

var conBox = $('#contBox');
var body = $('html') || $('body');
var conBoxChild = conBox.children('div').eq(0).outerWidth();
var wheelresult = 0;
var myscroll = true;
conBox.on('mousewheel', function(e){
  var E = e.originalEvent;
  var delta = E.wheelDelta;
  if(myscroll){
    myscroll = false;
      if(delta < 0){ 
        if(wheelresult < conBox.outerWidth()){
          wheelresult += conBoxChild; 
        }
      }else{ 
        if(wheelresult > 0){
          wheelresult -= conBoxChild;
        }
       }

      body.stop().animate({scrollLeft:wheelresult},function(){
        console.log($(this));
        myscroll = true;
      });
    // console.log(wheelresult);

  }
});



})(jQuery);