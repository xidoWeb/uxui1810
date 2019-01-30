// jquery_example_03.js

(function($) {
  var mTab = $('.multi_tab');
  var step1 = mTab.children('.step1');
  var stepLi = step1.children('li');
  var tabView = $('.tab_view');
  var i = 0;
// load()
  var LinkView = function(i){
     var mylink = stepLi.eq(i).children('button').attr('data-link') + '.html';
    tabView.load( './step2/' + mylink ,function(){
      var st2 = $('.step2_menu');
      var st2Li = st2.children('li');
      var vCon = $('.step2_content');
      var vConLi = vCon.children('div');

      st2Li.on('click',function(){
        $(this).addClass('view');
        $(this).siblings('li').removeClass('view');
        var i = $(this).index();
        vConLi.eq(i).addClass('view');
        vConLi.eq(i).siblings().removeClass('view');
      });
    });
  };
  LinkView(i);

  stepLi.on('click', function(){
    i = $(this).index();
    $(this).addClass('active');
    $(this).siblings('li').removeClass('active');
    LinkView(i);
  });

  // var st2 = $('.step2_menu');
  // var st2Li = st2.children('li');
  // st2Li.on('click',function(){
  //   $(this).children('button').css({backgroundColor:'#f06'});
  //   console.log('test');
  // });

})(jQuery);