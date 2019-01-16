// news.js
(function ($) {
  var news = $('.news');
  var newsCon = news.children('.container');
  // var newsList = $('.news_list');
  var newsList = '<div class="news_list"><a href="#"><div class="img_list"></div><dl><dt>title</dt><dd>content</dd></dl></a></div>';


  // 링크,  사진, 제목, 내용
var imgUrl = "../../img/monfee/new_menu/";

// 비동기식(병렬) 방식으로 처리되어 외부의 data를 불러오는 형식은 모두 
// A(async:비동기식)J(javascript:자바스크립트로)A(and:그리고)X(xml:외부문서)를 불러오는 방식
var jsonDataUrl = "../../data/newsArray.json";
var newsArray = $.ajax({type:'get', async:false, url:jsonDataUrl}).responseJSON;


  // newsCon.append(newsList);
  var i = 0, list;
  var AppendListMenu = function(i){
    newsCon.append(newsList);
    list = $('.news_list').eq(i);
    list.find('a').attr({ 'href': newsArray[i].link });
    list.find('.img_list').css({ 'backgroundImage': 'url(' + imgUrl + newsArray[i].pic + ')' });
    list.find('dt').text(newsArray[i].tit);
    list.find('dd').text(newsArray[i].con);
  };

  for (; i < newsArray.length ; i += 1){
    AppendListMenu(i);
  }





/*
    var url = '/data/newsArray.json';
    // var newsData = $.ajax({type:'get', url:url, async:false}).responseJSON;
    // var newsData = $.ajax({type:'get', url:url, async:false}).responseText;
*/
})(jQuery);