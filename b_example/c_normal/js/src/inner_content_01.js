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

  // console.log( viewBox.prev() );
  // console.log( viewBox.next() );

  var headBox = $('#headBox');
  // headBox.children('h1').after('<nav id="gnb"></nav>');
  headBox.find('.head_wrap').append('<nav id="gnb"></nav>');
  var gnb = $('#gnb');
  // html()은 기존의 내용을 모두 삭제하고 새로 쓴다.
  gnb.html('<h2>navigation</h2>');
  // gnb.append('<h2>navigation</h2>');
  // gnb.prepend('<h2>navigation</h2>');

  // headBox.find('.head_wrap').append('<div id="member"></div>');
  // var member = $('#member');
  // 컴퓨터는 지시한 대로만 수행: 인격이 없기에 입력한대로만 수행한다.
  // member.append('<a href="#">로그인하기</a>');
  // member.append('<p>어서오세요 ...님</p>');
  // member.prepend('무엇이?');
 
 gnb.append('<ul></ul>');
 var gnbUl = gnb.children('ul');
 // li를 5개 만드시오.
 // 방법 1- 직접 작성하기
   // gnbUl.append('<li><a href="http://google.com">list_01</a></li>');
   // gnbUl.append('<li><a href="http://naver.com">list_02</a></li>');
   // gnbUl.append('<li><a href="http://daum.net">list_03</a></li>');
   // gnbUl.append('<li><a href="http://w3schools.com">list_04</a></li>');
   // gnbUl.append('<li><a href="http://caniuse.com">list_05</a></li>');

 // 방법 2- 반복문사용하기
  // var i = 0; var j;
  // for(; i<5; i+=1){
  //   j= i + 1; // 숫자를 0부터가 아닌 1부터 작성하도록 처리
  //   gnbUl.append('<li><a href="#">list_0'+ j +'</a></li>');
  // }

 // 덧1 - 링크주소 별도로 만들어 담기(배열사용)
  var i = 0; var j;
  var addr = [ 'http://google.com',
               'http://naver.com',
               'http://daum.net',
               'http://w3schools.com',
               'http://caniuse.com',
               'http://kakao.com'
              ];

  // for(; i < addr.length; i+=1){
  //   j= i + 1;
  //   gnbUl.append('<li><a href="' + addr[i] + '">list_0'+ j +'</a></li>');
  // }

  for(i = addr.length; i > 0 ; i-=1){
    j= i - 1;
    gnbUl.prepend('<li><a href="' + addr[j] + '">list_0'+ i +'</a></li>');
  }

  var head = $('head');
  head.append('<style></style>');
  var style = head.children('style');

  style.append('\
      #gnb{width:100%; height:auto; padding:0.5rem 1rem; box-sizing:border-box;}\
      #gnb>ul{width:100%; height:auto;}\
      #gnb>ul:after{content:" "; display:block; clear:both;}\
      #gnb li{width:100px; height:auto; float:left; margin-right:1rem; background-color:#fff; text-align:center;}\
      ');
// ======================================

var foot = $('#footBox');
/* //** appendTo , prependTo 기능이해하기
  var to1 = '<p>내용에 이전에 삽입하고 있음</p>';
  // 방에 아버지께서 들어가신다.
  // foot.prepend(to1);

  // 아버지께서 방에 들어가신다.
  $(to1).prependTo(foot);

  var to2 = '<p>내용에 뒤에 삽입하여 처리 </p>';
  // foot.append(to2);
  $(to2).appendTo(foot);
*/
 foot.css({height:'auto'});
 foot.append('<ul></ul>');
var footUl = foot.children('ul');
footUl.css({margin:'1rem auto', width:'70%', height:'30rem', backgroundColor:'#faf', boxSizing:'border-box', padding:'1rem'});

//  --------------------------------------
// footUl.append('<li>list_01</li>');
// footUl.append('<li>list_02</li>');
// footUl.append('<li>list_03</li>');
// footUl.append('<li>list_04</li>');
// footUl.append('<li>list_05</li>');

// footUl.prepend('<li>list_01</li>');
// footUl.prepend('<li>list_02</li>');
// footUl.prepend('<li>list_03</li>');


var addr2 = ['a', 'b', 'c', 'd'];
// console.log( addr2[3] );
// console.log( addr2.length );
var addLen = addr2.length;


// for(var k = 0; k<addLen; k+=1){
//  // console.log(k);
//  // console.log( addr2[k] );
//  footUl.append('<li><a href="' + addr2[k] + '">list_'+ (k+1) +'</a></li>');
// }

for(var k = addLen; k > 0; k-=1){
 // console.log(k);
 // console.log( addr2[k-1] );
 footUl.prepend('<li><a href="'+ addr2[k-1] + '"> list_'+ k +'</a></li>');
}


foot.find('li').css({width:'100%', height:'2rem', marginBottom:'0.5rem', fontSize:'1.3rem', fontWeight:'bold', textAlign:'center', backgroundColor:'#fff'});

})(jQuery);