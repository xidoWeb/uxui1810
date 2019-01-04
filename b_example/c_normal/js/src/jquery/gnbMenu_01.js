// gnbMenu_01.js

/*
  show() , hide(), toggle()
  fadeIn(), fadeOut(), fadeToggle()
  slideDown(), slideUp(), slideToggle()
*/

(function($) {
  var gnb = $('#gnb').find('dl');
  var gnbDt = gnb.children('dt');
  var gnbDd = gnb.children('dd');

  // dt의 자식인 a에 클릭하면, 그 부모의 바로뒤에있는 dd를 보이게 해라

  // 1. dt의 자식인 a에 클릭하면,
  gnbDt.children('a').on('click', function(e) {
    e.preventDefault(); 
    // 2.그 부모의 바로뒤에있는 dd를 보이게 해라   
    var nextDd = $(this).parent('dt').next('dd');
    gnbDd.stop(false, true).fadeOut();
    nextDd.stop(false, true).fadeIn();

    // 그런데!, 내용중에 마지막 a가 blur 처리가 된다면, 해당dd는 사라져라
      // 1.내용중에 마지막 a
    var ddLast = nextDd.find('a').eq(-1);
      // 2.blur 처리가 된다면
    ddLast.on('blur',function(){
      // 3.해당dd는 사라져라
      
      nextDd.slideUp();
    });
  });

/* //[1]
  // 마지막 a요소에서 포커스가 빠져나간다면, 그 부모dd를 사라지게 해라
    // 1. 마지막 a요소에서 포커스가 빠져나간다면,
  gnbDd.find('a').eq(-1).on('blur', function(e) {
    // 2.그 조상 dd를 사라지게 해라
    var nextDd = $(this).parents('dd');
    nextDd.stop(false, true).slideUp();
  });
*/

// for(var i=0; i<10; i+=1){}

/** forEach()
  * forEach는 배열 형식에서 각각 상황에따라 수행할 경우에 쓰는 기능 메소드.
  
  ex)
    var arr = [1,3,6,9,10];

    for(var i=0; i<arr.length; i++){
      console.log(arr[i]);
    }

    arr.forEach(function(data, index){
      console.log(data, index);
    });

    $.each(arr, function(i, d){
      console.log(d, i);
    });
*/


// dl에 마우스가 빠져나간다면, 모든 dd를 사라지게 만들어라!
$('#headBox').on('mouseleave',function(e) {
  gnbDd.slideUp();
});

})(jQuery);





// slideDown()
/*
display:none;

display:block; height:0;

height:10rem; transition:height timed linear;
*/