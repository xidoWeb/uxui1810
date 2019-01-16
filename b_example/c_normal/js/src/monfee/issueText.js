// issueText.js
(function($) {
  console.log('issueText.js');
  var issue = $('.issue_text');
  // indicator
  var indi = issue.children('.indi_cator').children('ul');
  var indiLi = indi.find('li');

  // moveBtn
  var moveBtn = issue.children('.move_btn');
  var moveBtnLi = moveBtn.children('button');

  // newsText
  var newsText = issue.children('.news_text');
  var newsLi  = newsText.children('dl');

  // imgBg
  var imgBg = issue.children('.news_img');
  var url = "../../img/monfee/issueBanner/";
  var imgList = [
    'issue_banner_01.png',
    'issue_banner_02.png',
    'issue_banner_03.png',
    'issue_banner_04.png'
  ];
  // url + imgList[순서];

  // ---------------------------------------------------
  // step1 : indicator를 선택시 해당하는 dl이 나타나게 만들기
  // step2 : dl이 나타날때, imgBg에 해당하는 이미지가 변경되게
  // step3 : dl의 요소가 시간의 순서에의해 변경되게 만들기
  // -----------------------------------------------------
  // step4 : 버튼을 선택시 멈추거나, 재생되거나 처리하게 만들기
  // step5 : dl의 요소를 json 기법으로 내용을 별도록 담아 자동처리되게 만들기
  // step6 : dl의 내용의 갯수만큼 indicator가 자동으로 생성되어 삽입되게 만들기
  // ==========================================================

  // step1 : indicator를 선택시 해당하는 dl이 나타나게 만들기
  var index = 0;
  newsLi.eq(0).show();
  imgBg.css({ backgroundImage: 'url(' + url + imgList[0] + ')' });

  indiLi.on('click', function(e){
    e.preventDefault();
    index = $(this).index();
    // newsLi.fadeOut();
    var dl = newsLi.eq(index);
    dl.siblings('dl').stop(true, false).fadeOut(500);
    dl.siblings('dl').removeClass('active');
    dl.delay(500).stop(true, false).fadeIn(500);
    dl.addClass('active');

    indiLi.eq(index).addClass('active');
    indiLi.eq(index).siblings('li').removeClass('active');

    // step2
    imgBg.css({ backgroundImage: 'url(' + url + imgList[index] +')'});
  });


})(jQuery);