/*
  # 배열에서 반복문 사용하기!
    - 기본 for문
    - for ~ of 문
    - [].forEach 메서드
    */ 
   
   const fruits = ['사과', '배', '포도', '귤'];
   console.log(fruits.length);
   console.log(fruits[0]);
   
   for (let f = 0; f < fruits.length; f++) {
     console.log(fruits[f]);
    };
    
    const arr = [1, 2, 5, 6, 7];
    
//  1. 기본 for문
for (let a = 0; a < arr.length; a++) {
  console.log(arr[a]);
};

//  2. for ~ of 문
//    - ES6에 도입
//    - 배열이나 반복 가능한 객체의 요소들을 순차적으로 반복할 때
//      - 순서가 있는 구조 반복에 적합
//    - 배열의 요소를 직접 참조, 인덱스를 사용할 필요 X

const alphabets1 = ['a', 'b', 'c', 'd'];
for (let alpha1 of alphabets1) {
 console.log(`alpha >>>> ${alpha1}`);
};
//    - 배열 'alphabets'의 각 요소를 반복, 'alpha' 변수에 순서대로 할당, 각 요소 반복문 블록 실행
//    - alphabets: 배열, 문자열 등 반복가능한 객체
//    - alpha: 반복되는 각 항목을 의미, 각 항목에 한 번씩 실행(개발자 정의 변수)
//    - 다만, 변수명이 반복하는 값을 잘 표현할 수 있도록 적절하게 설정 권장

//  3. [].forEach 메서드
//    - 배열의 각 요소에 지정된 콜백 함수 실행(배열 메서드, 배열에서만 사용 가능)
//    - 일반적으로 배열을 순회하면서 각 요소에 동일한 작업을 수행할 때 사용
//    - 각 요소에 함수가 호출될 때마다, 해당 요소가 함수의 인자로 전달

const alphabets = ['a', 'b', 'c', 'd'];

alphabets.forEach(function (alpha, idx, arr) {
  // alpha: currentValue를 의미(반복하고 있는 현재 요소)
  // idx: currentValue의 인덱스(위치)
  // arr: forEach를 호출한 배열
  console.log(`Element: ${alpha}, Index: ${idx}, Array: [${arr}]`);
});

numbers = [1, 3, 5, 9];
numbers.forEach(function (number, i , arr) {
  arr[i] = number * 2;
}); 
console.log(`Array: ${numbers}`);

//  * map / filter, find 메서드
//    - 조건에 따라 요소를 변형, 선택
//    - '불변성을 유지'하면서 데이터를 처리
// 
//    4. map()
//      - 배열의 각 요소에 지정된 함수를 호출(실행), 그 결과를 새로운 배열로 생성
//      - 기존 원본 배열은 변하지 않음

const nums = [1, 2, 3, 4, 5];

const doubleNums = nums.map(function (num) {
  return num * 2;
}); 

console.log(`doubleNums >>>> `, doubleNums);
console.log(`nums >>>> `, nums);

//      ++ 추가 설명 
//        - 구체적으로 콜백 함수는 map() 메서드에 인수로 전달
//        - 각 요소를 처리하는 함수로서 배열의 각 요소를 순회할 때마다 호출
//        - 이 콜백 함수는 배열의 각 요소를 인자로 받아서 원하는 작업을 수행, 그 결과를 반환

//        - num은 콜백 함수의 매개변수
//          > 현재 처리중인 배열의 요소를 나타냄 
//          > 이 매개변수를 활용, 각 요소에 원하는 작업 수행 

//    5. filter()
//      - 각 요소에 지정된 함수 호출(실행), 그 결과가 'true'인 요소들로 이루어진 새로운 배열 생성
//      - 기존 원본 배열은 변하지 않음

const pracNumbers = nums.filter(function(num) {
  return num % 2 === 0;
});
console.log(`pracNumbers >>>> `, pracNumbers);
console.log(`nums >>>> `, nums);

//    6. find()
//      - 조건을 만족하는 첫번째 요소 찾기
//      - 배열의 요소를 하나씩 검사, 첫번째 조건을 만족하는 요소를 찾으면 그 즉시 반복 종료
//      - 조건에 만족 > 해당 요소 반환
//      - 조건에 불만족 > undefined 반환

const pracNumbers2 = nums.find(function (num) {
  return num % 2 === 0;
});

console.log(`pracNumbers2 >>>> `, pracNumbers2);
// 홀수만 있을 경우 > 조건 불만족 > undefiend 출력

// ++ 객체에서 반복문 사용하기
// for ~ in 반복문
// 객체의 'key'를 반복할 수 있는 구문

const tiger = {
  name: 'yaki',
  job: 'king',
  height: 192,
}

console.log(tiger.name);
console.log(tiger['name']);

for( let k in tiger ) {
  console.log(`${k} : ${tiger[k]}`); // 객체의 각 속성(key, value)에 실행할 코드
  // key: k
  // value: tiger[k]
}