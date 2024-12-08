// 10000까지의 숫자 중
// 13의 배수 && 홀수
// prompt 이용

// let inputNumber = Number(prompt('숫자를 입력해주세요.'));

// for (let i = 0; i < inputNumber; i++) {
//   if ( i % 2 === 1 && i % 13 === 0 ) {
//     console.log(i);
//   };
// };

// 구구단 만들기
// let x, y, multiply = x * y;

// for (x = 2; x <= 9; x++) {
//   for (y = 1; y <= 9; y++) {
//     multiply = x * y;
//     console.log(`${x} * ${y} = ${multiply}`);
//   };
// };

// 0 ~ 100
// 2 or 5 배수 
// 총합

// let sum = 0;

// for (i = 0; i <= 100; i++) {
//   if (i % 2 === 0 || i % 5 === 0) {
//     sum += i;
//   }
// };
// console.log(sum);

// for문을 활용한 별 출력
/*
  1) prompt 사용, 높이 입력 받기
    10진수의 정수(int)형으로 변환
  2) 각 줄의 내용을 저장할 문자열 변수 선언
  3) 문자열과 문자열을 더함
  4) for문 중첩

  h = 5 입력
      * i = 1 / j = h - i > h - 1 = 4 / k = 1
     **
    ***
   ****
  *****    
*/ 

let lineScore = parseInt(prompt('숫자를 입력해주세요.'), 10);

for ( let n = 1; n <= lineScore; n++ ) {
  let stars = '';

  for ( let m = 1; m <= lineScore - n ; m++ ) {
    stars += ' ';
  };

  for ( let o = 1; o <= n; o++ ) {
    stars += '*';
  };
  console.log(stars);
};



// const height = parseInt(prompt('높이를 입력하세요.'), 10);
// // 별 찍기
// for (let i = 1; i <= height; i++) {
//   let line = ''; // 각 줄의 내용을 저장할 문자열 
  
//   // 공백 추가
//   for (let j = 1; j <= height - i; j++) {
//     line = line + ' ';
//   }

//   // 별 추가
//   for (let k = 1; k <= i; k++) {
//     line = line + '*';
//   }
  
//   console.log(line);
// };

// h = 5
// i = 1 / j = 1 ~ 4 / k = 1 >>>> ____*

   