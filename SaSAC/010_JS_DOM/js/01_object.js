/*
   변수 or 함수 매개변수가 전달될 때,
   값 또는 참조가 어떻게 전달되는지에 대해 배워보자!

  # 1. pss by value(값에 의한 전달)
      - 원시타입(Primitive type)은 값(value)이 복사되어 전달
      - 함수 내에서 값을 변경하더라도 호출한 원본 변수에는 영향을 미치지 않음


*/ 
let num = 1;
let num2 = num;
console.log(`num: ${num}, num2: ${num2}`);
console.log(num === num2);
// 값의 복사가 일어남
// 두 변수는 메모리에서 별도의 공간에서 저장됨
//  > 서로 독립적으로 존재 

num = 5; // 5로 재할당
console.log(`num: ${num}, num2: ${num2}`);
console.log(num === num2);
// num2는 여전히 이전 값 '1'을 유지
//  > num2가 num의 복사본이기 때문

function changeValue(x) {
  x = 10; // 매개변수에 10이라는 값 할당
  console.log(`x >>>> `, x);
};

changeValue(num);
console.log(`num >>>> `, num);

/*
  함수로 전달될 때 변수의 값이 복사, 함수의 매개변수로 전달
  따라서, 함수 내에서 매개변수의 값을 변경하더라도 원본 변수의 값은 변하지 않음
    > 함수 내에서 사용되는 변수는 그 함수 스코프 내에서만 유효(지역변수)
    >> x가 num의 값의 복사본을 가지고 있기 때문
*/ 

/*
  # 2. pass by reference(참조에 의한 전달)
    - 객체나 배열 같은 참조 타임 전달시 사용
    - 변수의 메모리 위치(참조)가 전달되므로, 함수 내에서 요소를 변경하면 원본 변수도 변경
*/
const object = {
  one : 1,
  two: 2
};
const object2 = object;
// 동일한 객체의 참조를 갖게 됨
// object와 object2는 같은 메모리 주소를 참조, 동일한 객체를 가리킴
console.log(object, object2);
console.log(object === object2);

object.five =  5; // 키, 키값 생성
console.log(object, object2);
console.log(object === object2);
// object와 object2는 현 데이터, 참조값(address, 주소)가 같음
console.log(`object: ${object}, object2: ${object2}`);
console.log(`object: ${JSON.stringify(object)}, object2: ${JSON.stringify(object2)}`);
// 문자열 템플릿 (${})에서는 객체가 '문자열로 변환'되어 출력
// 객체를 문자열 템플릿에서 읽기 좋게 출력하려면, 
// JSON.stringify 메소드 사용
//  > 'JS 객체 또는 값'을 JSON 형식의 문자열로 변환
//  > 데이터를 표현하는 경량의 데이터 형식
//  > 키와 값 쌍으로 표현하는 데 주 사용
//  > 주로 데이터를 네트워크 요청이나 파일 저장에 적합한 문자열로 변환
//    예) 서버로 보낼 때 

const object3 = {
  one : 1,
  two: 2
};

const object4 = {
  one : 1,
  two: 2
};


/*
object3과 object4는 현 데이터는 같지만, 서로 다른 별도의 객체
즉, 참조값(address, 주소)가 상이
*/ 

object3.five = 5;
console.log(object3, object4);
console.log(object3 === object4);



