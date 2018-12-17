# gcass guideline

---

##  color 
### 기본 색상

mainColor   : #fff30d
subColor1   : #777777
subColor2   : #888888
subColor3   : #575757
textColor1  : #171717
textColor2  : #ffffff
background1 : #adadad



### 명도대비

#fff30d : #171717 (4.5:1) 글씨를 전경색을 사용할 수 있음.



---

## font 
fontFamily : 

- 웹폰트

- 영문

- 한글


fontSize(h1)    : 
fontSize(h2)    : 
fontSize(h3)    : 
fontSize(p)     : 12pt
fontSize(point) : 12pt/bold
단, 일부 디자인내용을 따를 수 있다.

- 서체의 크기는 최소 6pt이하로 제작할 수는 없다. 

---

## naming guide 

id: carmelCase
class: snake_case
level 1: id 로사용, '영역이름' + 'Box'를 사용
level 2: class로 사용, '기능이름' + '_area'를 사용
level 3: class로 사용, level2의 이름 + '_상세기능이름'을 사용
level 4: '상단 상세기능이름' + '_' + '번호2자리' 사용

단, 
1. 꼭 필요한 경우의 상황에서는 id를 이용하여 이름을 부여할 수 있다. 
2. level 1의 영역을 fullpage 기능으로 사용할경우, 일부 영역을 감싸 960영역설정시에는 '영역이름'+'_outer'이름으로 사용할 수 있다.  

---


## margin 

1. margin을 사용시 상단과, 하단 둘중 하나를 사용해야 하는경우라면, 상단의 영역에서 margin-bottom 기능을 사용한다.
2. 가로로 정렬(float:left)하여, 한쪽의 공간을 비워야한다면, 'margin-right' 기능 사용하자.

---

## 속성 작성순서 

1. display
2. float
3. position/z-index/top/right/bottom/left
4. margin
5. padding
6. box-sizing
7. border
8. width/min-width/max-width/height/min-height/max-height
9. background-color/image/repeat/position ...
10. font
11. etc

- 단위값 vw/vh 사용시 각영역을 처리하는 @media query문 내부 첫줄에 기준 크기값 미리 공지
- 단위값 vw/vh 사용시 해당수치 뒤에(;뒤에) 주석을 달고 공식을 작성

---

## z-index 

각 영역별 큰 설정에서는 위치단위를 100씩 사용
:focus 기능처리되는 영역 :500
header영역이 고정처리되는 상황에서는 : 1000
이외에 position/z-index 사용시 별도의 명세서에 표기
