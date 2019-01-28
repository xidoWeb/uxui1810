// common_basic.js


  $(window).on('load', function() {
      $('.loading').remove();
  });
  //  -----------------------------------------


  var url = "./";
  $('#wrap').prepend('<header id="headBox">');
  $('#headBox').load(url+'jquery_example_01_header.html');

