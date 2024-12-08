
/*
# 반복문
  1. for문
    - 구문
      for([변수 선언 & 초기 값 설정]; [조건식(범위 지정)]; (증감식) {
        반복할 코드 내용
      }
*/ 

// for (let i = 0; i < 10; i++) {
//   // i가 0 ~ 9 총 10번 반복
//   console.log('안녕', i);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// 1 ~ n까지의 합 구하기
// let n = 10;
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i;
//   console.log(i, sum);
// };

// console.log(sum);           

/*
  2. for ~ if 중첩
*/

// 1 ~ 20 중에서 짝수의 합
//  1) 1 ~ 20까지 반복
//  2) 현재 반복 숫자가 짝수라면 (변수)에 더하기
//  3) for 문 안에 if문 조합

// let sum2 = 0;

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     sum2 += i;
//   }
//   console.log(i, sum2);
// };

// 3. while 문

// let index = 0;
// while ( index < 10 ) {
//   console.log('안녕!', index);
//   index += 1;
// }

// 구구단

// let i = 2, j = 1;
// while ( i < 10 ) {
//   while ( j < 10 ) {
//     console.log(`${i} * ${j} = ${i * j}`)
//     j++;
//   }
//   i++;
//   j = 1;
// }

// 1 ~ 20까지 홀수 합 구하기

// let num = 0, sum = 0;

// for (let num = 0; num <= 20; num++ ) {
//   sum += num;
// };
// console.log(sum);

// while ( num <= 20 ) {
//   if ( num % 2 === 1 ) {
//     sum += num;
//   };
//   num++;
// };

// console.log(sum);

// let i = 11;

// while ( i > 1 ) {
//   i--;
//   console.log(i);
// }

let i = 10;

while ( i >= 1 ) {
  console.log(i);
  i--;
}

// 4. do ~ while 문
/*
  - while문과 유사하지만 조건을 반복문 실행 후, 확인
  - 조건이 참인지 여부에 상관없이 코드 블록을 최소 한 번 실행한 후 조건을 검사
  - 즉, 항상 코드 블록을 한 번 실행한 후, 조건이 참인 동안 반복을 계속!
*/ 

/*
  구문
  do {
    (내용)
  } while(조건)
*/ 

// let g = i;
// do {
//   console.log('g >>>>', g);
//   g++;
// } while ( g <= 5 );

// let number;
// do {
//   number = parseInt(prompt('숫자를 입력하세요.(10보다 큰 숫자): '), 10);
// } while(number <= 10);
console.log('입력한 숫자: ', number);
// 10보다 작은 수를 입력하면 조건을 계속 만족하기 때문에, prompt가 반복 실행됨

// 5. break & continue
//    - 반복문에서 사용하는 제어문

// # break
//    - 반복문을 완전히 중단
// # continue
//    - 이번 회차만 중단, 다음 회차로 넘어감

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  };
  console.log(`i >>>> ${i}`);
};

for (let i = 1; i <= 5; i++) {
  if(i === 3){
    continue;
  };
  console.log(`i >>>> ${i}`);
};

// for문을 활용한 별 출력
/*
  1) prompt 사용, 높이 입력 받기
    10진수의 정수(int)형으로 변환
  2) 각 줄의 내용을 저장한 문자열 변수 선언
  3) 문자열과 문자열을 더함
  4) for문 중첩
*/ 