# jQuery

[TOC]

---

## step4: 효과 메소드

- css메소드 : transition 기능이 없다.(필요시 transition기능 입력)

```javascript
$('p').css('color','#fa0');
$('p').css('backgroundColor','#fff');
$('p').css('fontSize','1.2rem');
// ---------------------------------------------------
$('p').css({color:'#fa0', 
            backgroundColor:'#fff',
            fontSize: 1.2 + 'rem'});
```

- animate메소드 : 기본  transition기능이 내장

```javascript
$('p').animate({color:'#fa0', 
            backgroundColor:'#fff',
            fontSize: 1.2 + 'rem'});
// --------------------------------------------------
var duration = 1000; 
var timingFunction = 'linear | swing | default';
$('p').animate({color:'#fa0'}, duration, timingFunction);
```

- delay : **animation 기능이 적용된 메소드**에서 해당기능을 수행하기 전에 잠시 기다릴때 작성하는 메소드

```javascript
$('#wrap').delay(1000).animate({width: '10px'}, 2000,'swing');  // 1초 뒤에 진행
```

- setTimeout( function(){  },시간 ) : **메소드가 아닌 함수**로 delay메소드와 유사하지만, 함수의 기능으로 수행

```javascript
setTimeout(
      function(){
         $('#wrap').css({width: '10px', 
                     transition:'all 500ms ease'});
         $('#wrap').append('<div>무언가 텍스트를 작성</div>');
      },2000);
```

---

sample : **콜백함수**

```javascript
  $('#wrap').animate({height:'100px'},500,'swing',  function(){
      $(this).animate({height:'1000px'},2000,  function(){
        $(this).animate({height:'400px'});
      });
  });
```

---

- show, hide, toggle
- fadeIn, fadeOut, fadeToggle
- slideDown, slideUp, slideToggle



