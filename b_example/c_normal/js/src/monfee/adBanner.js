// adBanner.js

(function($) {
  var banner = $('#adBanner');
  var viewOuter = banner.find('.view_outer');
  var viewBanner = viewOuter.find('ul');
  var viewBannerList = viewBanner.children('li');

  // adBanner영역의 구성을 변경
  // - 기존의 갯수에서 마지막 하나를 복제하여 앞에 배치
  //   (css문서에서 nth-child로 배경이미지를 처리하면 안된다. 즉, 각각 이름을 부여해서 처리)
  var viewBannerLast = viewBannerList.eq(-1).clone(true);
  // viewBannerList.eq(0).before(viewBannerLast);
  viewBanner.prepend(viewBannerLast);

  // 내용 변경 후 갯수 다시 파악
  viewBannerList = viewBanner.children('li');

  // - 감싸는 영역의 크기를 갯수 * 100% 크기만큼으로 변경
  // - 첫번째 보이는 요소는 첫배너로 처리하기위해 전체를 왼쪽으로 이동/ li내용의 크기값 재 수정
  
  var len = viewBannerList.length;
  // console.log(len);
  viewBanner.css({ width: len * 100 + '%', marginLeft: -100 + '%' });
  viewBannerList.css({ width: 100 / len + '%'});





  
})(jQuery);