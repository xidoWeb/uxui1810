// inner_content_01.js

(function($) {
  // console.log('start!!');
  /* ========================
  01. text()       : 작성한 내용을 확인/작성 하는 메소드
  02. html()       : html태그를 확인/제작 하는 메소드
  03. wrap()       : 선택한 요소의 부모요소를 제작 하는 메소드
  04. before()     : 선택요소의 이전(형제)에 요소를 제작/삽입하는 메소드
  05. after()      : 선택 요소의 이후(형제)에 요소를 제작/삽입하는 메소드
  06. prepend()    : 선택요소의 자식의 앞에 요소를 제작/삽입하는 메소드 
  06-1. prependTo()
  07. append()     : 선택요소의 자식의 뒤에 요소를 제작/삽입하는 메소드
  07-1 appendTo()
  08. clone()      : 내용/태그 ... 복제하는 메소드
  09. remove()     : 선택 요소를 삭제하는 메소드
  10. empty()      : 선택요소의 내부를 비우는 메소드
  11. removeAttr() : 선택요소의 속성을 삭제하는 메소드
  12. attr()       : 선택요소의 속성을 파악/수정/삽입 하는 메소드
  13. val()        : form 요소의 값을 파악/삽입 하는 메소드
   =========================*/

  var h1 = $('h1');
  var h1T = h1.text();
  var h1TreWrite = h1.text('링크를 삽입하고 다시 처리하기 ');
  // console.log(h1TreWrite);
  var myText = '함께 jquery 추가기능 사용하기';

  var h1Link = h1.html('<a href="#">'+ h1T + '와 <br />' + myText +'</a>');
  // console.log(h1Link);

  var h1Wrap = h1.wrap('<div class="head_wrap"></div>');
  var headWrap = $('.head_wrap');
  headWrap.css({margin:'auto',
                padding:1+'rem', 
                width:60+'rem',
                textAlign:'center'});
  // console.log( h1Wrap );

  var viewBox = $('#viewBox');
  // console.log( viewBox.prev() );
  // console.log( viewBox.next() );

  viewBox.before('<div class="view view-before"></div>');
  viewBox.after('<div class="view view-after"></div>');
  $('.view').css({width:'100%', height:'1rem', backgroundColor:'#f0a'});

  console.log( viewBox.prev() );
  console.log( viewBox.next() );


})(jQuery);