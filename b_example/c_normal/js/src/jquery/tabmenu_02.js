// tabmenu_02.js

(function($) {

  var winWidth = $(window).width();
  var mobWidth = 640;

  var tabMenu = $('.tab_menu');

  var devideWidth = function(device){
    if(device <= mobWidth){
      tabMenu.addClass('mob');
    }else{
      tabMenu.addClass('tab');
    }
  };
  devideWidth(winWidth);


  $(window).on('resize',function() {
    var nowWinWidth = $(window).width();

    if(winWidth !== nowWinWidth){
      location.reload();
    }
  });

  



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
      evt.preventDefault();
      // console.log(evt.keyCode);

      // 키보드가 tab버튼일경우 다른 tab_menu로 이동
      // 키보드가 화살표 좌,우 방향키일경우 옆 버튼으로 이동
      // tab:9  , 왼방향:37, 위:38, 오른쪽 방향: 39, 아래:40
      var ek = evt.keyCode;

      // if(ek == 9){}
      // else if(ek == 37 || ek ==38){}
      // else if(ek == 39 || ek == 40){}

      // (ek == 9) ? /*참 */ : (ek == 37) ?/* 37이면 */ : (ek == 39)? : ;



      switch(ek){
        // case 9:
        //   $('.mob').find('li').eq(0).children('a').focus();
        // break;

        case 37:
        case 38:
          $(this).parent().prev('li').children('a').focus();
        break;

        case 39:
        case 40:
          $(this).parent().next('li').children('a').focus();
        break;
      }
    });
  });

// ===================================================================
var mobile  = $('.mob');
var mobMenu = mobile.children('ul');
var mobList = mobMenu.children('li');
var mobCon  = mobile.find('.content');

mobList.on('click',function(e) {
  e.preventDefault();
  // e.stopPropagation();
  var viewMenu = mobMenu.hasClass('view') == false;
   
  if(viewMenu){
    mobList.show();
    mobMenu.addClass('view');
  }else{
    var i = $(this).index();
    // console.log(i);
    mobCon.children('div').eq(i).show();
    mobCon.children('div').eq(i).siblings('div').hide();

    mobMenu.removeClass('view');
    mobList.eq(i).addClass('active');
    mobList.eq(i).siblings('li').removeClass('active');
    mobList.eq(i).siblings('li').hide();
  }

});



})(jQuery);
