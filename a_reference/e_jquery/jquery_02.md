# jQuery

[TOC]

---

## step2: selector

**기본형태** : `$( 선택자 )` - 기본형태는 CSS선택자와 동일하다.

- type selector

```javascript
$('div')
$('ul>li')
$('ul>li:nth-child(2)')
```

- id, class selector

```javascript
$('#wrap')
$('.box')
```

- children, find

```javascript
$('ul').children('li')  //$('ul>li')
$('div').find('a')      // $('div a')
```

- next/nextAll/nextUntil

```javascript
$('dt').next('dd')  // $('dt + dd')
$('dt').nextAll('dd')  // $('dt ~ dd')
```

- prev/prevAll/prevUntil

```javascript
$('.ddlilst').prev('dd') // $('.ddlist')이전요소인 dd
$('.ddlilst').prevAll('dd') // $('.ddlist')이전요소인 dd 모두
```

- siblings

```javascript
$('dt').siblings('dd') // $('dt')에존재하는 모든 형제인 dd
```

- parent

```javascript
$('li').parent() // $('li') 부모
```

- parents/parentsUntil

```javascript
$('a').parents()      // $('a')의 부모이상의 모든 요소
$('a').parents('ul')  // $('a')의 부모이상의 요소중에서 ul
$('a').parentsUntil('ul') //$('a')의 부모이상의 요소중에서 ul 미만
$('a').closest('ul') // $('a')의 부모이상의 요소중에서 ul
```

- nth, eq

```javascript
// $('li:nth-child(4)')
$('li:nth(3)')
$('li:eq(3)')
$('li').eq(3)
```

- $(this) : 여러개중에 선택한 것

```javascript
 
$('li').on('click', function(e){
    var i = $(this).index()
    console.log(i);
});
```

- index : 순서의 위치(몇번째)를 알려주는 것(확인의 기능)- ( ) 내부에는 아무것도 작성하지 않는다!

---



