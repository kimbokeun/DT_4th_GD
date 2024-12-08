/*
# 함수
  - 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
  - 구조
    - keyword: function
    - name: 함수 이름(camelCase)
    - parameter: 함수 선언시 매개변수로 받을 것
    - body: 함수 내부 코드(Scope)

    - 용어
      - 함수 정의(선언): 함수를 '생성'
      - 함수 호출: 함수를 '사용'

    - 함수 선언 방식
      1. 명시적 함수 선언(함수 선언문)
        - 함수 이름과 매개변수를 명시, 함수의 본문을 중괄호로 감쌈
        - 스크립트 어디에서든 호출 가능
        - "function" 키워드 사용 선언 방식
*/

function helloWorld () {
  // 함수 정의
  // return 키워드 생략 가능(반환 값 X)
  console.log('Hello, World!');
}

helloWorld(); // 함수 호출 - 실행

function helloWorld2(){
  // return 키워드 생략 가능(반환 값 X)
  return 'Hello, World! 2'; // 출력 X
}

console.log(helloWorld2());

/*
        * return? 
          - 반환값
          - 함수 내부(body, block) 코드의 "최종 결과 값"
          - 최종 결과 값을 저장, 보관하기 위한 키워드
          - return 키워드를 만나면 함수 실행 중단(return 다음에 코드 더 작성 의미 X)

      2. 함수 표현식 Function Expression
        - 변수에 익명 함수를 할당(저장)하는 형태
        - JS에서는 함수도 '하나의 값'으로 취급
        - 변수가 선언된 이후에만 호출 가능

        * 익명함수
          - 말 그대로 이름이 없는 함수
          - 함수를 변수에 담기 때문에 이름이 필요 X
          - 이름 지정 가능
            > 단, 이 경우에는 함수 이름은 내부에서 사용 가능
            ex)
*/ 
// const sayHello = funciton hello() {
//   console.log('hello');
// }

// sayHello();
// hello();

const helloWorld3 = function () {
  // return 생략
  console.log('Hello, World! 3');
}

const helloWorld4 = function () {
  // return O
  return 'Hello, World! 4';
}

helloWorld3();
console.log(helloWorld4());
helloWorld3();
helloWorld3();
helloWorld3();
helloWorld3();
helloWorld3();
// 함수는 여러번 호출 가능(재사용)

/*
    * 매개 변수가 있는 함수 .. 매개 변수를 넣어야 하는 규칙
      1) 매개 변수 1개
*/ 

// f(x) = 2x + 3
// x = ?
// => ??

function food(text) {
  return text;
}

console.log(food('제육덮밥'));

const drinkPrice = 2000;
console.log(food(drinkPrice)); // 2000

// 2) 매개 변수 2개
function music(name, title) {
  // return name + ' - ' + title;
  return `${name} - ${title}`;
}

console.log(music('윤도현', '나는 나비'))

function music2(name, title) {
  console.log(`${name} - ${title}`);
}
music2('악뮤', '시간의 계절');

/*
  3. 화살표 함수 arrow funciton (ES6부터 지원)
    - 함수 표현식의 축약형, 간결하게 정의
    - 단일 표현식의 경우에는 중괄호와 return 키워드 생략 가능
    - 코드가 길어진다면(여러줄) 중괄호와 return 키워드 
*/
// 일반형
// function square(x) {
//   return x * x;
// }

// 축약형
const square = (x) =>
  x * x;  
console.log(square(3));

// 일반형
function triangle(base, height) {
  const area = (base * height) / 2;
  return area;
};
console.log(triangle(2, 4));

// 축약형
const triangle1 = (base, height) => {
  const area = (base * height) / 2;
  return area;
};
console.log(triangle1(3, 4));

/*
  호이스팅 Hoisting
    - JS에서 변수 및 함수 선언이 해당 범위의 맨 위로 끌어올려지는 현상
    - '함수 선언문'이 호이스팅!
    - 변수에서는 "var"
    - 좋고 나쁘다 보다는 주의해야 함
    - 코드의 가독성을 높이기 위해 선언을 가능한 상단에 위치시키는 것이 좋음
    - 모든 함수를 상단에서 호출 권장

    >> '함수 표현식'은 호이스팅의 대상이 될 수 없음
      - 변수에 함수가 할당되기 때문에 그 이후에만 호출 가능
      - 가능하면 함수 표현식을 권장! (화살표 함수 연습과 함께)
      - 현업에서 화살표 함수를 많이 씀
*/
sayHello5();
function sayHello5() {
  console.log('hello!');
}

const sayHello6 = () => {
  console.log('hello! 2');
};

const sayHello7 = () => console.log('hello! 7');

const sayHello8 = () => console.log('hellw! 8');
