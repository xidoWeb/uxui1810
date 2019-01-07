// tabmenu_02.js

(function($) {

  // tab_menu 사용
  //step1 : 타블렛영역 처리

  var tablet = $('.tab');
  var tabMenu = tablet.children('ul').children('li');
  var tabCon = tablet.children('.content');

  tabMenu.on('click',function(e) {
    e.preventDefault();
    var _this = $(this);
    var index = _this.index();
    _this.addClass('active');
    _this.siblings('li').removeClass('active');

    tabCon.children('div').eq(index).show();
    tabCon.children('div').eq(index).siblings('div').hide();
  });

  tabMenu.find('a').on('focus',function(e) {
    e.preventDefault();
    $(this).on('keyup', function(evt) {
      console.log(evt.keyCode);
      // 키보드가 tab버튼일경우 다른 tab_menu로 이동
      // 키보드가 화살표 좌,우 방향키일경우 옆 버튼으로 이동
      // tab:9  , 왼방향:37, 오른쪽 방향: 39
      switch(evt.keyCode){
        case 9:
        break;

        case 37:
        break;

        case 39:
        break;
      }
    });
  });

})(jQuery);
