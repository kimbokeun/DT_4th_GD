console.log(document); // 최상위 노드를 통해 하위 요소 접근
console.log(document.childNodes); // [<!DOCTYPE html>, <html>]
console.log(document.childNodes[1]); // html
console.log(document.childNodes[1].childNodes[2]);  // body
console.log(document.childNodes[1].childNodes[2].childNodes);  // 

// 직접 접근하기 위한 속성, 메서드
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

console.log(document.domain); 

// # 취소선이 그어지는 이유
//   - 해당 속성의 사용을 권장하지 않거나, 더이상 지원되지 않을 가능성
//   - 최신 보안 정책에서는 도메인을 사용한 접근 제어 방식이 보안상 취약할 수 있기 때문에 지양

// # API
//   - 상호작용 가능하게 만드는 규칙이나 인터페이스(도구)

// # document 객체를 이용한 HTML
//  1. 요소 선택
//    1. getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

//    2. getElementByClassName (HTMLCollection)
console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName('pink')[2]);
console.log(document.getElementsByClassName('others'));

//    3. getElementByTagName (HTMLCollection)
console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByTagName('h1'));

//    4. getElementByName (NodeList)
console.log(document.getElementsByName('id')); 

//    5. querySelector (CSS Selector)
//      - 성능의 문제로 getElementBy ~ 가 더 빨리 찾을 수 있다.
//        (사실 성능의 문제는 미미.. 그렇지만 중요하다면 고려)
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="id"]'));

//    6. querySelectorAll (CSS Selector) (NodeList)
//      - 선택자에 해당하는 모든 요소
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#green'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('[name="id"]'));
console.log(document.querySelectorAll('.others')[0]);

console.log(document.querySelectorAll('div')[0]);
console.log(document.querySelectorAll('div')[1]);
console.log(document.querySelectorAll('div')[2]);
console.log(document.querySelectorAll('div')[3]);
console.log(document.querySelectorAll('div')[4]);

/*
  * 유사 배열 (HTMLCollection, NodeList)
    - [] 식으로 생긴 배열과 비슷하지만 완전히 같지는 않은 객체
      > 배열처럼 사용 가능
    - HTML 문서 내 요소들을 그룹으로 묶어 제공하는 컬렉션
    - 배열처럼 Index, length를 가짐
    - But! 배열과 달리 사용가능한 메서드가 제한적

    1. HTMLCollection
      - HTML 문서에서 특정 조건에 맞는 요소들을 실시간으로 컬렉션 형태로 반환
      - 실시간
        > 문서 내용이 변경되면 HTMLCollection도 즉시 업뎃
      - HTML 요소 전용
        > 컬렉션에 포함된 항목은 항상 HTML 요소
      - 배열은 아님
        > 배열처럼 인덱스로 접근 가능
        > 배열 메서드
*/ 

// for 문으로 가능
const pinkElements = document.getElementsByClassName('pink');
for (let i = 0; i < pinkElements.length; i++) {
  console.log('pinkElements >>>> ', pinkElements[i]);
};

// HTMLCollection > forEach() 메서드 사용 불가
// 반복이 필요하다면? Array로 변경 > Array.from() 메서드 사용
/*
  * Array.from()
    - ES6에서 도입된 JS 메서드
    - 유사 배열 객체나 반복 가능한 객체를 실제 배열로 변환 사용
    - 배열을 생성하면서 특정 로직을 적용 가능
    - 구문
      Array.from(arrayLike, mapFunction, thisArg)
      > arrayLike
        배열로 변환할 '유사 배열 객체'나 '반복 가능한 객체'
      > mapFunction (선택)
        새 배열로 각 요소에 실행할 매핑 함수
      > thisArg (선택)
        mapFunction을 실행할 때 사용할 this 값
*/  

// 1) 유사 배열 객체를 배열로 변환
const arrayLike =  { 0: 'a', 1: 'b', 2: 'c', length: 3};
const array = Array.from(arrayLike);
console.log('array : ', array);

// 2) 문자열을 배열로 변환
const str = 'hello';
const strArray = Array.from(str);
console.log('strArray : ', strArray);

// 3) 숫자 범위 배열 생성
const range = Array.from( {length: 5}, (_, i) => i + 1);
console.log('range : ', range);
// _는 단순히 '인덱스를 이용, 배열을 생성'라는 의도
// [0, 1, 2, 3, 4]

/*
  * 매개변수의 의미
    1. (_)
      - 배열의 각 요소 값을 나타냄
      - 배열을 생성할 때 초기값은 기본적으로 undefined이므로 사용되지 않는 경우가 많음
      - 사용하지 않을 때는 관습적으로 _로 표현, '사용하지 않는 값'임을 명시
    
    2. (i)
      - 현재 인덱스를 나타냄
      - 배열의 각 위치에서 몇번째 요소인지 알려줌
*/ 

// 4) HTMLCollection을 배열로 변환
//    > .forEach 메서드 사용 가능!
const htmlCollection = document.getElementsByTagName('div');
const array2 = Array.from(htmlCollection);
console.log('array2 >>>> ', array2);

array2.forEach((element) => console.log(element));

/*
    2. NodeList
      - DOM에서 노드의 그룹을 반환(텍스트 노드, 주석 노드 포함)
      - 정적(재랜더링이 되야 html도 변경)
        > getElementsByName, querySelectorAll로 생성
      - 실시간(바로 html도 변경)
        > childNodes로 생성
*/ 
   
// NodeList > forEach() 반복문 사용 가능
document.querySelectorAll('.pink').forEach((element) => console.log(element));

// for ~ of 문
const array3 = document.querySelectorAll('.pink');
for (let element of array3) {
  console.log(element);
};

const pinks = document.querySelectorAll('.pink');
for (let pink of pinks) {
  console.log(pink);
};

// 모든 요소는 모든 노드가 됨!
// But, 모든 노드가 모든 요소는 아니다!