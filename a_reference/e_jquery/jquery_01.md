# jQuery

[TOC]

---

## step1: setting

### 01. down and code

- basic site : http://jquery.com
- jquery down or CDN : http://code.jquery.com
- CDN2 : 
  - **jquery** http://unpkg.com/jquery
  - **jquery-ui** http://unpkg.com/jquery-ui



```html
<body>
    <!-- code -->
    
    <script src="//unpkg.com/jquery"></script>
    <script src="//unpkg.com/jquery-ui"></script>
    <script>
    	//code
    </script>
</body>
```



---

### 02. jQuery start

-  **before style**

```javascript
$(document).ready(function(){
   // jQuery code 
});
```

- **now style**

```javascript
(function($){
    // jQuery code
})(jQuery);
```



---

### 03. jQuery test

- document.write

```javascript
(function($){
    document.write('<p>code test</p>');
    document.write('<p>code test2</p>');
})(jQuery);
```

- alert

```javascript
(function($){
    alert('test1');
    alert('message test2');
})(jQuery);
```

- console.log

```javascript
(function($){
    console.log('console test');
    console.log('console test2');
})(jQuery);
```



---
### 미리 알아아 하는 기능

- 변수
- 숫자, 문자, true/false
- 객체/배열
- 함수
- 조건, 반복문