// rwd_page.js
(function($) {
  var winW = $(window).width();
  var size = $('.size');
  var product = $('.product');

// step1 -----------------------------
 
/*
  $(window).on('resize',function(){
     var nowW = $(window).width();
      if(winW !== nowW){
        location.reload();
      }
  });
*/

// step1 -----------------------------
/* 각각의 디바이스 환경이 변하면 새로고침 */
/*
var mob = 480;
var tab = 768;
var pc  = 1366;
var myDevice;
var product = $('.product');

var Device = function(w){
  if(w <= mob){  
    myDevice = 'mobile';
  }else if(w > mob && w <= tab){
    myDevice = 'table';
  }else if(w > tab && w <= pc){
    myDevice = 'pc';
  }else{
    myDevice = 'pcfull';
  }
product.text(myDevice);
console.log(myDevice);
return myDevice;
};

var beforeDevice = Device(winW);
$(window).on('resize',function(){
  var nowW = $(window).width();
  var afterDevice = Device(nowW);
  // console.log(beforeDevice, afterDevice);
  if(beforeDevice !== afterDevice){ location.reload(); }
});
*/


// step3 --------------------------------

var webSize = [
  [480,  'mobile'],
  [768,  'table'],
  [1366, 'pc']
];

var viewWidth;

var deviceCheck = function(w) {
    if(w <= webSize[0][0]){
      viewWidth = webSize[0][1];
    }else if(webSize[webSize.length-1][0] < w){
      viewWidth = 'other';
    }else{
      for(var i=0; i<= webSize.length-1; i++){
        console.log(webSize.length-1);
        if(w > webSize[i][0] && w <= webSize[i+1][0]){
          viewWidth = webSize[i+1][1];
        }
      }
    }
    console.log(viewWidth);
    product.text(viewWidth);
    return viewWidth;
};
var dSize = deviceCheck(winW);

$(window).on('resize',function(){
  var nowW = $(window).width();
  var reSize = deviceCheck(nowW);
  if(dSize !== reSize){ location.reload(); }
});


})(jQuery);