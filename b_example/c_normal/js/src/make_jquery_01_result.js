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

var i = 0;
for( ; i < 5; i+=1 ){
  gnbUl.append('<li><a href="#">link_name_'+ (i+1) +'</a></li>');
}




  // jquery end =========
})(jQuery);