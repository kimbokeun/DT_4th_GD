/*
# 조건문
  - 어떤 조건에 따라 논리구조를 나눔
  - 각 조건을 '분기'라고도 함
  - 조건에 따라 서로 다른 문장을 실행

  1. if 문
    if(조건식) {
      조건식이 참이라면 문장을 실행
    }
*/ 
// 1) 단일 if문(if 1개)
// if (5 > 3) {
//   console.log('옳다.');
// };
// prompt()로 사용자로부터 값을 입력받고(문자열),
// Number() 문자열 > 숫자형 형변환
//let number = Number(prompt('숫자를 입력해주세요.'));

// 2) if ~ else문
// if (number > 10) {
//   console.log('입력한 수는 10보다 크다.');
// } else {
//   console.log('입력한 수는 10보다 작거나 같다.');
// };

// 3) if ~ "else if" ~ else문
// if (number > 10) {
//   console.log('입력한 수는 10보다 크다.');
// } else if (number === 10) {
//   console.log('입력한 수는 10이다.');
  
// } else {
//   console.log('입력한 수는 10보다 작다.');
// };

// 4) if ~ "else if" * n ~ else문
// else는 한 번만 사용 가능
// else if는 여러 번 사용 가능
// if (number > 100 || number < 0) {
//   console.log('입력값이 잘못되었습니다. 숫자의 범위를 확인해주세요.');
// } else if (number >= 90) {
//   console.log('A');
// }

// 5) if ~ "else if" * n ~ else문
// let userId = 'user01';
// let userPw = '1234';

// function loginUser() {
//   let inputId = prompt('아이디를 입력해주세요.');
//   let inputPw = prompt('비밀번호를 입력해주세요.');

//   if (userId === inputId) {
//     if (userPw === inputPw) {
//       return '로그인이 완료되었습니다.';
//     } else {
//       return '비밀번호가 잘못입력되었습니다. 확인해주세요.'
//     };
//   } else if (inputId === '') {
//     return '아이디를 입력하지 않으셨습니다.';
//   } else {
//     return '아이디가 잘못되었습니다. 확인해주세요.'
//   }
// };

// const result = loginUser();
// console.log(result);

/*
  2. switch 문
    - 하나 이상의 case 문으로 구성
    * default: switch문 내의 모든 case가 매칭되지 않을 때 실행.
      - 필수느 아니지만, 사용하길 권장
      - if문의 else 같은 존제
      - 

*/ 

let a = 3;
switch (a) {
  case 1:
  case 2:
  case 3:
    console.log('a가 1~3이군요!');
    break;
  case 4:
    console.log('a가 4이군요!');
    break;
  case 5:
    console.log('a가 5이군요!');
    break;
  default:
    console.log('a가 무슨 값인지 모르겠어요!');
    break;
}
//breaik 문이 없으면 조건을 빠져나가지 않고 아래에 있는 모든 case의 코드도 실행됨

/*
  3. 삼항 연산자
    조건식 ? A : B
      - 조건식이 참이면 'A' 거짓이면 'B'
      if문을 간단하게
*/ 

let num = 5;
// 일반 if문
if (num % 2 === 1) {
  console.log('홀수');
} else {
  console.log('짝수');
}
// 삼항 연산자
num % 2 === 1 ? console.log('홀수') : console.log('짝수');

/*
  실습 2번 
    new Date
      - 내장함수 
      - 현재 날짜, 시간 > JS 객체 반환
    * 내장 함수
      - JS 엔진 기본 제공 함수
      - 별도로 정의하지 않아도 사용 가능
      - 전역 객체에 속해 있어 어디서든 접근 가능, 바로 사용 가능
*/

let now = new Date();
let now2 = new Date().getHours;

console.log(now);
console.log(now2);