
//  주말? 평일?
console.log('오늘은 주말인가요? 평일인가요?');

let date = new Date();
let today = date.getDay();

if (today == 0 && today == 6) {
  console.log('오늘은 주말입니다.');
} else {
  console.log('오늘은 평일입니다.');
};