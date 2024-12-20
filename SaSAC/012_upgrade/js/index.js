/*
  # 구조 분해 할당
    - ES6 추가된 기능
    - 배열이나 객체의 값을 손쉽게 변수로 분해, 할당 가능
    - '순서' 중요
    - 코드가 더 간결, 읽기 쉬움

*/
// 1. 배열의 구조분해 할당
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = ["a", "b", "c"];

// 기존 방식
// const one = arr1[0];
// const two = arr1[1];
// const three = arr1[2];

// const [one, two, three, four, five] = arr1;

// 1) 각 변수에 배열의 인덱스 순으로 값 대응
// const [five, two, abc, four, one] = arr1;
// console.log(one, four, abc, two, five);

// 2) 변수의 값이 undefined일 때 기본 값 할당 가능
// const [x, y, z, alpha, beta = "default"] = arr2;

const lists = ["apple", "grapes"];
[f1, f2, f3 = "orange"] = lists;
console.log(f1, f2, f3);

// 3) 임시 변수 없이 두 변수의 값 교환 가능
let num1 = 10;
let num2 = 20;

// 기존 방식(임시 변수 사용))

// * 객체의 구조분해 할당
//    1) 객체 안의 구조분해 할당

const lectureInfo = {
  name: "Coding on",
  part: "web",
  leader: "damon",
};
console.log(lectureInfo);

function getInfo(lecture) {
  const { name, part, leader } = lecture;
  const outPut = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader}입니다.`;
  return outPut;
}

const result = getInfo(lectureInfo);
console.log("result >>>> ", result);
