/*
#연산자

  1. 대입연산자
    변수에 값을 "할당"할 때 사용
  2. 산술 연산자
    사칙연산 +, -, /, *
    나머지 연산 %
    거듭제곱 연산 **
*/ 

let a = 5;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);
console.log(a ** b);

/*
  3. 비교연산자
    * 동등비교
      - 같다(동등) ==, ===
      - 같지 않다(부등) !=, !==
      - 2개 : 값만 비교, 자료형(type)은 비교 x > 관대한 연산자
      - 3개 : 값과 자료형(type)은 둘 다 비교 x > 엄격한 연산자
*/ 

console.log(1 == 1);
console.log(1 == 2);
console.log(1 != 2);
console.log(1 != 1);
console.log("1" == 1);
console.log("1" != 1);
console.log(1 === 1);
console.log(1 === 2);
console.log(1 !== 2);
console.log(1 !== 1);
console.log("1" === 1);
console.log("1" !== 1);

/*
    * 크기 비교
      > / < / >= / <>>=
*/ 

console.log(2 > 1);
console.log(2 >= 2);

/*
  4. 논리 연산자
    - ! not(참 > 거짓 / 거짓 > 참)
    - && and (여러 값 중 모두가 참 > 참)
    - || or (여러 값 중 하나라도 참 > 참)
*/ 

console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

/*
    * 문자열에서 + 연산 : 문자열 더하기
      더하기 제외한 연산은 숫자로 자동 형변환, 계산됨
*/ 

/*
  5. 증감연산자
    - ++ : 변수 값 1 증가
    - -- : 변수 값 1 감소
    앞뒤 위치에 따라 결과가 다름
*/

let result, result2;
let num = 10,
    num2 = 20;

/*
    * 후위 연산자(Postfix operator)
      - 변수에 먼저 대입한 후에 +1(-1) 연산을 수행
      * 전위 연산자(Pretfix operator)
      - +1(-1) 연산을 먼저 수행, 변수에 대입
*/ 

result = num++;
console.log(result);
console.log(num);

result2 = ++num2;
console.log(result2);
console.log(num2);