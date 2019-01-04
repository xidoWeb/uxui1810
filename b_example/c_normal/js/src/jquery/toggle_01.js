// toggle_01.js

(function($) {
  var viewBox = $('.view_box');
  var viewP   = viewBox.children('p');
  var timed   = 1000;

  // show,hide
  var showBtn   = $('.btn_01-1');
  var hideBtn   = $('.btn_01-2');
  var toggleBtn = $('.btn_01-3');

  showBtn.on('click',   function(e){   e.preventDefault();   viewP.stop(true).show(timed);   });
  hideBtn.on('click',   function(e){   e.preventDefault();   viewP.stop(true).hide(timed);   });
  toggleBtn.on('click', function(e){   e.preventDefault();   viewP.stop(true).toggle(timed); });



  // fadeIn, fadeOut
  var inBtn   = $('.btn_02-1');
  var outBtn  = $('.btn_02-2');
  var fadeBtn = $('.btn_02-3');

  inBtn.on(  'click', function(e){ e.preventDefault();  viewP.stop(false,true).fadeIn(timed);     });
  outBtn.on( 'click', function(e){ e.preventDefault();  viewP.stop(false,true).fadeOut(timed);    });
  fadeBtn.on('click', function(e){ e.preventDefault();  viewP.stop(false,true).fadeToggle(timed); });


  // slideDown, slideUp
  var downBtn  = $('.btn_03-1');
  var upBtn    = $('.btn_03-2');
  var slideBtn = $('.btn_03-3');

  downBtn.on('click',  function(e){ e.preventDefault();  viewP.stop(false,true).slideDown(timed);   });
  upBtn.on('click',    function(e){ e.preventDefault();  viewP.stop(false,true).slideUp(timed);     });
  slideBtn.on('click', function(e){ e.preventDefault();  viewP.stop(false,true).slideToggle(timed); });

  // addClass, removeClass
  var addBtn    = $('.btn_04-1');
  var removeBtn = $('.btn_04-2');
  var classBtn  = $('.btn_04-3');
  
  addBtn.on('click',    function(e){ e.preventDefault();  viewP.addClass('active');   });
  removeBtn.on('click', function(e){ e.preventDefault();  viewP.removeClass('active');  });
  classBtn.on('click',  function(e){ e.preventDefault();  viewP.toggleClass('active'); });   

// console.log($.fn);

  var rot       = $('.rotate');
  var widthBtn  = $('.btn_05-1');
  var narrowBtn = $('.btn_05-2');
  var slideWBtn = $('.btn_05-3');

  widthBtn.on('click',function(e) {
    e.preventDefault();
    rot.stop().slideDown();
  });
  narrowBtn.on('click',function(e) {
    e.preventDefault();
    rot.stop().slideUp();
  });
  slideWBtn.on('click',function(e) {
    e.preventDefault();
    rot.stop().slideToggle();
  });

  // display:none -> 
  // display:block; width:0; overflow:hidden; padding-left:0; padding-right:0; ->
  // width:지정값;  padding-left:사용값;  padding-right:사용값;




  // 가로확인
  var pWidth = viewP.width();
  
  // padding확인
  var ppl   = viewP.css('paddingLeft');  // 수치가 문자로 나타남
  var pplInt = parseInt(ppl);
  var ppr   = viewP.css('paddingRight'); // 수치가 문자로 나타남
  var pprInt = parseInt(ppr);

  // console.log(pWidth, pplInt, pprInt);

  // 가로슬라이드 보이기/사라지기
  var viewWidth  = $('.btn_06-1'); 
  var closeWidth = $('.btn_06-2'); 

  viewWidth.on('click',function(e){
    e.preventDefault();
    viewP.css({display:'block', width:0, paddingLeft:0, paddingRight:0, overflow:'hidden'});
    viewP.animate({width:pWidth, paddingLeft:pplInt, paddingRight:pprInt}, timed);
  });

  closeWidth.on('click',function(e) {
    e.preventDefault();
    viewP.animate({width:0, paddingLeft:0, paddingRight:0, overflow:'hidden'}, timed, function(){
      viewP.css({display:'none'});
    });
  });






})(jQuery);
