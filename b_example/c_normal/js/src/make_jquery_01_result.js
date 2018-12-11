// make_jquery_01_result.js

(function($) {
  // jquery start =======

  $('body').html('<div id="wrap"></div>');
  var wrap = $('#wrap');
  wrap.append('<header id="headBox"></header>\
                     <section id="viewBox"></section>\
                     <article id="newsBox"></article>\
                     <article id="conBox"></article>\
                     <footer id="footBox"></footer>');


var wrapChild = wrap.children();
console.log(wrapChild);

var headBox = $(wrapChild[0]);
var viewBox = $('#viewBox');
var newsBox = $('#newsBox');
var conBox  = $('#conBox');
var footBox = $('#footBox');
// headBox.css({height:'10rem', backgroundColor:'#faa'});

headBox.html('<h1></h1>\
              <nav id="gnb">\
                <ul></ul>\
              </nav>\
              ');

var h1 = $('h1');
 $('h1').html('<a href="#">index page 이동</a>');

var h1Link = h1.children('a');
// h1Link.text('회사의 이름을 입력')
// h1Link.attr('href','../../index.html');
h1Link.text('회사의 이름을 입력').attr('href','../../index.html');

$('#gnb').prepend('<h2>global navigation</h2>');

var gnb = $('#gnb');
var gnbH2 = gnb.children('h2');
var gnbText = gnbH2.text();

gnbH2.html('<span></span>');
gnbH2.children('span').text(gnbText);
// gnbH2.attr('class','hidden');
gnbH2.addClass('hidden');

var gnbUl = gnb.children('ul');
// gnbUl.append('<li><a href="#">link_name_01</a></li>');
// gnbUl.append('<li><a href="#">link_name_02</a></li>');
// gnbUl.append('<li><a href="#">link_name_03</a></li>');
// gnbUl.append('<li><a href="#">link_name_04</a></li>');
// gnbUl.append('<li><a href="#">link_name_05</a></li>');

var i = 0, j, k;
for( ; i < 12; i+=1 ){
 k = i+1;
 if( k < 10 ){ j = '0'+k; }else{ j = k; }
 gnbUl.append('<li><a href="#">link_name_'+ j +'</a></li>');
}


$('#headBox').nextAll().html('<h2>이곳에는 해당영영의 이름이 들어감!</h2>');

$('#newsBox').append('<div class="news_outer"></div>');
var newsBox = '<div class="news_01">\
               <div class="img"><span>뉴스이미지1</span></div>\
               <dl class="news_content">\
                 <dt>news_title</dt>\
                 <dd>news_content</dd>\
               </dl>\
               </div>';

var newsOuter = $('.news_outer');
// var imgUrl = "../../../img/news/";
var newsContent = [
    {className:'news_01', img:'#fa0', imgNarr:'a번째 이미지', tit:'title_01', con:'con_01'},
    {className:'news_02', img:'#fa1', imgNarr:'b번째 이미지', tit:'title_02', con:'con_02'},
    {className:'news_03', img:'#fa2', imgNarr:'c번째 이미지', tit:'title_03', con:'con_03'},
    {className:'news_04', img:'#fa3', imgNarr:'d번째 이미지', tit:'title_04', con:'con_04'},
    {className:'news_05', img:'#fa4', imgNarr:'e번째 이미지', tit:'title_05', con:'con_05'},
    {className:'news_06', img:'#fa5', imgNarr:'f번째 이미지', tit:'title_06', con:'con_06'},
    {className:'news_07', img:'#fa6', imgNarr:'g번째 이미지', tit:'title_07', con:'con_07'},
    {className:'news_08', img:'#fa7', imgNarr:'h번째 이미지', tit:'title_08', con:'con_08'},
    {className:'news_09', img:'#fa8', imgNarr:'i번째 이미지', tit:'title_09', con:'con_09'},
    {className:'news_10', img:'#fa9', imgNarr:'j번째 이미지', tit:'title_10', con:'con_10'},
    {className:'news_11', img:'#f10', imgNarr:'k번째 이미지', tit:'title_11', con:'con_11'},
    {className:'news_12', img:'#f11', imgNarr:'l번째 이미지', tit:'title_12', con:'con_12'},
    {className:'news_13', img:'#f12', imgNarr:'m번째 이미지', tit:'title_13', con:'con_13'}
    ];
 
var newsSelector, i = 0;
for(; i < 12; i+=1){
  newsOuter.append(newsBox);

  newsSelector = newsOuter.children('div').eq(i);
  newsSelector.attr({'class':newsContent[i].className});
  newsSelector.find('.img').css({backgroundColor:newsContent[i].img});
  newsSelector.find('.img').children('span').text(newsContent[i].imgNarr);
  newsSelector.find('.news_content').children('dt').text(newsContent[i].tit);
  newsSelector.find('.news_content').children('dd').text(newsContent[i].con);
}



  // jquery end =========
})(jQuery);