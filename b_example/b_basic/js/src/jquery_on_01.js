// jquery_on_01.js

/*
  var h1 = document.getElementsByTagName('h1')[0];
  h1.style.backgroundColor = '#f50';
  h1.style.height = 100;
  h1.style.color = '#fff';
*/


(function($) {
  var h1 =  $('h1');
  h1.animate({backgroundColor:'#fa0', height:30, padding:'1rem'},500,'easeInOutBounce');

  var btnUl = $('.btn_area');
  var btnLi = btnUl.children('li');
  // console.log(btnLi.length);
  var span = $('.result>span');

//  --------------------------------------
  btnLi.on('click',function(e) {
      e.preventDefault();
      span.text('일단 클릭했습니다.');
  });

//  ---------------------------------------
  btnLi.on('dblclick', function(e){
    // pre + event + default
    e.preventDefault();
    var mythis =  $(this).index();
    span.text('선택된 li는'+ (mythis + 1) +'번째 입니다.');
  });

// ----------------------------------------




})(jQuery);




