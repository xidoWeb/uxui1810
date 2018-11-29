// slide_banner_02.js

(function($) {
  console.log('!!!!!!!');
  // ** jquery이용하여 슬라이드 광고배너를 만들기
  //  기본 선택자 변수로 설정
  var viewOuter = $('.view_banner_outer');
  // viewOuter.animate({marginLeft:-200+'%'});
  var viewIndi = $('.view_indicator').find('li');

  // step_01 인디케이터 버튼을 클릭하여 해당 순번의 광고로 이동하게 만들기
  viewIndi.children('a').on('focus',function(event) {
    event.preventDefault();

    var _thisP = $(this).parent();
    var _thisI = _thisP.index();  // index() 해당 순서위치를 파악하는 기능
    var _index = _thisI * 100;

    viewIndi.removeClass('action');
    viewIndi.eq(_thisI).addClass('action');

    console.log(_thisI);
    viewOuter.animate({marginLeft:-_index + '%'});
    
  });



  // step_02 오른쪽 버튼 클릭하여 오른쪽 광고로 이동하게 만들기
  // step_03 왼쪽 버튼 클릭하여 이전 광고로 이동하게 만들기
  // step_04 해당광고의 끝으로 이동하면 버튼 사라지게 만들기
  // step_05 인디케이터와 순서값을 연동하여 처리되게 만들기


})(jQuery);