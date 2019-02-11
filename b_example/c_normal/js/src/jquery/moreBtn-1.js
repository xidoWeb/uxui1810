// moreBtn-1.js

(function($) {
// 외부 데이터 불러오기

var people = $.ajax({
    dataType:'json',
    url:'../../data/people.json',
    async:false
  }).responseJSON;
// console.log(people);
var peopleLen = people.length;

// var test = people.slice(10,15);
// console.log(test);

// ==========================================
// 구조형태 만들기
var listSample = '<li>\
                    <strong class="key"></strong>\
                    <span class="name"></span>\
                    <span class="mail"></span>\
                    <span class="contry"></span>\
                    <span class="day"></span>\
                  </li>';
// ==========================================
// 반복기능을통해 목록 전체 담기
// 1테스트: li하나 담기
var peopleEl = $('.people').children('ul');
for(var k=0; k<10; k++){
  peopleEl.append(listSample);  
}

var peopleFor = function(n, index){

    // x는 index값이 들어왔을경우에 index*10+n값으로 처리하고, index값이 없다면, n의 값으로 대체
    // if(index){ var x= n+(index*10); }else{ var x = n; }
    var x = n+(index*10) || n;  

    var peopleLi = peopleEl.find('li').eq(n);
    // console.log(n + '번째 li를 선택');
    var peopleArr = people[x];
    var peopleName = peopleArr.first_name + ' ' + peopleArr.last_name;
    peopleLi.find('.key').text( peopleArr.id );
    peopleLi.find('.name').text( peopleName );
    peopleLi.find('.mail').text( peopleArr.email );
    peopleLi.find('.contry').text( peopleArr.country );
    peopleLi.find('.day').text( peopleArr.modified );
    // console.log(n);
};


// ==========================================
// 일정갯수만 보이기

var forGo = function(index){
  var i=0;
  var view = 10; // 보이고자 하는 갯수  
  var jsonlist= index || 0;
  for(; i<view; i++){
      peopleFor(i, jsonlist);
  console.log('!!');
  }
};
forGo();

//  더보기 버튼 삭제, 목록 인디케이터생성
var btn = $('.more_btn');
btn.remove();

peopleEl.after('<ol class="list_indi"></ol>');
var indi = peopleEl.next('.list_indi');
// 생성할 인디케이터 갯수 파악
var viewList = Math.ceil(peopleLen/10);
// console.log(viewList);
var j=0;
for(; j<viewList; j++){
  indi.append('<li><button type="button">'+ (j+1) +'</button></li>');
}

var indiLi = indi.find('li');
indiLi.on('click', function(e){
  e.preventDefault();
  var index = $(this).index();
  forGo(index);
});

// ======================================================




})(jQuery);