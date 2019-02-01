// multiSlide.js
(function($) {
  var next = $('.next');
  var prev = $('.prev');
  var view = $('.view_outer');
  var viewUl = view.children('ul');
  var viewLi;

  var viewArr = [
    '<iframe src="https://www.youtube.com/embed/0QmxP64UJuk"  allow="accelerometer; encrypted-media; gyroscope;"></iframe>',

    '<iframe src="https://www.youtube.com/embed/sNumqwM8_yE" frameborder="0" allow="accelerometer; encrypted-media; gyroscope;"></iframe>',

    '<iframe src="https://www.youtube.com/embed/CUfHJe3rxSU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;"></iframe>',

    '<iframe src="https://www.youtube.com/embed/HGJLc8sW3KE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;"></iframe>',

    '<iframe src="https://www.youtube.com/embed/oUYIQOTzJsc?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;"></iframe>',
    
    '<iframe src="https://www.youtube.com/embed/1Jd0RhvheGE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  ];

  for(var i=0; i<viewArr.length; i++){ 
    viewUl.append('<li></li>');
    viewUl.children('li').eq(i).html(viewArr[i]);
  }

  viewLi = viewUl.children('li');
  var viewLiW = viewUl.children('li').eq(0).outerWidth();


viewUl.css({marginLeft:0});

prev.on('click',function(){
  // viewLi.eq(-1).prependTo(viewUl);
  // viewLi = viewUl.children('li');
  viewUl.animate({marginLeft:viewLiW},1000,function(){ 
    viewUl.css({marginLeft:0});
    viewLi.eq(-1).prependTo(viewUl);
    viewLi = viewUl.children('li');
  });
});
next.on('click',function(){
  // viewLi.eq(0).appendTo(viewUl);
  // viewLi = viewUl.children('li');
  viewUl.animate({marginLeft:-viewLiW},1000,function(){
    viewUl.css({marginLeft:0});
    viewLi.eq(0).appendTo(viewUl);
    viewLi = viewUl.children('li');
  });
});



})(jQuery);