// moreBtn.js
(function($) {
// 외부 데이터 불러오기

var people = $.ajax({
    dataType:'json',
    url:'../../data/people.json',
    async:false
  }).responseJSON;
console.log(people);
var peopleLen = people.length;

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

var peopleFor = function(n){
  peopleEl.append(listSample);
  var peopleLi = peopleEl.find('li').eq(n);
  var peopleArr = people[n];
  var peopleName = peopleArr.first_name + ' ' + peopleArr.last_name;

  peopleLi.find('.key').text( peopleArr.id );
  peopleLi.find('.name').text( peopleName );
  peopleLi.find('.mail').text( peopleArr.email );
  peopleLi.find('.contry').text( peopleArr.country );
  peopleLi.find('.day').text( peopleArr.modified );
};

var i=0;
for(; i<peopleLen; i++){
  peopleFor(i);
}

// ==========================================
// 일정갯수만 보이기


})(jQuery);