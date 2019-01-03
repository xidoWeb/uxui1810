//  accordion_01.js

(function($) {
  var accordion = $('.accordion');
  var accorBtn = accordion.find('dt').children('button');
  var accorDd  = accordion.find('dd');
  // console.log(accorBtn, accorDd);

  accorDd.eq(0).show();

  accorBtn.on('click focus',function(e) {
    e.preventDefault();
    var dd = $(this).parent().next('dd');
    // dd.css({display:'block'});
    // dd.slideDown();

    var ddState = dd.css('display') == 'none';
    if(ddState){
      dd.slideDown();
    }else{
      dd.slideUp();
    }
    // dd.slideToggle();


    var ddS = dd.siblings('dd');
    // ddS.css({display:'none'});
    // ddS.removeAttr('style');
    ddS.slideUp();
  });

  accorBtn.on('blur',function(){
    var dd = $(this).parent().next('dd');
    dd.slideUp();
  });


})(jQuery);
