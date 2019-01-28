// header.js
(function($) {

  // --------------------------------------
  var navBox = $('#navBox');
  var firstNav = navBox.find('.first_nav').children('li');
  var secondNav = firstNav.find('.second_nav');
  var deepNav = secondNav.find('ul');


  firstNav.on('click',function(e){
    e.preventDefault();
    secondNav.hide();   

    // $(this) -> firstNav.on('click'...
    $(this).find('.second_nav').show(0,function(){
      // $(this) -> $(this).find('.second_nav')
      var sn = $(this);
      sn.animate({left:0});
      sn.siblings().removeAttr('style');

      $(this).children('li').on('click',function(e) {
        e.preventDefault();
        deepNav.hide();

        $(this).find('ul').show(0, function(){
          var lastUl = $(this);
          lastUl.animate({left:0});
          lastUl.siblings().removeAttr('style');
        });
      });
    });


  navBox.append('<div class="close hidden_wrap"><button type="button"><span>메뉴닫기</span></button></div>');
  var closeBtn = navBox.find('.close');
  closeBtn.css({position:'absolute', top:'-1rem', right:'-1rem', zIndex:'2000', width:'2rem', height:'2rem', backgroundColor:'#111', borderRadius:'50%'});

  closeBtn.on('click', function(e){
    e.preventDefault();
    secondNav.fadeOut(function(){
      $(this).removeAttr('style');
    });
    deepNav.fadeOut(function(){
      $(this).removeAttr('style');
    });
    closeBtn.remove();
  });

  });  // firstNav.on('click',

 

  // --------------------------------------
  
})(jQuery);