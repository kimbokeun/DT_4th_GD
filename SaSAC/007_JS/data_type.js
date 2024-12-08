/*
자료형
  1. 데이터(변수) 종류
    - Primitive(원시 타입)
      - string / number / boolean /  
    - (객체 타입)
      - 

  * 템플릿 리터럴(문자를 표현하는 새로운 문법)
    - ES6부터 \(백틱), $, {} 조합으로 사용

  2. number 숫자형
    - 정수 / 실수
    - 연산 가능
    - JS에서는 정수와 실수를 구분하지 않고 모두 "Number"타입으로 취급
    - 모든 숫자를 같은 타입으로 취급
    - 실수의 형태 유지는 메서드 사용

  3. boolean
    - true / false

  4. null 빈 값
    - "값이 없음"을 의도적으로 명시
    
  5. undefined
    - 값 x, 타입 지정 x
*/ 

// console.log(`${text} 저는 김복은입니다. 저의 성별은 `);

// Array 안에 Array 들어갈 수 있음(중첩 가능)
const korean = [
  ['가', '나', '다'],
  ['라', '마', '바'],
  ['사', '아', '자'],
];

console.log(korean);
console.log(korean[1][2]);
console.log(korean[0][0], korean[2][2]);

const nums =[
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(nums[1][0][1]);

/*
  7. 객체 Object | key: value
    - 실제 존재하는 개체나 개념을 표현하는 데이터 구조
    - 속성과 메서드로 구성
      * 속성
        - 키(key)와 값(value)의 쌍으로 구성 
        - 상태나 특징
      * 메서드
        - 함수(function)를 값으로 가짐
        - 동작이나 행위
*/

const cat = {
  name: '장화',
  age: 10,
  isCute: true,
  meow: function () {
    return 'meow';
  },
};

console.log(cat);

// 객체(Object0)의 속성(key)에 접근하는 방법
//  1. 점 표기법(.)
console.log(cat.name);
console.log(cat.age);
console.log(cat.meow);

//  2. 대괄호 표기법([])
console.log(cat['name']);

//  3. key가 변수에 저장되어 있을 때
const tempVal = 'name';
console.log(cat[tempVal]);


/*
  8. typeof 자료형 확인 키워드
    - 구문
      typeof ~(어떤 무언가)
*/ 

console.log('------------------------------------------------');
console.log(typeof '문자');
console.log(typeof 12345);
console.log(typeof 1.2);
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);
// JS의 초기 구현 중 하나로, null 값을 object로 분류하는 것은 공식 인정한 언어의 설계상 오류

console.log(typeof undefined);
//console.log(typeof fruits); // Array > object
console.log(typeof cat);

/*
  9. 형변환
*/ 

//let mathScore = prompt('수학 점수 입력');
//console.log('mathScore > ', mathScore, typeof mathScore);
//let engScore = prompt('영어 점수 입력');
//console.log('engScore > ', engScore, typeof engScore);
//let avg = (mathScore + engScore) / 2;
//console.log(`수학, 영어의 평균 점수는 ${avg}점 입니다.`);

// 명시적 형변환
//   1. String() 문자로 형변환
let str1 = true;
let str2 = 123;
let str3 = String(undefined);
let str4 = toString(undefined);

console.log(typeof str3);
console.log(typeof str4);

//  2. Number() 숫자로 형변환
let n1 = true;
let n2 = Number(false);
let n3 = Number(123.6);

console.log(typeof n2);
console.log(typeof n3);
console.log(parseInt(n3, 10)); // n3 값을 10진수의 정수(int)로 바꿈
console.log(parseInt(n3, 2)); // n3 값을 2진수의 정수(int)로 바꿈
console.log(parseFloat(n3)); // n3 값을 10진수의 정수(int)로 바꿈

// + null, undefined를 숫자로 바꾸면
// NaN = Not-A-Number (숫자가 아님)
//  > 정의되지 않은 값이 숫자로 변환될 수 없기 때문!
// null = 0
//  > '의도적으로' 빈값




