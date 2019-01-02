### event

#### **on()** 메소드의 기능

*1.9이전버전*

```javascript
$('li').click(function(){ /* 기능을 수행 */ });
```

*2018년 현재*

```javascript
$('li').on('click', function(){
	// 기능을 수행    
});
// -----------------------------
var view = functino(){/* 기능수행내용 */};
$('li').on('click', view);
```

- 키보드/ 마우스 제어

  - **click** : 마우스 클릭(왼버튼)
  - **dblclick** : 더블클릭(왼버튼)
  - **mousedown** : 마우스 눌렀을때
  - **mouseup** : 마우스 눌렀다가 띄었을때
  - **keypress** : 키 눌렀다 띄었을때(영문, 숫자, 스페이스, 엔터키 등의 제한된 키에 대한 값만 반응)
  - **keydown** :키 누르고 있을때
  - **keyup** :키 눌려저 있는상황에서 띄었을때
  - **mouseenter** : 마우스가 대상위치에 올라갔을때
  - **mouseleave** : 마우스가 대상위치에서 벗어났을때
  - **mouseover** : 마우스가 대상위치에 올라갔을때(겹치는 부분시 중복처리)
  - **mouseout** : 마우스가 대상위치에서 벗어났을때(겹치는 부분시 중복처리)
  - mousewheel, DOMMouseScroll

- 기능

  - **change** : 무언가 변화(값)가 되었을때 

  - **focus** : a, button,form안의 요소(input, textarea, select ...), tabindex속성을 가진것이 선택되었을때

  - **blur** : focus가 빠져나갔을때

- 화면상의 제어

  - **resize** : 크기가 변형 되었을 때
  - **scroll** : 스크롤기능이 수행되었을 때
    - 다음 메소드를 같이 알아야한다
    - scrollTop() : 스크롤바의 상단의 위치값
    - offset().top  : scrollTop(0)값에서 떨어진 위치값
    - offset().left :  브라우저 왼쪽에서 떨어진 위치값

- touch(css상에서 스마트폰의 기준으로보면, 터치의 의미)

  - **touchstart** : touch가 시작되는 위치
  - **touchend** :touch가 끝나는(떨어지는) 위치
  - **touchmove** : touch되어있는 무언가가 움직일때 발생하는 

  - touch기능에는 이벤트 추가 속성이 발생한다.
    (originalEvent 내부에 좌표값을 나타내는 속성을 사용)

  ---

  #### on이 아닌 이벤트 메소드

- **off()** : on() 메소드를 강제로 끄는기능

- **one()** : 한번만 실행하도록 처리

- **ready()** : html문서가 모두 준비되고 난 다음에 구현되도록 처리

- **trigger()** : 다른 함수를 실행하게 만드는 메소드

- **hover()** : mouseenter, mouseleave 기능을 통합 on() 메소드에 포함되지 X, 실상용은 적다