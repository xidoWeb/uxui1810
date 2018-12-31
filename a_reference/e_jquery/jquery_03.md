# jQuery

[TOC]

---

## step3: 내용 입력

- text : 내용을 확인/ 작성

```javascript
$('p').text()  // p요소의 글을 확인
$('p').text('text test')  // p요소 내부에 text test 문구를 작성
```

- html : html요소를 확인/작성

```javascript
$('p').html()  // p요소 내부의 요소를 확인
$('p').html('<span></span>')  // p요소 내부에 span태그를 삽입
```

- val : form 요소 내부에 존재하는 value값을 확인하거나 작성할때 사용하는 기능

```javascript
$('input#idName').val(); // input#idName 의 value값을 확인
$('input#idName').val('xido'); // input#idName 의 value값 xido로 입력
```

- before, after

```javascript
$('p').before('<div></div>'); // <div></div> <p></p>
$('span').before('text');     // text<span></span>
$('p').after('<ul></ul>');    // <p></p><ul></ul>
```

- append/appendTo

```javascript
$('p').append('<span></span>'); // <p>000000<span></span></p>
$('p').appendTo('<div></div>'); // <div>0000<p></p></div>
```

- prepend/prependTo

```javascript
$('p').prepend('<span></span>'); // <p><span></span>00000</p>
$('p').prependTo('<div></div>'); // <div><p></p>0000</div>
```

- addclass, removeClass, toggleClass

```javascript
$('p').addClass('box');     // <p class="box"></p>
$('p').removeClass('box');  // <p class="box"></p>  --> <p></p>
$('p').toggleClass('box');  // <p class="box"></p>  <--> <p></p>  : .box를 넣었다 뺐다 교차 처리
```

- hasClass : class속성의 유무 판단

```javascript
var pbox = $('p').hasClass('box');
console.log(pbox);  // p요소에 class값인 box의 존재유무판단(있으면 true, 없으면 false)
```

- is : 요소의 유무 판단

```javascript
var div = $('#wrap').children().is('p');
console.log('div');  // #wrap 자식의 요소중에서 p요소 존재유무 판단(있으면 true, 없으면 false)
```

- attr, removeAttr

```javascript
var pa = $('p').attr('title'); // p요소의 속성 title의 값을 파악
$('p').attr('title','수정내용'); // p요소의 속성 title의 값을 '수정내용'으로 변경
$('p').removeAttr('title');     // p요소의 속성 title을 삭제
```

- remove, empty

```javascript
$('p').empty();  // p요소의 내부를 삭제
$('p').remove();  // p요소를 삭제
```

- wrap

```javascript
$('p').wrap('<div>');  // p요소를 div요소로 감싸 처리(생성)하는 기능
```

- clone

```javascript
$('p').clone(true); // p요소를 복제 1번만가능
```

- load : 가져오기(비동기처리방식), html문서 기준으로 사용

```javascript
$('p').load('../../text.json');
```

