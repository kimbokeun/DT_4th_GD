// spread (...) 연산자
//  - 배열이나 객체를 개별 요소로 펼치거나,
//    새로운 배열이나 객체를 복사, 병합
//  - 더 간결, 유연하게 데이터 처리 가능

// 배열에서의 스프레드 연산
// 1. 배열 복사
const arr = ["a", "b", "c"];
const copyArr = [...arr];
console.log(copyArr);
console.log(arr === copyArr);

// 2. 배열 병합
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];
console.log(spread);

const burger = {
  base: "meat patty",
  seller: "Burger King",
};

const whopper = {
  ...burger,
  name: "Whopper",
};

console.log("burger >>>> ", burger);
console.log("burger >>>> ", whopper);

// rest 파라미터
//  - 함수가 여러 개의 인자를 받을 때, 나머지 인자들을 배열로 모아주는 역할
//  - '마지막 인자'로만 사용
//  - 함수에서 여러 rest 파라미터 사용 불가. 한 번만 가능

// 함수에서 사용 예시
const values = [10, 20, 30, 40, 50, 60];
function get(a, b, c, ...rest) {
  console.log(a, b, c);
  console.log("rest >>>> ", rest);
}

get(...values);

// 객체
const iceCream = {
  seller: "lotte",
  flavor: "blueberry",
  price: 1000,
};

const { flavor, ...abc } = iceCream;
console.log(flavor);
console.log(abc);

// 배열
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two2, ...rest] = number;
console.log(one1, two2);
console.log(rest);

// spread 연산자 VS rest 연산자
// Spread 함수 호출 시
function Details(name, born) {
  console.log(`Name: ${name}, Born: ${born}`);
}
const details = ["KYK", 1988];

// Spread 문법으로 배열의 개별 요소를 인자로 펼쳐서 전달
Details(...details);

// Rest 함수 정의시
//  > 호출받는 함수의 파라미터
function Numbers(...numbers) {
  console.log(numbers); // [1, 2, 3, 4, 5]
}

Numbers(1, 2, 3, 4, 5);

// '얕은 복사' VS '깊은 복사'
//   - 객체나 배열과 같은 참조 타입 데이터를 처리할 때, 데이터를 복사하는 두가지 주요 방식
/*
1. 얕은 복사 Shallow Copy
  - 복사 대상 객체의 '1단계 깊이'까지만 새로운 데이터를 생성
  - 그 안에 중첩된 ('2단계 이상') 객체나 배열은 '참조를 복사'하는 방식
    > 즉, 복사된 객체와 원본 객체느 중첩된 데이터에 대해 같은 참조를 공유
  
    * 특징
      - 원본 객체의 최상위 속성을 수정해도 복사본에 영향 무
      - 중첩된 데이터를 수정하면, 원본과 복사본 모두 영향
      - 간단, 빠름 / 중첩된 데이터에서 참조 문제 발생 가능
  
    + 1단계 복사
      - 최상위 레벨의 속성, 요소만 복사
      - 1단계까지만 독립적

    * 방법
      - 스프레드 연산자(...) > 제일 대중적
*/

// 얕은 복사
const arrEX = [1, { name: "Damon" }];
const shallowCopy = [...arrEX]; // 얕은 복사
console.log(arrEX === shallowCopy);

shallowCopy[0] = 2; // 1단계 데이터 변경
console.log(arrEX[0]);

shallowCopy[1].name = "Cathy"; // 중첩 객체 수정 > 원본에 영향
console.log(arrEX[1]);

/*
2. 깊은 복사 Deep Copy
  - 복사 대상 객체의 모든 데이터를 재귀적으로 완전히 새롭게 생성
  - 원본과 복사본이 완전히 독립적인 상태
    > 즉, 중첩된 객체나 배열까지 모두 복사 > 복사본을 수정 > 원본에 아무 영향 무
  
    * 특징
      - 모든 데이터가 독립적으로 복사 (중첩된 참조 포함)
      - 복사본과 원본이 완전히 분리됨
      - 비용, 시간, 메모리 등 성능적 이슈
  
    * 방법
      - JSON.parse(JSON.stringify(object))
        > 간단, 직관적 / undefined 등 특수 테이터는 복사 불가 
      - JSON.stringify(object))
        > 간단, 직관적 / undefined 등 특수 테이터는 복사 불가 
      - JSON.parse(jsonString)
        > 간단, 직관적 / undefined 등 특수 테이터는 복사 불가 
*/

const arrEX2 = [1, { name: "KHJ" }];
const deepCopy = JSON.parse(JSON.stringify(arrEX2));

deepCopy[1].name = "PJA";
console.log(arrEX2[1]);
console.log(deepCopy[1]);

