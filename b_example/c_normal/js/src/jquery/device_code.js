// device_code.js
(function($) {
  var winW = $(window).width();
  var mob = 480;
  var tab = 768;
  var pc  = 1366;

  // mobile 환경일때 구동되는 기능
  if(winW <= mob){ Mobile(); }
  // tablet 환경일때 구동되는 기능
  if(winW > mob && winW <= tab){ Tablet(); }
  // pc 환경일때 구동되는 기능
  if(winW > tab && winW <= pc){ Pc(); }
  // pcful 환경일때 구동되는 기능
  if(winW > pc){ PcFull(); }


// Mobile ==============================================
 function Mobile(){
    $('.device').hide();
    var btn = $('.view_size').on('click',function(e) {
      e.preventDefault();
      $('.device').fadeIn();
    });
  };

// Tablet ==============================================
 function Tablet(){
    $('.view_size').hide();  
    $('div').on('click',function() {
      $(this).css({backgroundColor:"#aca", color:'#ff0'});
    });
  };

  // Pc ==============================================
  function Pc(){
    var jj = $.ajax({
      url:'../../../js/src/jquery/rwd_jsTest.js',
      dataType:'script',
      async:false
    });
    console.log(q);



  };

// PcFull ==============================================
  function PcFull(){
    $('div').on('click',function() {
      $(this).css({backgroundColor:"#aca", color:'#ff0'});
    });
  };


// var jj = eval($.ajax({
//   url:'../../../js/src/jquery/rwd_jsTest.js',
//   dataType:'script',
//   async:false
// }).responseText);




})(jQuery);