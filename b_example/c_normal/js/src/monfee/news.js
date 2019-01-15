// news.js
(function ($) {
  var news = $('.news');
  var newsCon = news.children('.container');
  // var newsList = $('.news_list');
  var newsList = '<div class="news_list"><a href="#"><div class="img_list"></div><dl><dt>title</dt><dd>content</dd></dl></a></div>';


  // 링크,  사진, 제목, 내용
var newsArray = [
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"},
    {"link":"url", "pic":"pic.jpg", "tit":"title", "con":"content"}
  ];

  // newsCon.append(newsList);
  var i = 0; 
  for(; i < newsArray.length ; i += 1){
    newsCon.append(newsList);
  }

})(jQuery);