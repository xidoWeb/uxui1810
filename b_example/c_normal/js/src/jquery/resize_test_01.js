// resize_test_01.js

(function($) {
  var full = $('.full');
  var fullDt = full.find('dt');
  // console.log( fullDt.contents() );
  // console.log( fullDt.children() );

  // var wr = fullDt.contents().contents().unwrap().wrap('<span></span>');
  var wr = fullDt.contents().contents().unwrap();

  // 자식요소를 확인 children() -> text를 확인할수 없다
  // 글자를 확인 text()        -> 배열로 정리하지 않고 일괄 처리
  // 자식이 요소/글이든 관계없이 확인할수 있다.
  // parent() 확인
  // wrap() 부모를 만드는
  // nwrap() 부모를 삭제

// =======================================
// mob환경에서 부분상황 position:fixed
  var mob = $('.mob');
/*
  // var btnTest = '\
  //       <ul>\
  //         <li><a href="#mob_1">link_01</a></li>\
  //         <li><a href="#mob_2">link_02</a></li>\
  //         <li><a href="#mob_3">link_03</a></li>\
  //         <li><a href="#mob_4">link_04</a></li>\
  //       </ul>';

  // mob.children('.content').prepend(btnTest);
  // for(var i=1; i<5; i++){
  //   mob.find('dl').eq(i-1).attr({id:'mob_'+i});
  // }
*/

  var mobBtnArea = mob.find('ul');

  // scroll이 처리될때 fixed처리되게 설정
  // 1. 기존 mobBtnArea가 상단에서 얼만큼 떨어져 있는지? offset().top
  var mobBtnTop = mobBtnArea.offset().top;

  // 2. 스크롤이 진행될때( on('scroll') ) 처리되는 값(스크롤의 값  scrollTop() )은 어떻게 되는지
  $(window).on('scroll',function(e) {
    var nowTop = $(this).scrollTop();
    /*
      if(mobBtnTop <= nowTop){
        mobBtnArea.css({position:'fixed'});
      }else{
        // mobBtnArea.css({position:'absolute'});
        mobBtnArea.removeAttr('style');
      }
    */
    (mobBtnTop <= nowTop) ? mobBtnArea.css({position:'fixed'}) : mobBtnArea.removeAttr('style') ;
  });
// ===============================================================
// 버튼 클릭시 이동처리(링크경로가 담겨진경우)
var mobBtn = mobBtnArea.children('li');
mobBtn.on('click',function(e) {
  e.preventDefault();

  // 1. 버튼(a)의 링크("href")의 값(#mob_1)이 가진 id의 위치를 파악
  var linkName = $(this).children('a').attr('href');
  var selectOffset = $(linkName).offset().top; 
  // console.log(linkName, selectOffset);

  // 버튼의 높이+일부(20px)만큼 덜 이동하게 처리하기
  var mobBtnH = mobBtnArea.height(); 
  var iWantOffset = selectOffset - mobBtnH - 20;

  // 2. 해당 위치로 animate 기능으로 이동
  $('html, body').animate({ scrollTop : iWantOffset });

});

  // tab =====================================
  var tab = $('.tab');
  var tabBtn = tab.find('ul').children('li');
  var tabList = tab.find('dl');
  // console.log(tabBtn.length, tabList.length);
  tabBtn.on('click',function(e) {
    e.preventDefault();
    var index = $(this).index();
    tabList.fadeOut();
    tabList.eq(index).fadeIn();
  });


})(jQuery);
