//  accordion_01.js

(function($) {
  var accordion = $('.accordion');
  var accorBtn = accordion.find('dt').children('button');
  var accorDd  = accordion.find('dd');
  // console.log(accorBtn, accorDd);

   accorDd.eq(0).show();
   accorBtn.eq(0).addClass('active');

  accorBtn.on('focus',function(e) {
    e.preventDefault();

    var _this = $(this);
    var dd = _this.parent().next('dd');
    // dd.css({display:'block'});
    dd.slideDown();

    // var ddState = dd.css('display') == 'none';
    // if(ddState){      dd.slideDown();    }else{      dd.slideUp();    }
    // // dd.slideToggle();


    var ddS = dd.siblings('dd');
    // ddS.css({display:'none'});
    // ddS.removeAttr('style');
    ddS.slideUp();


    //  --------------
    // accorBtn.removeClass('active');
    _this.addClass('active');
    var dtButton = _this.parent().siblings('dt').children('button');
    dtButton.removeClass('active');

  });

  accorBtn.on('blur',function(){
    var _this = $(this);
    var dd    = _this.parent().next('dd');
    _this.removeClass('active');
    dd.slideUp();
  });


})(jQuery);
