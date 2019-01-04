//  accordion_01.js


(function($) {
  var accordion = $('.accordion');
  var accorBtn = accordion.find('dt').children('button');
  var accorDd  = accordion.find('dd');

  accorDd.eq(0).show();
  accorBtn.eq(0).addClass('active');

  accorBtn.on('click focus',function(e) {
    e.preventDefault();
    var type = e.bubbles;
    
    if(type){
      var _this = $(this);
      var dd = _this.parent().next('dd');

       dd.slideToggle(5000);

      var ddS = dd.siblings('dd');
      ddS.slideUp(5000);

      _this.addClass('active');
      var dtButton = _this.parent().siblings('dt').children('button');
      dtButton.removeClass('active');
    }
  });

  accorBtn.on('blur',function(){
    var _this = $(this);
    var dd    = _this.parent().next('dd');
    _this.removeClass('active');
    dd.slideUp();
  });

})(jQuery);
