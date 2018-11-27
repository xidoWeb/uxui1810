// menu_btn_01.js
/* 
  // 함수 표현식(익명함수(이름이없는 함수)를 변수에 대입처리)
  var Fn = function(e){ return e + 5; };
  var a = Fn(10); // console.log(a);

  // 함수 선언식(함수자체에 이름을 생성)
  function Fn2(e){ return e * 2; }
  var b = Fn2(5); // console.log(b);

  // 잠깐 테스트
  var tt = ("sana" + " momo")+' jiyoun';
  console.log(tt);

  // 즉시실행함수(IIFE)
  (function(e){ 
    var j = e *2 +3;  
    console.log(j);  
    return j;
  })(3);
 */
(function($){

// jQuery 선택자
/* step1:
   - css의 선택자형태와 똑같다.
   - 단, css형태 그대로표현할 수는 없기에, $()를 감싸야한다.
   - 문자일경우에는 ()안에 ''로 감싸주어야한다.


  var h1        = $('h1');
  var mya       = $('ul>li>a');
  var dlChildDd = $('dl>dt+dd');
  var liOne     = $('ul>li:nth-child(1)');

*/
/* step2:
   - 형제인지, 자식인지, 부모인지, 자손인지를 파악하여, 메소드형태로 나눠서 처리
   - 순서를 나타날때에는 내부에서 처리하는 방법과, 외부에서 순서값을 작성하는 방법

var mya = $('ul>li>a');
var aa = $('ul').children('li').children('a');
*/

var btn = $('.menu_btn_01');
btn.css({padding:'1rem', borderTop:'1rem solid #fa0'});

//---------------------------
var dt = btn.children('dt');
dt.css({backgroundColor:'#faa', color:'#177', fontStyle:'italic'});

//---------------------------
var dtChild = dt.children('button');
dtChild.on('mouseenter',function(){
  $(this).css({backgroundColor:'#555', color:'#fff'}); 
});

dtChild.on('mouseleave',function(){
  $(this).removeAttr('style');
});

// -----------------------------------------------
var show  = $('.show');
var hide  = $('.hide');
var btnDd = btn.find('dd');

// show를 클릭시 dd를 나타나게 만들기
show.on('click', function(e){
  e.preventDefault();
  btnDd.slideDown(2000);
});

// hide를 클릭시 dd를 사라지게 만들기
hide.on('click', function(evt){
  evt.preventDefault();
  btnDd.slideUp(2000);
});


// --------------------------------------------
var dual = $('.dual');
dual.on('click',function(e) {
  e.preventDefault();
 /* 
  var status = btnDd.css('display');
  console.log(status);

  if(status !== 'none'){
    btnDd.slideUp(500);
  }else{
    btnDd.slideDown(500);
  }
*/
  btnDd.slideToggle();
});





})(jQuery);
