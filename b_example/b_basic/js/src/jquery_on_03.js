// jquery_on_03.js

(function($) {

  var btn1 = $('.btn').children('button').eq(0);
  var btn2 = $('.btn').children('button').eq(1);
  var viewBox = $('.view_box');


  btn1.on('click',function(e) {
    e.preventDefault();
    viewBox.css({transform:'translate(0)',
                transition:'all 300ms ease'});
  });
  btn2.on('click',function(e) {
    e.preventDefault();
    viewBox.css({transform:'translate(-50%)',
                transition:'all 300ms ease'});
  });
})(jQuery);